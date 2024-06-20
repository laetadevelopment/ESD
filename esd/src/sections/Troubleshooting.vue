<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="troubleshooting">
    <div class="content-title">
      <h1>Troubleshooting</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Even with the most user friendly and reliable software, issues can sometimes arise. That's why we've put together this troubleshooting guide to help you resolve common problems and get back to work as quickly as possible.</p>
      <ol>
        <li>Login issues:
        <ul>
          <li>If you're having trouble logging in, first double check that you're using the correct email address and password.</li>
          <li>If you've forgotten your password, click the "Forgot Password" link on the login page and follow the instructions to reset it.</li>
          <li>If you're still having trouble, try clearing your browser cache and cookies, or using a different browser.</li>
          <li>If the issue persists, contact our support team for assistance.</li>
        </ul></li>
        <li>Upload errors:
        <ul>
          <li>If you're experiencing errors when uploading blueprints, first check that your file is in a supported format (PDF, DWG, DXF, etc.).</li>
          <li>Make sure your file is not corrupted or password protected.</li>
          <li>Check that your internet connection is stable and that you have enough bandwidth to upload the file.</li>
          <li>If the issue persists, try uploading a smaller file or contact our support team for assistance.</li>
        </ul></li>
        <li>Detection accuracy issues:
        <ul>
          <li>If ESD is not detecting symbols accurately, first check that you've selected the correct symbol library and detection settings for your blueprint.</li>
          <li>Make sure your blueprint is high quality and not blurry or distorted.</li>
          <li>If you're using custom symbols, make sure they're defined correctly in your library and that the detection model has been trained on them.</li>
          <li>If the issue persists, contact our support team and provide a sample blueprint for analysis.</li>
        </ul></li>
        <li>Collaboration issues:
        <ul>
          <li>If you're having trouble collaborating with team members, first check that you've invited them to the correct project and set their permissions appropriately.</li>
          <li>Make sure all team members are using the latest version of ESD and have a stable internet connection.</li>
          <li>If you're experiencing sync issues or conflicts, try refreshing the page or logging out and back in.</li>
          <li>If the issue persists, contact our support team and provide details on the specific collaboration feature that's not working.</li>
        </ul></li>
        <li>Integration issues:
        <ul>
        <li>If you're having trouble integrating ESD with other tools or platforms, first check that you've set up the integration correctly and have the necessary API keys or credentials.</li>
        <li>Make sure you're using the latest version of both ESD and the integrated tool or platform.</li>
        <li>Check our knowledge base or integration documentation for specific troubleshooting steps.</li>
        <li>If the issue persists, contact our support team and provide details on the specific integration that's not working.</li>
        </ul></li>
      </ol>
      <p>Remember, our support team is always here to help you troubleshoot and resolve any issues you may encounter. Don't hesitate to reach out via email, chat, or phone (for enterprise customers).</p>
      <p>We also recommend regularly checking our status page and subscribing to our email updates for information on any known issues or maintenance windows.</p>
      <p>At ESD, we're committed to providing a smooth and reliable experience for all our users. If you do encounter an issue, we'll work with you to resolve it as quickly and effectively as possible, so you can get back to focusing on your electrical blueprint analysis and design work.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.troubleshooting {
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
