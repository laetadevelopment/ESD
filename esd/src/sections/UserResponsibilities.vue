<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="user-responsibilities">
    <div class="content-title">
      <h1>User Responsibilities</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>As a user of the ESD platform, you have certain responsibilities to ensure the smooth and secure operation of our services for all parties involved. This section outlines your key responsibilities when using the ESD platform:</p>
      <ol>
        <li>Account Security
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account.</li>
            <li>You agree to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account and to maintain your password securely to prevent others from gaining access without your permission.</li>
            <li>You agree to immediately notify ESD of any unauthorized use, or suspected unauthorized use, of your account or any other breach of security. ESD cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.</li>
          </ul>
        </li>
        <li>Accurate Information
          <ul>
            <li>You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</li>
            <li>ESD reserves the right to suspend or terminate your account and refuse any and all current or future use of the ESD platform (or any portion thereof) if you provide information that is untrue, inaccurate, not current, or incomplete.</li>
          </ul>
        </li>
        <li>Lawful and Appropriate Use
          <ul>
            <li>You agree to use the ESD platform only for lawful purposes and in accordance with these Terms of Service.</li>
            <li>You agree not to use the ESD platform:
              <ul>
                <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                <li>To exploit, harm, or attempt to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate ESD, an ESD employee, another user, or any other person or entity.</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the ESD platform, or which, as determined by ESD, may harm ESD or users of the ESD platform or expose them to liability.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>User Content Responsibility
          <ul>
            <li>You are solely responsible for your User Content and the consequences of posting, publishing, sharing, or otherwise making it available on the ESD platform.</li>
            <li>You affirm, represent, and warrant that you own or have the necessary licenses, rights, consents, and permissions to publish User Content you submit.</li>
            <li>You further agree that User Content you submit to the ESD platform will not contain third party copyrighted material, or material that is subject to other third party proprietary rights, unless you have permission from the rightful owner of the material or you are otherwise legally entitled to post the material.</li>
          </ul>
        </li>
        <li>Reporting Violations
          <ul>
            <li>If you become aware of any violation of these Terms of Service by other users, you agree to immediately report it to ESD at <a href="mailto:support@esd.one">support@esd.one</a>.</li>
            <li>ESD has the right to investigate and prosecute violations of any of the above to the fullest extent of the law. ESD may involve and cooperate with law enforcement authorities in prosecuting users who violate these Terms of Service.</li>
          </ul>
        </li>
      </ol>
      <p>As a user of the ESD platform, you understand that your User Content and any other data you provide may be used by ESD in accordance with our Privacy Policy. You also understand that your User Content may be transmitted over various networks and changed to conform and adapt to technical requirements.</p>
      <p>By accepting these Terms of Service and using the ESD platform, you agree to abide by these user responsibilities. Failure to comply with these responsibilities may result in the suspension or termination of your account, as well as potential legal consequences.</p>
      <p>We believe that by working together and respecting these guidelines, we can create a safe, productive, and valuable platform for all users involved in electrical blueprint analysis. If you have any questions or concerns about your responsibilities as a user, please contact us at <a href="mailto:support@esd.one">support@esd.one</a>. We are here to help you navigate these important issues and ensure a positive experience on the ESD platform.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.user-responsibilities {
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
