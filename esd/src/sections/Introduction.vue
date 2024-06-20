<script setup lang="ts">
import { defineEmits } from 'vue'
import Notifications from '@/components/Notifications.vue'

const emit = defineEmits<{
  (e: 'freeTrial'): void
}>()

function freeTrial() {
  emit('freeTrial')
}
</script>

<template>
  <div class="introduction">
    <div class="content-title">
      <h1>Introduction</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
      <p>Welcome to the future of electrical blueprint analysis and symbol detection. Our cutting edge Electrical Symbol Detection (ESD) app revolutionizes the way engineers, contractors, and architects work with electrical blueprints, saving time, reducing errors, and streamlining the design process.</p>
      <p>Built on state of the art machine learning algorithms and computer vision technology, ESD is the ultimate tool for anyone working with electrical blueprints. Our app automatically detects and labels electrical symbols in seconds, eliminating the need for manual labeling and data entry.</p>
      <p>With ESD, you can:</p>
      <ol>
        <li>Instantly identify and label electrical symbols on blueprints</li>
        <li>Process multiple blueprints in batch mode for maximum efficiency</li>
        <li>Collaborate seamlessly with team members and stakeholders</li>
        <li>Integrate with your favorite CAD and design tools</li>
        <li>Access your projects anytime, anywhere, with our Progressive Web App (PWA)</li>
      </ol>
      <p>Whether you're an electrical engineer, contractor, or architect, ESD is the perfect solution for streamlining your workflow and improving the accuracy of your electrical blueprints. Our app is designed with user experience in mind, providing an intuitive interface and powerful features that make symbol detection a breeze.</p>
      <p>Key benefits of using ESD:</p>
      <ul>
        <li>Save time: Reduce manual labeling and data entry by up to 90%</li>
        <li>Increase accuracy: Eliminate human error and ensure consistent, reliable results</li>
        <li>Enhance collaboration: Share projects and collaborate with team members in real time</li>
        <li>Boost productivity: Streamline your workflow and focus on high value tasks</li>
        <li>Improve client satisfaction: Deliver high quality, error free blueprints to your clients</li>
      </ul>
      <p>At ESD, we're passionate about empowering professionals in the electrical industry with the tools they need to succeed. Our team of experts is constantly working to improve and expand the capabilities of our app, ensuring that you always have access to the latest and greatest in electrical symbol detection technology.</p>
      <p>Join the thousands of satisfied users who have already discovered the power of ESD. Sign up for a free trial today and experience the future of electrical blueprint analysis for yourself!</p>
      <button @click="freeTrial">Try ESD Free for 14 Days</button>
    </div>
  </div>
</template>

<style scoped>
.introduction {
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
