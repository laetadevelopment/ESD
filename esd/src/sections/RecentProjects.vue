<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
 <div class="recent-projects">
   <div class="content-title">
     <h1>Recent Projects</h1>
   </div>
   <Notifications />
   <div class="content-body">
     <p>Welcome to your ESD Dashboard, the central hub for managing your electrical blueprint analysis projects and getting insights into your usage and performance. One of the key sections of your Dashboard is Recent Projects, which provides a quick and convenient way to access your most recently viewed or edited projects.</p>
     <p>The Recent Projects section displays a list of your projects, sorted by the date they were last accessed. For each project, you'll see the following information:</p>
     <ul>
       <li>Project name and ID</li>
       <li>Date last modified</li>
       <li>Number of blueprints in the project</li>
       <li>Processing status (e.g., "In Progress", "Completed", "Error")</li>
       <li>Quick action buttons (e.g., "Open", "Share", "Delete")</li>
     </ul>
     <p>From the Recent Projects section, you can easily:</p>
     <ol>
       <li>Open a project
         <ul>
           <li>Simply click on the project name or the "Open" button to view the project details, including the uploaded blueprints, detected symbols, and collaboration activity.</li>
           <li>From the project details page, you can also edit the project settings, add or remove blueprints, and export the results.</li>
         </ul>
       </li>
       <li>Share a project
         <ul>
           <li>Click on the "Share" button to invite team members or external collaborators to view or contribute to the project.</li>
           <li>You can set granular permissions for each collaborator, such as "View Only", "Edit", or "Admin".</li>
           <li>Collaborators will receive an email notification with a link to access the shared project.</li>
         </ul>
       </li>
       <li>Delete a project
         <ul>
           <li>If you no longer need a project, you can click on the "Delete" button to permanently remove it from your account.</li>
           <li>Please note that deleting a project is irreversible and will also delete all associated blueprints and data.</li>
         </ul>
       </li>
     </ol>
     <p>The Recent Projects section is designed to help you quickly resume your work and keep track of your ongoing projects. It's particularly useful when you're working on multiple projects simultaneously or collaborating with different teams.</p>
     <p>In addition to the Recent Projects section, your Dashboard also provides quick access to other key features and insights, such as:</p>
     <ul>
       <li>Usage Statistics: Track your blueprint processing volume, symbol detection accuracy, and other key metrics over time.</li>
       <li>Account Overview: Manage your ESD subscription, billing information, and user settings.</li>
       <li>Notifications: Stay informed about important account and project activities, such as collaborator invitations, processing completions, and billing updates.</li>
     </ul>
     <p>We're constantly working to enhance your Dashboard experience and provide you with the tools and insights you need to work more efficiently and effectively with ESD. If you have any suggestions or feedback, please don't hesitate to share them with our team.</p>
     <p>Now, let's dive into your projects and start transforming your electrical blueprint analysis process!</p>
     <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
   </div>
 </div>
</template>

<style scoped>
.recent-projects {
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
