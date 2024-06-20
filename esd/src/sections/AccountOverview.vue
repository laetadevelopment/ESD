<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="account-overview">
    <div class="content-title">
      <h1>Account Overview</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Your ESD Dashboard is not just a place to manage your blueprint analysis projects – it's also your central hub for managing your account settings, billing information, and user profile. The Account Overview section provides a convenient and secure way to view and update your key account details.</p>
      <p>In the Account Overview section, you'll find the following information and settings:</p>
      <ol>
        <li>Profile Information
          <ul>
            <li>View and edit your name, email address, and profile picture.</li>
            <li>Update your password and security settings, such as two factor authentication.</li>
            <li>Set your communication preferences for email notifications and marketing messages.</li>
          </ul>
        </li>
        <li>Subscription Details
          <ul>
            <li>View your current ESD subscription plan, including the features and usage limits included.</li>
            <li>Check your subscription renewal date and billing frequency (e.g., monthly, annual).</li>
            <li>Upgrade or downgrade your subscription plan based on your changing needs and budget.</li>
          </ul>
        </li>
        <li>Billing Information
          <ul>
            <li>View and update your billing contact information, such as your company name and address.</li>
            <li>Manage your payment methods, including adding or removing credit cards or adjusting your invoice settings.</li>
            <li>Review your billing history, including past invoices and payment receipts.</li>
          </ul>
        </li>
        <li>Team Management (Team and Enterprise Plans Only)
          <ul>
            <li>View and manage your team members, including their names, email addresses, and roles.</li>
            <li>Invite new team members to join your ESD account, and set their permissions and access levels.</li>
            <li>Remove team members who no longer need access to your account.</li>
          </ul>
        </li>
        <li>Integrations and API
          <ul>
            <li>View and manage your active integrations with other software tools, such as CAD or project management systems.</li>
            <li>Generate and manage API keys for custom integrations and automated workflows.</li>
            <li>Access documentation and support resources for ESD's API and integration capabilities.</li>
          </ul>
        </li>
        <li>Account Security
          <ul>
            <li>Review your account's security settings and activity logs, including recent logins and device sessions.</li>
            <li>Enable or disable security features, such as two factor authentication or IP address restrictions.</li>
            <li>Manage your backup and recovery settings, including data export and deletion options.</li>
          </ul>
        </li>
      </ol>
      <p>The Account Overview section is designed to give you full control and transparency over your ESD account, while ensuring the highest levels of security and privacy for your data. All sensitive information, such as credit card numbers and passwords, is encrypted and stored securely in compliance with industry standards.</p>
      <p>If you ever have any questions or issues with your account, our friendly Customer Support team is always here to help. Simply click on the "Support" button in the top right corner of your Dashboard to access our knowledge base, live chat, or ticket submission form.</p>
      <p>At ESD, we're committed to providing you with a seamless, secure, and transparent account management experience, so you can focus on what matters most – transforming your electrical blueprint analysis process.</p>
      <p>So go ahead and explore your Account Overview today – and feel confident that your ESD account is in good hands!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.account-overview {
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
