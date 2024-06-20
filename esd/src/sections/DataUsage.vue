<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="data-usage">
    <div class="content-title">
      <h1>Data Usage</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>This section of our Privacy Policy outlines how we use the data we collect from you when you use the ESD platform. We strive to use your data in a manner that is consistent with your expectations and the purposes for which it was collected.</p>
      <ol>
        <li>Providing and Improving the ESD Platform
          <ul>
            <li>We use your personal identification information to create and manage your account, communicate with you about your use of the platform, and provide customer support.</li>
            <li>We use your billing information to process payments for subscriptions and other paid services within the ESD platform.</li>
            <li>We use your User Content to provide the core functionality of the ESD platform, including electrical blueprint analysis, collaboration, and sharing.</li>
            <li>We use usage data and device information to analyze trends, administer the platform, track users' movements around the platform, and gather demographic information about our user base as a whole, in order to improve the functionality and user experience of the ESD platform.</li>
          </ul>
        </li>
        <li>Personalization and Advertising
          <ul>
            <li>We use cookies and similar tracking technologies to remember your preferences, personalize content and advertising, and show you relevant ads on other websites.</li>
            <li>We may use your personal identification information and usage data to send you promotional communications about new features, products, or services that we think may be of interest to you. You can opt out of receiving these communications at any time.</li>
            <li>We may use aggregated demographic information and usage data to help our business partners, trusted affiliates, and advertisers to serve more relevant ads to you on other websites. This information will not identify you personally.</li>
          </ul>
        </li>
        <li>Legal Compliance and Protection
          <ul>
            <li>We may use your personal information and other data to comply with legal obligations, such as responding to subpoenas, court orders, or other legal process.</li>
            <li>We may use your personal information and other data to protect the rights, property, or safety of ESD, our users, or others, such as investigating fraud or violations of our Terms of Service.</li>
            <li>We may use your personal information and other data to enforce our policies and terms of service, including terminating accounts that engage in fraudulent or illegal activities.</li>
          </ul>
        </li>
        <li>Business Transfers
          <ul>
            <li>If ESD is involved in a merger, acquisition, or sale of all or a portion of its assets, your personal information and other data may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our platform of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information.</li>
          </ul>
        </li>
        <li>Aggregated Data
          <ul>
            <li>We may use aggregated data derived from your personal information and other data for various business purposes, such as analyzing usage trends, measuring the effectiveness of our promotional campaigns, and improving the ESD platform.</li>
            <li>This aggregated data will not identify you personally and may be shared with third parties for their own business purposes.</li>
          </ul>
        </li>
        <li>Retention and Deletion  
          <ul>
            <li>We will retain your personal information and other data for as long as your account is active or as needed to provide you services, comply with our legal obligations, resolve disputes, and enforce our agreements.</li>
            <li>If you delete your account or request that we delete your personal information, we will delete your personal identification information and billing information from our active databases. However, some information may be retained in our backup files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Service, or comply with legal requirements.</li>
          </ul>
        </li>
      </ol>
      <p>By using the ESD platform, you consent to the use of your data as described in this Privacy Policy. If you have any questions or concerns about how we use your data, please contact us at <a href="mailto:privacy@esd.one">privacy@esd.one</a>. We are committed to using your data in a responsible and transparent manner, and to providing you with meaningful choices about how your data is used.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.data-usage {
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
