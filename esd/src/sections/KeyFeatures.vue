<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="key-features">
    <div class="content-title">
      <h1>Key Features</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <ol>
        <li>Advanced Symbol Recognition Our state of the art machine learning algorithms and computer vision technology enable ESD to accurately identify and label a wide range of electrical symbols, including:
        <ul>
          <li>Switches and outlets</li>
          <li>Lighting fixtures and controls</li>
          <li>Circuit breakers and fuses</li>
          <li>Wiring and cable types</li>
          <li>Transformers and power supplies</li>
          <li>Sensors and detectors</li>
          <li>And much more!</li>
        </ul>
        <p>ESD's advanced symbol recognition capabilities ensure that no symbol goes undetected, saving you time and effort in manually labeling your blueprints.</p></li>
        <li>Batch Processing With ESD's batch processing feature, you can analyze and label multiple blueprints simultaneously, dramatically increasing your productivity. Simply upload a folder containing your blueprints, and ESD will process them all at once, providing you with labeled and organized files ready for use.
        <p>Batch processing is perfect for large scale projects or when you need to process a high volume of blueprints quickly. Whether you have 10 or 10,000 blueprints, ESD can handle the job with ease.</p></li>
        <li>Seamless Collaboration ESD makes it easy to collaborate with team members, stakeholders, and clients. With our built in collaboration tools, you can:
        <ul>
          <li>Share projects with specific team members or external parties</li>
          <li>Assign tasks and set deadlines for project milestones</li>
          <li>Communicate and provide feedback directly within the app</li>
          <li>Track progress and receive notifications on project updates</li>
        </ul>
        <p>Our collaboration features ensure that everyone stays on the same page, reducing miscommunication and enabling smoother, more efficient project management.</p></li>
        <li>Robust Integrations ESD seamlessly integrates with your existing CAD and design tools, allowing you to import and export blueprints with ease. Our app supports a wide range of file formats, including:
        <ul>
          <li>AutoCAD (DWG, DXF)</li>
          <li>Sketch (SKP)</li>
          <li>Adobe Illustrator (AI)</li>
          <li>Scalable Vector Graphics (SVG)</li>
          <li>Portable Document Format (PDF)</li>
        </ul>
        <p>By integrating with your preferred tools, ESD ensures a smooth and uninterrupted workflow, enabling you to focus on your core tasks without the hassle of file compatibility issues.</p></li>
        <li>Progressive Web App (PWA) ESD is built as a Progressive Web App (PWA), providing you with the convenience and accessibility of a web app combined with the performance and functionality of a native mobile app. With our PWA, you can:
        <ul>
          <li>Access ESD from any device with a web browser</li>
          <li>Install ESD on your home screen for quick and easy access</li>
          <li>Receive push notifications for important updates and alerts</li>
          <li>Enjoy fast load times and smooth navigation, even on slower networks</li>
          <li>Work offline or in low connectivity environments</li>
        </ul>
        <p>Our PWA ensures that you can access your projects and use ESD's features anytime, anywhere, without the need for a separate mobile app download.</p></li>
      </ol>
      <p>At ESD, we're committed to providing you with the most advanced, user friendly, and efficient electrical symbol detection solution on the market. Our key features are designed to streamline your workflow, boost your productivity, and help you deliver outstanding results to your clients.</p>
      <p>Discover the power of ESD today and take your electrical blueprint analysis to the next level!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.key-features {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
.content-body {
  padding: 25px;
}
</style>
