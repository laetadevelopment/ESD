<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="user-management">
    <div class="content-title">
      <h1>User Management</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Effective collaboration and teamwork are essential to the success of any electrical blueprint analysis project. That's why ESD provides a comprehensive and flexible User Management system, allowing you to easily add, remove, and manage the users and roles within your organization's account.</p>
      <p>The User Management section of the Settings dashboard gives you centralized control and visibility over your team's access and permissions to ESD's features and data, including:</p>
      <ol>
        <li>User Invitations
          <ul>
            <li>Invite new users to join your organization's ESD account</li>
            <li>Enter their email address and assign them a role, such as Admin, Editor, or Viewer</li>
            <li>Customize the invitation message and set an expiration date for the invite</li>
            <li>Track the status of pending invitations and send reminders or revoke access as needed</li>
          </ul>
        </li>
        <li>User Roles and Permissions
          <ul>
            <li>Define and manage the different user roles and their associated permissions within your account</li>
            <li>Specify which features, projects, and data each role can access and modify</li>
            <li>Ensure that users have the appropriate level of access based on their job function and responsibilities</li>
            <li>Regularly review and update user roles and permissions to maintain security and compliance</li>
          </ul>
        </li>
        <li>User Profiles and Details
          <ul>
            <li>View and edit the profile information for each user, such as their name, email, and profile picture</li>
            <li>Assign and update their role and permissions</li>
            <li>Monitor their last login date and activity within ESD</li>
            <li>Deactivate or delete users who no longer need access to your account</li>
          </ul>
        </li>
        <li>Group and Team Management
          <ul>
            <li>Organize users into groups or teams based on their department, location, or project</li>
            <li>Assign group level permissions and access controls</li>
            <li>Streamline communication and collaboration within and across teams</li>
            <li>Manage group membership and ownership as your organization evolves</li>
          </ul>
        </li>
        <li>Audit and Activity Logs
          <ul>
            <li>Track and monitor user activity and changes within your ESD account</li>
            <li>View detailed logs of user logins, actions, and modifications</li>
            <li>Identify any suspicious or unauthorized activity and take appropriate action</li>
            <li>Generate reports and analytics on user behavior and usage patterns</li>
          </ul>
        </li>
      </ol>
      <p>The User Management system is designed to be intuitive, flexible, and secure, allowing you to easily manage your team's access and collaboration while maintaining full control and visibility over your organization's data and intellectual property.</p>
      <p>At ESD, we understand that every organization has unique needs and structures when it comes to user management and access control. That's why we provide a range of options and configurations to match your specific requirements and policies, from simple user invitations to complex role based access control and auditing.</p>
      <p>We also prioritize the security and privacy of your user data, with industry standard encryption, authentication, and access controls to protect against unauthorized access or breaches. Our User Management system is designed to help you comply with relevant regulations and standards, such as GDPR, HIPAA, and ISO 27001, and provides you with the tools and documentation to demonstrate your compliance.</p>
      <p>Moreover, we believe that effective user management is not just about control, but also about enablement and empowerment. By providing your team with the appropriate level of access and collaboration tools, you can foster innovation, creativity, and productivity, and unlock the full potential of ESD's features and capabilities.</p>
      <p>Ultimately, our goal is to help you build a seamless and secure collaboration environment within ESD, where your team can work together effectively and efficiently towards your common goals and objectives.</p>
      <p>So whether you are a small team just starting with ESD, or a large enterprise with complex user management requirements, the User Management section provides you with the tools and insights you need to ensure the success and security of your electrical blueprint analysis projects. With ESD, you can not only streamline your technical workflows, but also optimize your human workflows and interactions.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.user-management {
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
