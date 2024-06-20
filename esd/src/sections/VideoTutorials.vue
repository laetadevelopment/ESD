<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="video-tutorials">
    <div class="content-title">
      <h1>Video Tutorials</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>In addition to our written Knowledge Base articles, ESD also offers a comprehensive library of video tutorials to help you learn and master our electrical blueprint analysis solution. Our video tutorials provide a visual and interactive way to explore ESD's features and see them in action.</p>
      <p>Some of the key topics covered in our video tutorials include:</p>
      <ol>
        <li>ESD Basics
        <ul>
          <li>A beginner's guide to ESD's interface and key features</li>
          <li>How to upload and process your first blueprint</li>
          <li>Tips and tricks for navigating ESD efficiently</li>
        </ul></li>
        <li>Symbol Detection and Customization
        <ul>
          <li>How ESD's symbol detection technology works</li>
          <li>Defining and training custom symbol libraries</li>
          <li>Editing and annotating detected symbols</li>
        </ul></li>
        <li>Collaboration Workflows
        <ul>
          <li>Setting up and managing projects with team members</li>
          <li>Using comments and tasks for effective communication</li>
          <li>Sharing projects with external stakeholders</li>
        </ul></li>
        <li>Integrations and Automation
        <ul>
          <li>Integrating ESD with AutoCAD, Revit, and other CAD tools</li>
          <li>Using the ESD API for custom integrations and automations</li>
          <li>Setting up batch processing tasks for large blueprint sets</li>
        </ul></li>
        <li>Advanced Features and Techniques
        <ul>
          <li>Optimizing ESD's performance for large and complex blueprints</li>
          <li>Using ESD's reporting and analytics features for data driven insights</li>
          <li>Applying best practices for version control and project management</li>
        </ul></li>
      </ol>
      <p>Our video tutorials are designed to be concise, informative, and easy to follow. Each tutorial is typically 5 15 minutes long and focuses on a specific feature or workflow. They include clear narration, on screen annotations, and real world examples to help you understand and apply the concepts quickly and effectively.</p>
      <p>In addition to our core video tutorial library, we also offer:</p>
      <ul>
        <li>Live and recorded webinars on ESD features and electrical blueprint analysis topics</li>
        <li>Short "tips and tricks" videos highlighting efficient ways to use ESD</li>
        <li>User submitted video content showcasing creative applications of ESD's features</li>
      </ul>
      <p>We're constantly adding new video tutorials based on user feedback and the evolution of ESD's features. If there's a topic you'd like to see covered in a video tutorial, or if you have any suggestions for how we can improve our video content, please let us know!</p>
      <p>Our goal with ESD's video tutorials is to provide you with a dynamic and engaging way to learn about our solution and to see its capabilities in real world contexts. Whether you prefer visual learning or just want to see ESD's features in action, our video tutorials are a great resource to complement our written Knowledge Base articles.</p>
      <p>So check out our video tutorial library, learn at your own pace, and see how ESD can revolutionize your electrical blueprint analysis workflow. And remember, our support team is always here if you need any additional assistance or guidance.</p>
      <p>Happy watching and learning!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.video-tutorials {
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
