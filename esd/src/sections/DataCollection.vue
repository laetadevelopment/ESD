<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="data-collection">
    <div class="content-title">
      <h1>Data Collection</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we are committed to protecting the privacy and security of your personal information. This section of our Privacy Policy outlines how we collect, use, and safeguard the data you provide when using our platform.</p>
      <ol>
        <li>Types of Data Collected
          <ul>
            <li>Personal Identification Information: When you register for an account on the ESD platform, we may collect personal identification information such as your name, email address, mailing address, phone number, and company name.</li>
            <li>Billing Information: If you subscribe to a paid plan on the ESD platform, we will collect billing information such as your credit card number, expiration date, and billing address.</li>
            <li>User Content: When you upload, submit, store, send, or receive content through the ESD platform, we may collect and store that content, including electrical blueprints, annotations, comments, and other data.</li>
            <li>Usage Data: We may collect information about how you access and use the ESD platform, including your IP address, browser type, operating system, referring URLs, device information, and actions taken within the platform.</li>
            <li>Cookies and Similar Technologies: We use cookies and similar tracking technologies to collect and store information about your preferences, usage patterns, and device information. You can control the use of cookies at the individual browser level.</li>
          </ul>
        </li>
        <li>How Data is Collected
          <ul>
            <li>We collect personal identification information and billing information directly from you when you provide it to us during account registration or subscription processes.</li>
            <li>We collect User Content when you upload, submit, store, send, or receive it through the ESD platform.</li>
            <li>We automatically collect usage data and device information as you navigate through and interact with the ESD platform.</li>
            <li>We use cookies and similar tracking technologies to enhance your user experience, analyze trends, administer the platform, track users' movements around the platform, and gather demographic information about our user base as a whole.</li>
          </ul>
        </li>
        <li>Purpose of Data Collection
          <ul>
            <li>We collect personal identification information and billing information to create and manage your account, process payments, and communicate with you about your use of the ESD platform.</li>
            <li>We collect User Content to provide the core functionality of the ESD platform, including electrical blueprint analysis, collaboration, and sharing.</li>
            <li>We collect usage data and device information to analyze trends, administer the platform, track users' movements around the platform, and gather demographic information about our user base as a whole.</li>
            <li>We use cookies and similar tracking technologies to enhance your user experience, remember your preferences, and personalize content and advertising.</li>
          </ul>
        </li>
        <li>Data Protection
          <ul>
            <li>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</li>
            <li>We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.</li>
            <li>We restrict access to personal information to ESD employees, contractors, and agents who need to know that information in order to process it for us, and who are subject to strict contractual confidentiality obligations.</li>
          </ul>
        </li>
        <li>Third Party Data Sharing
          <ul>
            <li>We do not sell, trade, or otherwise transfer your personal identification information to outside parties, except as described in this Privacy Policy.</li>
            <li>We may share aggregated demographic information and usage data with our business partners, trusted affiliates, and advertisers for the purposes outlined above.</li>
            <li>We may share User Content with third party service providers who assist us in operating the ESD platform, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</li>
            <li>We may release your information when we believe release is appropriate to comply with the law, enforce our platform policies, or protect our or others' rights, property, or safety.</li>
          </ul>
        </li>
      </ol>
      <p>By using the ESD platform, you consent to the collection and use of your data as described in this Privacy Policy. If you have any questions or concerns about our data collection practices, please contact us at <a href="mailto:privacy@esd.one">privacy@esd.one</a>. We are committed to being transparent about our data practices and working with you to ensure the privacy and security of your personal information.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.data-collection {
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
