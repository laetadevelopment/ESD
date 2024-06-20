<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="account-settings">
    <div class="content-title">
      <h1>Account Settings</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>To ensure that your ESD experience is tailored to your specific needs and preferences, we provide a comprehensive and customizable set of Account Settings within the platform. These settings allow you to manage your profile information, security and privacy controls, notification preferences, and other key aspects of your ESD account.</p>
      <p>The Account Settings section of the Settings dashboard includes the following options and features:</p>
      <ol>
        <li>Profile Information
          <ul>
            <li>Update your name, email, and profile picture</li>
            <li>Provide additional contact details, such as phone number and company name</li>
            <li>Set your language and time zone preferences</li>
          </ul>
        </li>
        <li>Security and Privacy
          <ul>
            <li>Change your account password and enable two factor authentication</li>
            <li>Control your session timeout and automatic logout settings</li>
            <li>Manage your data sharing and visibility preferences for collaboration</li>
            <li>Review and manage your connected third party apps and integrations</li>
          </ul>
        </li>
        <li>Notification Preferences
          <ul>
            <li>Customize your email and in app notification settings for different events and activities</li>
            <li>Set your preferred frequency and format for receiving updates and alerts</li>
            <li>Opt in or out of specific notification types, such as project invitations or system announcements</li>
          </ul>
        </li>
        <li>Subscription and Billing
          <ul>
            <li>View your current ESD subscription plan and usage details</li>
            <li>Manage your billing information and payment methods</li>
            <li>Upgrade or downgrade your subscription plan based on your needs</li>
            <li>Access your invoice and payment history</li>
          </ul>
        </li>
        <li>Team and User Management
          <ul>
            <li>Invite and manage team members and collaborators within your organization</li>
            <li>Control user roles, permissions, and access levels for different projects and features</li>
            <li>Monitor and audit user activity and logs for security and compliance purposes</li>
            <li>Manage your organization's branding and customization options</li>
          </ul>
        </li>
        <li>Integrations and API
          <ul>
            <li>Connect and configure third party apps and services that integrate with ESD</li>
            <li>Manage your API keys and access tokens for custom integrations and automations</li>
            <li>Access developer documentation and support resources for building on top of ESD</li>
          </ul>
        </li>
        <li>Data and Storage
          <ul>
            <li>View and manage your data storage and usage quota</li>
            <li>Control your data retention and archiving policies</li>
            <li>Request data exports or deletions in accordance with privacy regulations</li>
            <li>Configure your backup and disaster recovery settings</li>
          </ul>
        </li>
      </ol>
      <p>The Account Settings are designed to be intuitive, granular, and secure, giving you full control and visibility over your ESD account and data.</p>
      <p>At ESD, we believe that trust and transparency are essential to building long term relationships with our users. We understand that you are entrusting us with your valuable data, intellectual property, and business processes, and we take that responsibility very seriously.</p>
      <p>That's why we have implemented industry standard security and privacy controls, such as encryption, access controls, and auditing, to safeguard your data and ensure compliance with relevant regulations and standards. We also provide you with clear and concise information about our data collection, usage, and sharing practices, and give you the tools and options to control your preferences and consents.</p>
      <p>Moreover, we strive to provide you with the flexibility and customization options to tailor ESD to your specific needs and workflows. Whether you are an individual user or part of a large organization, the Account Settings allow you to configure ESD to match your unique requirements and preferences, and to seamlessly integrate with your existing tools and processes.</p>
      <p>Ultimately, our goal is to empower you to make informed and confident decisions about your ESD account and data, and to provide you with the transparency, control, and peace of mind you need to focus on your core business objectives.</p>
      <p>So whether you are setting up your ESD account for the first time, or looking to optimize your existing settings and preferences, the Account Settings section provides you with the tools and insights you need to make the most of our platform. With ESD, you can not only streamline your electrical blueprint analysis processes, but also ensure the security, privacy, and compliance of your critical data and assets.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.account-settings {
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
