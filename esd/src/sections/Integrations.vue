<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="integrations">
    <div class="content-title">
      <h1>Integrations</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we know that our app is just one part of your larger electrical design and analysis workflow. That's why we've made it a priority to integrate with the tools and platforms you already use and love, so you can work seamlessly and efficiently across your entire toolchain.</p>
      <p>Our app offers a wide range of integrations, including:</p>
      <ol>
        <li>CAD and design tools: Integrate ESD with popular CAD and design tools like AutoCAD, Revit, SketchUp, and more. Import and export files, sync changes, and access ESD's features directly from your design environment.</li>
        <li>Project management platforms: Connect ESD with project management platforms like Asana, Trello, Jira, and Basecamp to keep your electrical blueprint analysis in sync with your larger project plans and tasks.</li>
        <li>Communication and collaboration tools: Integrate ESD with communication and collaboration tools like Slack, Microsoft Teams, and Google Workspace to streamline your team's communication and keep everyone on the same page.</li>
        <li>Cloud storage and file sharing: Link ESD with cloud storage and file sharing services like Google Drive, Dropbox, and Box to easily access and share your blueprints and projects from anywhere, on any device.</li>
        <li>Custom and API integrations: Build custom integrations or use our API to connect ESD with your proprietary tools and workflows. Our flexible and well-documented API makes it easy to extend and customize ESD to fit your specific needs.</li>
      </ol>
      <p>Integrating ESD with your existing tools and platforms is easy and straightforward. Simply navigate to the "Integrations" section of your account settings, choose the tool you want to integrate, and follow the step-by-step instructions. In most cases, you'll just need to provide your login credentials and grant ESD the necessary permissions.</p>
      <p>Once integrated, you can enjoy a host of benefits, such as:</p>
      <ul>
        <li>Automatic file syncing and updates across tools</li>
        <li>Streamlined workflows and reduced context switching</li>
        <li>Centralized communication and collaboration</li>
        <li>Consistent data and version control</li>
        <li>And more</li>
      </ul>
      <p>But integrations aren't just about convenience – they're also about unleashing the full potential of your tools and data. By connecting ESD with your larger ecosystem, you can gain new insights, automate repetitive tasks, and discover new ways of working that were previously impossible.</p>
      <p>At ESD, we're committed to continuously expanding and improving our integrations based on user feedback and industry trends. If there's a tool or platform you'd like to see us integrate with, let us know! We're always eager to hear from our users and to find new ways to make your work easier and more efficient.</p>
      <p>Ready to take your electrical blueprint analysis to the next level? Sign up for ESD today and start integrating with your favorite tools and platforms!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.integrations {
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
