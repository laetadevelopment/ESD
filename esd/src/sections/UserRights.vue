<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="user-rights">
    <div class="content-title">
      <h1>User Rights</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we believe that you should have control over your personal information and how it is used. This section of our Privacy Policy outlines your rights as a user of the ESD platform with respect to your data.</p>
      <ol>
        <li>Right to Access
          <ul>
            <li>You have the right to request access to the personal information that we hold about you.</li>
            <li>Upon request, we will provide you with a copy of your personal information in a structured, commonly used, and machine readable format.</li>
            <li>We may require you to verify your identity before providing access to your personal information, to protect against fraudulent requests.</li>
          </ul>
        </li>
        <li>Right to Rectification
          <ul>
            <li>You have the right to request that we correct any inaccurate or incomplete personal information that we hold about you.</li>
            <li>Upon request, we will take reasonable steps to update or correct your personal information in our records.</li>
            <li>If we have shared your personal information with third parties, we will also notify them of any corrections where possible.</li>
          </ul>
        </li>
        <li>Right to Erasure
          <ul>
            <li>You have the right to request that we delete your personal information from our records, subject to certain exceptions.</li>
            <li>Upon request, we will delete your personal information unless we are required to retain it for legal or legitimate business purposes, such as to comply with a legal obligation or to defend against legal claims.</li>
            <li>If we are unable to delete your personal information, we will inform you of the reasons why and the applicable exceptions.</li>
          </ul>
        </li>
        <li>Right to Restrict Processing
          <ul>
            <li>You have the right to request that we restrict the processing of your personal information in certain circumstances, such as when you contest the accuracy of the information or when you object to the processing.</li>
            <li>Upon request, we will restrict the processing of your personal information unless we have a compelling legitimate interest or legal obligation to continue processing it.</li>
            <li>If we have shared your personal information with third parties, we will also notify them of any restrictions where possible.</li>
          </ul>
        </li>
        <li>Right to Data Portability
          <ul>
            <li>You have the right to receive a copy of your personal information in a structured, commonly used, and machine readable format, and to transmit that information to another controller without hindrance from us.</li>
            <li>This right applies only to personal information that you have provided to us directly, and that we process based on your consent or a contract with you.</li>
            <li>We will provide your personal information in a format that allows you to easily transfer it to another controller, such as CSV or JSON.</li>
          </ul>
        </li>
        <li>Right to Object
          <ul>
            <li>You have the right to object to the processing of your personal information for certain purposes, such as direct marketing or profiling.</li>
            <li>Upon request, we will stop processing your personal information for these purposes unless we have a compelling legitimate interest or legal obligation to continue processing it.</li>
            <li>You also have the right to object to the processing of your personal information for scientific or historical research purposes, unless the processing is necessary for the performance of a task carried out in the public interest.</li>
          </ul>
        </li>
        <li>Right to Withdraw Consent
          <ul>
            <li>If we process your personal information based on your consent, you have the right to withdraw that consent at any time.</li>
            <li>Upon request, we will stop processing your personal information based on your consent, unless we have another legal basis for processing it.</li>
            <li>Withdrawing your consent will not affect the lawfulness of any processing that occurred before you withdrew your consent.</li>
          </ul>
        </li>
      </ol>
      <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@esd.one">privacy@esd.one</a>. We will respond to your request within a reasonable timeframe and in accordance with applicable laws and regulations. We may require you to verify your identity before fulfilling your request, to protect against fraudulent requests.</p>
      <p>If you have any concerns about how we are processing your personal information, or if you believe that we are not complying with this Privacy Policy or applicable data protection laws, you have the right to lodge a complaint with a supervisory authority. We will cooperate fully with any investigation or inquiry by a supervisory authority regarding our data protection practices.</p>
      <p>By using the ESD platform, you acknowledge and agree to the user rights outlined in this Privacy Policy. If you have any questions or concerns about your rights as a user, please contact us at <a href="mailto:privacy@esd.one">privacy@esd.one</a>. We are committed to respecting your rights and working with you to ensure that your personal information is protected and used appropriately.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.user-rights {
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
