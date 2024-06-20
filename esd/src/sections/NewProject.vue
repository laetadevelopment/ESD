<script setup lang="ts">
import { defineEmits } from 'vue'
import Notifications from '@/components/Notifications.vue'

const emit = defineEmits<{
  (e: 'startWizard'): void
}>()

function wizard() {
  emit('startWizard')
}
</script>

<template>
  <div class="new-project">
    <div class="content-title">
      <h1>New Project</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <div class="logged-in">
        <img @click="wizard" alt="Start New Project" src="@/assets/start.svg" width="300" />
      </div>
      <p>Starting a new electrical blueprint analysis project in ESD is quick and easy, thanks to our intuitive New Project Wizard. Whether you're working on a small residential job or a large commercial complex, the New Project section of your Dashboard guides you through the process of setting up your project for success.</p>
      <p>To create a new project, simply click the "Start" icon above after you have created a new user account and logged in. This will open the New Project Wizard, which consists of the following steps:</p>
      <ol>
        <li>Blueprint Upload
          <ul>
            <li>You are prompted to upload your blueprint file (PDF format) by either dragging and dropping the file or clicking a button to browse your local files.</li>
            <li>Once the upload is complete, a success message is displayed, and you are taken to the next step.</li>
          </ul>
        </li>
        <li>Blueprint Processing
          <ul>
            <li>The uploaded blueprint is automatically processed.</li>
            <li>A processing animation, such as a spinning gear or a progress bar, is displayed to indicate that the system is working on preparing the blueprint for symbol detection.</li>
          </ul>
        </li>
        <li>Symbol Detection
          <ul>
            <li>The electrical symbols are detected in the processed blueprint images.</li>
            <li>A visual representation, such as a blueprint grid with highlighted symbols, is displayed to showcase the detection process in action.</li>
          </ul>
        </li>
        <li>Results Visualization
          <ul>
            <li>The detected symbols are displayed on the blueprint, with bounding boxes around each symbol.</li>
            <li>You can zoom in and out, pan around the blueprint, and click on individual symbols to view more information (e.g., symbol type, coordinates).</li>
          </ul>
        </li>
        <li>Project Summary
          <ul>
            <li>A summary of the detection results is presented, including the total count of each detected symbol class.</li>
            <li>The summary is visually appealing, using charts, graphs, and other informative visualizations to convey the data.</li>
          </ul>
        </li>
      </ol>
      <p>Once you've completed all the steps in the New Project Wizard, click the "Save" button at the bottom right of the screen to finalize your new project. The project will appear in the All Projects list as well as the Recent Projects list in your Dashboard.</p>
      <p>At ESD, we understand that every electrical blueprint analysis project is unique, with its own set of requirements, challenges, and stakeholders. That's why we've designed our New Project workflow to be flexible, straight forward, and user friendly, enabling you to create your projects quickly and easily, while still providing the power and control you need to get the job done right.</p>
      <p>So go ahead and start a New Project today – and feel confident that you have the tools and support you need to succeed!</p>
    </div>
  </div>
</template>

<style scoped>
.new-project {
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
.content-body .logged-in {
  display: flex;
  justify-content: center;
}
.content-body img {
  cursor: pointer;
}
</style>
