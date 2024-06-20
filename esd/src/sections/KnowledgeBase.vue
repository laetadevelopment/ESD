<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="knowledge-base">
    <div class="content-title">
      <h1>Knowledge Base</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Welcome to the ESD Knowledge Base, your comprehensive resource for learning about and getting the most out of our electrical blueprint analysis solution. Here, you'll find a wide range of articles, tutorials, and guides covering every aspect of ESD's features and functionality.</p>
      <p>Some of the key topics covered in our Knowledge Base include:</p>
      <ol>
        <li>Getting Started
        <ul>
          <li>Setting up your ESD account</li>
          <li>Uploading and processing your first blueprint</li>
          <li>Navigating the ESD interface</li>
          <li>Essential keyboard shortcuts and tips</li>
        </ul></li>
        <li>Symbol Detection and Annotation
        <ul>
          <li>Understanding ESD's symbol detection technology</li>
          <li>Defining custom symbol libraries</li>
          <li>Editing and annotating detected symbols</li>
          <li>Best practices for optimizing detection accuracy</li>
        </ul></li>
        <li>Collaboration and Project Management
        <ul>
          <li>Inviting team members and setting permissions</li>
          <li>Using comments and chat features for communication</li>
          <li>Assigning tasks and setting project milestones</li>
          <li>Sharing projects with external stakeholders</li>
        </ul></li>
        <li>Integrations and Automation
        <ul>
          <li>Integrating ESD with popular CAD tools</li>
          <li>Using the ESD API for custom integrations</li>
          <li>Setting up automated batch processing tasks</li>
          <li>Exporting and syncing data with other platforms</li>
        </ul></li>
        <li>Troubleshooting and Support
        <ul>
          <li>Resolving common issues and errors</li>
          <li>Optimizing ESD for better performance</li>
          <li>Contacting ESD support for assistance</li>
          <li>Staying up to date with ESD's status and maintenance schedule</li>
        </ul></li>
      </ol>
      <p>Our Knowledge Base articles are written by ESD experts and are regularly updated to reflect the latest features and best practices. They include step by step instructions, screenshots, and video walkthroughs to help you learn and apply ESD's features quickly and easily.</p>
      <p>In addition to our core Knowledge Base articles, we also offer:</p>
      <ul>
        <li>Frequently Asked Questions (FAQ) section for quick answers to common queries</li>
        <li>Community forum where you can connect with other ESD users and experts</li>
        <li>Live and recorded webinars on ESD features and electrical blueprint analysis topics</li>
        <li>Case studies and success stories from real ESD customers</li>
      </ul>
      <p>We're constantly expanding and improving our Knowledge Base based on user feedback and the evolution of ESD's features. If there's a topic you'd like to see covered, or if you have any suggestions for how we can improve our Knowledge Base, please let us know!</p>
      <p>Our goal with the ESD Knowledge Base is to empower you to get the most out of our solution and to streamline your electrical blueprint analysis workflow. Whether you're a new user just getting started with ESD or an advanced user looking to optimize your processes, we have the resources and expertise to help you succeed.</p>
      <p>So dive in, explore, and learn — and remember, our support team is always here if you need any additional assistance or guidance.</p>
      <p>Happy learning!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.knowledge-base {
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
