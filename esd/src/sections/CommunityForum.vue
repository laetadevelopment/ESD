<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="community-forum">
    <div class="content-title">
      <h1>Community Forum</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we believe that one of the greatest strengths of our platform is the community of users and experts who share their knowledge, insights, and experiences. That's why we've created the ESD Community Forum — a dedicated space for ESD users to connect, learn, and collaborate.</p>
      <p>The ESD Community Forum is a free, online platform where you can:</p>
      <ol>
        <li>Ask questions and get answers from ESD experts and other users</li>
        <li>Share your own tips, tricks, and best practices for using ESD</li>
        <li>Discuss electrical blueprint analysis trends, challenges, and solutions</li>
        <li>Showcase your own projects and get feedback from the community</li>
        <li>Suggest new features and improvements for ESD</li>
        <li>Connect with other professionals in the electrical design industry</li>
      </ol>
      <p>Our Community Forum is organized into several key categories, including:</p>
      <ul>
        <li>General Discussion: For broad discussions about ESD, electrical blueprint analysis, and related topics.</li>
        <li>Feature Specific Forums: For focused discussions and questions about specific ESD features, such as symbol detection, collaboration, integrations, etc.</li>
        <li>Tips and Tricks: For sharing efficient ways to use ESD and streamline your blueprint analysis workflow.</li>
        <li>Showcase: For showcasing your own ESD projects and getting feedback from the community.</li>
        <li>Feature Requests: For suggesting new features and improvements for ESD.</li>
        <li>Industry News: For discussing the latest trends, challenges, and solutions in the electrical design industry.</li>
      </ul>
      <p>The ESD Community Forum is moderated by our team of ESD experts, who are actively involved in answering questions, sharing insights, and facilitating discussions. However, the real power of the forum comes from the collective knowledge and experience of our user community.</p>
      <p>By participating in the ESD Community Forum, you can:</p>
      <ul>
        <li>Get quick answers to your ESD questions from a wide range of experts and users</li>
        <li>Learn new tips and tricks to optimize your use of ESD</li>
        <li>Stay up to date with the latest trends and best practices in electrical blueprint analysis</li>
        <li>Build your professional network and connect with other experts in your field</li>
        <li>Contribute to the ongoing development and improvement of ESD</li>
      </ul>
      <p>We encourage all ESD users to actively participate in the Community Forum, whether you're asking questions, sharing insights, or just reading and learning from others. The more vibrant and engaged our community is, the more value everyone gets from the platform.</p>
      <p>To access the ESD Community Forum, simply log in to your ESD account and click on the "Community" link in the top navigation. You can also access the forum directly at community.esd.one.</p>
      <p>We're excited to have you join the ESD Community Forum and to see the knowledge, creativity, and collaboration that emerges from this space. Together, we can advance the field of electrical blueprint analysis and make ESD the best solution it can be.</p>
      <p>See you on the forum!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.community-forum {
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
