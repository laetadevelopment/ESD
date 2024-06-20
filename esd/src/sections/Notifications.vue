<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="notifications">
    <div class="content-title">
      <h1>Notifications</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Staying informed about your ESD account and project activity is key to maintaining a smooth and efficient workflow. That's why we've built a robust Notifications system into your Dashboard, providing you with timely and relevant updates about your blueprint analysis process.</p>
      <p>The Notifications section of your Dashboard displays a chronological list of recent events and alerts related to your account and projects, such as:</p>
      <ol>
        <li>Project Activity
          <ul>
            <li>Notifications when a new blueprint is uploaded to one of your projects.</li>
            <li>Alerts when a blueprint processing job is completed, along with a summary of the results.</li>
            <li>Messages when a collaborator adds a comment, annotation, or file to one of your shared projects.</li>
          </ul>
        </li>
        <li>Collaboration Invitations
          <ul>
            <li>Notifications when you're invited to collaborate on another user's project.</li>
            <li>Reminders to accept or decline pending collaboration invitations.</li>
            <li>Confirmations when you successfully join a shared project.</li>
          </ul>
        </li>
        <li>Account Updates
          <ul>
            <li>Alerts when your subscription plan is about to renew or expire.</li>
            <li>Notifications when your billing information or payment method is updated.</li>
            <li>Messages when a new team member is added or removed from your account.</li>
          </ul>
        </li>
        <li>System Maintenance
          <ul>
            <li>Announcements about upcoming planned maintenance or updates to the ESD platform.</li>
            <li>Alerts about any unplanned outages or performance issues, along with estimated resolution times.</li>
            <li>Notifications when new features, enhancements, or bug fixes are released.</li>
          </ul>
        </li>
      </ol>
      <p>Each notification includes a brief description of the event, along with a timestamp and any relevant links or actions. For example, a project activity notification might include a link to view the newly uploaded blueprint, while a collaboration invitation might include buttons to accept or decline the invite.</p>
      <p>You can customize your notification preferences in your Account Settings, choosing which types of events you want to be notified about and how you want to receive the notifications (e.g., email, SMS, in app). You can also set quiet hours or snooze notifications for a specific time period when you don't want to be disturbed.</p>
      <p>In addition to the Notifications section in your Dashboard, you'll also receive email notifications for important events, ensuring that you never miss a critical update even when you're away from the ESD platform.</p>
      <p>At ESD, we understand that effective communication and coordination are essential to successful blueprint analysis projects. That's why we've designed our Notifications system to keep you informed and in control, without overwhelming you with irrelevant or unnecessary alerts.</p>
      <p>So go ahead and check your Notifications regularly – and rest assured that you'll always be in the loop on your ESD account and project activity!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.notifications {
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
