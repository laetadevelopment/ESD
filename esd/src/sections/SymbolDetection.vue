<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="symbol-detection">
    <div class="content-title">
      <h1>Symbol Detection</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At the heart of ESD is our advanced symbol detection technology, which uses state of the art machine learning algorithms and computer vision techniques to automatically identify and label electrical symbols on blueprints. Our app can quickly and accurately detect a wide range of symbols, including:</p>
      <ul>
        <li>Outlets and switches</li>
        <li>Lighting fixtures and controls</li>
        <li>Circuit breakers and fuses</li>
        <li>Wires, cables, and conduits</li>
        <li>Transformers and power supplies</li>
        <li>Sensors, detectors, and alarms</li>
        <li>Motors, pumps, and fans</li>
        <li>And many more</li>
      </ul>
      <p>ESD's symbol detection is highly accurate, with a detection rate of over 99%, even on complex or poorly scanned blueprints. This means you can trust our app to identify and label symbols correctly, saving you time and reducing the risk of errors.</p>
      <p>Our detection technology is also fast, with the ability to process a typical blueprint in just a few seconds. This speed, combined with our batch processing capabilities, means you can analyze and label hundreds or even thousands of blueprints in a matter of minutes.</p>
      <p>But ESD's symbol detection isn't just about speed and accuracy — it's also about flexibility and customization. Our app allows you to:</p>
      <ul>
        <li>Define custom symbol libraries and detection rules</li>
        <li>Adjust detection sensitivity and thresholds</li>
        <li>Manually review and edit detected symbols</li>
        <li>Train the detection model on your specific blueprints and symbols</li>
      </ul>
      <p>This level of control and adaptability means that ESD can be tailored to your unique needs and workflows, ensuring that you get the most value out of our app.</p>
      <p>Under the hood, ESD's symbol detection technology is powered by a combination of convolutional neural networks (CNNs), object detection algorithms (such as YOLO or Faster R CNN), and image processing techniques. Our team of machine learning experts and electrical engineers have worked tirelessly to develop and refine these algorithms, ensuring that ESD remains at the cutting edge of symbol detection.</p>
      <p>But we're not content to rest on our laurels — we're constantly researching and developing new techniques to improve the accuracy, speed, and functionality of our symbol detection. From exploring new neural network architectures to incorporating user feedback and real world data, we're always looking for ways to push the boundaries of what's possible.</p>
      <p>At ESD, we believe that our symbol detection technology is a game changer for the electrical industry. By automating this tedious and time consuming task, we're helping professionals work smarter, faster, and more efficiently — and ultimately, to deliver better results to their clients.</p>
      <p>If you're curious to see ESD's symbol detection in action, we invite you to try our app for free. Sign up for our 14 day trial and experience the power of automated symbol detection for yourself!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.symbol-detection {
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
