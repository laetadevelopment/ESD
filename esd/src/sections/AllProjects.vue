<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="all-projects">
    <div class="content-title">
      <h1>All Projects</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>As your electrical blueprint analysis workflow grows and evolves, you'll likely find yourself working on multiple projects simultaneously, each with its own set of blueprints, collaborators, and requirements. The All Projects section of your ESD Dashboard provides a centralized view of all your projects, making it easy to navigate, manage, and track your work.</p>
      <p>In the All Projects section, you'll see a table listing all the projects you've created or been invited to collaborate on. For each project, you can view the following details:</p>
      <ol>
        <li>Project Name
          <ul>
            <li>A unique name that identifies the project, typically related to the building, client, or job number.</li>
            <li>Click on the project name to open the project details page, where you can view and manage the associated blueprints and collaborators.</li>
          </ul>
        </li>
        <li>Project Owner
          <ul>
            <li>The name and email address of the user who created the project and has administrative privileges.</li>
            <li>If you're the project owner, you'll see a "Managed by me" label next to your name.</li>
          </ul>
        </li>
        <li>Last Modified
          <ul>
            <li>The date and time when the project was last updated, whether by uploading a new blueprint, adding a comment, or making a change to the project settings.</li>
            <li>Use this information to quickly identify which projects have had recent activity and may require your attention.</li>
          </ul>
        </li>
        <li>Collaborators
          <ul>
            <li>The number of users who have been invited to collaborate on the project, including yourself.</li>
            <li>Click on the collaborator count to view a list of all collaborators and their roles (e.g., Viewer, Editor, Admin).</li>
          </ul>
        </li>
        <li>Blueprints
          <ul>
            <li>The total number of blueprints that have been uploaded to the project.</li>
            <li>Click on the blueprint count to view a list of all blueprints, along with their processing status and results.</li>
          </ul>
        </li>
        <li>Actions
          <ul>
            <li>A set of buttons or dropdown menus that allow you to quickly perform common actions on the project, such as:
              <ul>
                <li>Opening the project details page</li>
                <li>Sharing the project with new collaborators</li>
                <li>Archiving or deleting the project</li>
                <li>Exporting the project data and results</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
      <p>The All Projects table is fully searchable and sortable, allowing you to quickly find and filter your projects based on keywords, dates, collaborators, or other criteria. You can also use the table pagination controls to navigate through large numbers of projects.</p>
      <p>In addition to the table view, the All Projects section also includes a set of quick stats and graphs that summarize your overall project activity, such as:</p>
      <ul>
        <li>Total number of projects created and collaborated on</li>
        <li>Average number of blueprints per project</li>
        <li>Distribution of projects by processing status (e.g., In Progress, Completed, Error)</li>
        <li>Trend of new projects created over time</li>
      </ul>
      <p>These visual insights can help you track your overall blueprint analysis workload and identify trends or patterns in your project activity.</p>
      <p>At ESD, we understand that effective project management is key to successful blueprint analysis outcomes. That's why we've designed the All Projects section to give you a comprehensive and intuitive view of your work, enabling you to stay organized, informed, and in control.</p>
      <p>So go ahead and explore your All Projects section today – and feel confident that you have the tools and visibility you need to manage your electrical blueprint analysis projects with ease!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.all-projects {
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
