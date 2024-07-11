import time
import os
import tempfile
import json
import requests
import numpy as np
from math import ceil
from uuid import uuid4
from flask import Flask, request, jsonify
from flask_cors import CORS
from firebase_admin import initialize_app, storage
from pdf2image import convert_from_path
from roboflow import Roboflow
from PIL import Image, ImageDraw, ImageEnhance
import sys

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# Initialize Firebase App
initialize_app()

# Set prediction variables
TILE_SIZE = 640
CLASS_COLORS = {
    'DUPLEX-RECEPTACLE': (134, 34, 255),  # #8622FF
    'QUAD-RECEPTACLE': (33, 62, 255),    # #213eff
    'TRACK-LUMINAIRE': (254, 0, 86)      # #FE0056
}

@app.route('/', methods=['POST'])
def process_pdf():
    print("Starting PDF processing", file=sys.stderr)
    # Start processing Blueprint PDF
    start_time = time.time()
    start_timestamp = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(start_time))

    # Set stats variables
    total_pages_created = 0
    total_tiles_created = 0
    total_predictions_made = 0
    annotated_pages = []

    # Set request variables
    request_json = request.json
    project_id = request_json['projectId']
    blueprint_url = request_json['blueprintUrl']

    print(f"Processing blueprint: {blueprint_url}", file=sys.stderr)

    # Download Blueprint PDF
    response = requests.get(blueprint_url)
    input_pdf = "/tmp/input.pdf"

    with open(input_pdf, 'wb') as file:
        file.write(response.content)

    print("PDF downloaded successfully", file=sys.stderr)

    # Convert Blueprint PDF to WebP Pages
    pages = convert_from_path(input_pdf, fmt='WEBP')
    print(f"Converted PDF to {len(pages)} WebP pages", file=sys.stderr)

    # Set Firebase Storage Bucket
    bucket = storage.bucket('electrical-symbol-detection.appspot.com')

    print("Initializing Roboflow...", file=sys.stderr)
    rf = Roboflow(api_key="RLdksYTZusd2ueAoVynM")
    project = rf.workspace().project("electrical-symbol-detection-tile")
    model = project.version(10).model
    print("Roboflow initialized successfully", file=sys.stderr)

    BATCH_SIZE = 16  # Adjust this based on your resources and requirements

    for i, page in enumerate(pages):
        print(f"Processing page {i+1}/{len(pages)}", file=sys.stderr)
        num_x = ceil(page.width / TILE_SIZE)
        num_y = ceil(page.height / TILE_SIZE)
        annotated_tiles = []
        batch = []

        for x in range(num_x):
            for y in range(num_y):
                tile_img = page.crop((x * TILE_SIZE, y * TILE_SIZE, (x + 1) * TILE_SIZE, (y + 1) * TILE_SIZE))
                tile_img = ImageEnhance.Contrast(tile_img).enhance(2.0)
                tile_img = tile_img.convert("RGB")
                
                batch.append((x, y, np.array(tile_img)))
                
                if len(batch) == BATCH_SIZE or (x == num_x - 1 and y == num_y - 1):
                    print(f"Processing batch of {len(batch)} tiles", file=sys.stderr)
                    try:
                        batch_images = [item[2] for item in batch]
                        print("Sending prediction request to Roboflow...", file=sys.stderr)
                        prediction_results = model.predict(batch_images, confidence=87, overlap=30)
                        print(f"Received {len(prediction_results)} prediction results", file=sys.stderr)
                        
                        for (x, y, tile_array), pred in zip(batch, prediction_results):
                            print(f"Processing predictions for tile ({x}, {y})", file=sys.stderr)
                            tile_img = Image.fromarray(tile_array)
                            draw = ImageDraw.Draw(tile_img)
                            for detection in pred['predictions']:
                                class_name = detection['class']
                                x1, y1, x2, y2 = (
                                    detection['x'] - detection['width'] / 2,
                                    detection['y'] - detection['height'] / 2,
                                    detection['x'] + detection['width'] / 2,
                                    detection['y'] + detection['height'] / 2
                                )
                                draw.rectangle([(x1, y1), (x2, y2)], outline=CLASS_COLORS[class_name], width=2)
                            
                            annotated_tiles.append((x, y, tile_img))
                            total_predictions_made += len(pred['predictions'])
                        
                        batch = []
                    except Exception as e:
                        print(f"Error during batch prediction: {str(e)}", file=sys.stderr)
                        annotated_tiles.extend([(x, y, Image.fromarray(img)) for x, y, img in batch])
                        batch = []
                
                total_tiles_created += 1

        print(f"Stitching annotated tiles for page {i+1}", file=sys.stderr)
        # Stitch Annotated Tiles into Annotated Page
        annotated_page = Image.new('RGB', page.size)
        for x, y, tile_img in annotated_tiles:
            annotated_page.paste(tile_img, (x * TILE_SIZE, y * TILE_SIZE))

        page_filename = f'page{i}.webp'

        print(f"Uploading annotated page {i+1} to Firebase Storage", file=sys.stderr)
        with tempfile.NamedTemporaryFile(suffix='.webp', delete=False) as temp_file:
            annotated_page.save(temp_file.name, 'WEBP')
            blob = bucket.blob(f"projects/{project_id}/pages/{page_filename}")
            token = uuid4()
            metadata = {"firebaseStorageDownloadTokens": token}
            blob.metadata = metadata
            blob.upload_from_filename(temp_file.name, content_type='image/webp')
            page_url = f"https://firebasestorage.googleapis.com/v0/b/{bucket.name}/o/{blob.name.replace('/', '%2F')}?alt=media&token={token}"
            annotated_pages.append({
                'name': page_filename,
                'url': page_url
            })

        os.unlink(temp_file.name)

        total_pages_created += 1

    # Blueprint processing finished
    end_time = time.time()
    end_timestamp = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(end_time))
    total_time = end_time - start_time

    # Blueprint processing stats
    stats = {
        'time': total_time,
        'pages': total_pages_created,
        'tiles': total_tiles_created,
        'predictions': total_predictions_made,
        'annotations': annotated_pages
    }

    print(f"PDF processing completed. Stats: {stats}", file=sys.stderr)

    return jsonify(stats)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))