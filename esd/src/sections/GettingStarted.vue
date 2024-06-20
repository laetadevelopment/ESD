<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="getting-started">
    <div class="content-title">
      <h1>Getting Started</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Getting started with ESD is quick and easy. Here's a step by step guide to help you set up your account and start analyzing blueprints:</p>
      <ol>
        <li>Sign up for an account:
        <ul>
          <li>Go to esd.one and click the "Sign Up" button in the top right corner.</li>
          <li>Choose your plan (Individual or Team) and enter your details.</li>
          <li>If you're signing up for a Team plan, you'll also need to invite team members and set their permissions.</li>
        </ul></li>
        <li>Upload your first blueprint:
        <ul>
          <li>Once you're logged in, click the "New Project" button on your dashboard.</li>
          <li>Give your project a name and description, then click "Create".</li>
          <li>In the project view, click "Upload Blueprints" and select the file(s) you want to analyze.</li>
          <li>ESD will automatically detect and label electrical symbols in your blueprint.</li>
        </ul></li>
        <li>Review and edit the detected symbols:
        <ul>
          <li>Once the analysis is complete, you'll see the annotated blueprint with detected symbols highlighted.</li>
          <li>Review the detected symbols and make any necessary edits or corrections.</li>
          <li>You can also add custom labels or annotations to the blueprint.</li>
        </ul></li>
        <li>Collaborate with your team:
        <ul>
          <li>If you're working with a team, you can invite team members to collaborate on the project.</li>
          <li>Use the built in commenting and chat features to discuss the blueprint and coordinate your work.</li>
          <li>You can also assign tasks and set deadlines for specific actions or revisions.</li>
        </ul></li>
        <li>Export and integrate:
        <ul>
          <li>When you're ready, you can export the annotated blueprint in a variety of formats (PDF, DWG, JSON, etc.).</li>
          <li>You can also integrate the blueprint with other tools and platforms using our integrations or API.</li>
          <li>If you're using ESD as part of a larger workflow, you can set up automated export and integration tasks.</li>
        </ul></li>
      </ol>
      <p>That's it! With just a few simple steps, you can start using ESD to streamline your electrical blueprint analysis and collaboration.</p>
      <p>Of course, there's much more you can do with ESD, from defining custom symbol libraries to setting up automated batch processing tasks. But this guide should give you a good foundation to start with.</p>
      <p>We also recommend checking out our knowledge base and video tutorials for more in depth guidance and best practices.</p>
      <p>And remember, our support team is always here to help if you have any questions or run into any issues. Don't hesitate to reach out via email, chat, or phone (for enterprise customers).</p>
      <p>At ESD, we're committed to making electrical blueprint analysis as easy and efficient as possible, so you can focus on what matters most: designing and building great electrical systems.</p>
      <p>So what are you waiting for? Sign up for ESD today and start streamlining your workflow!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.getting-started {
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
