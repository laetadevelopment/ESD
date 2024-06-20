<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="data-protection">
    <div class="content-title">
      <h1>Data Protection</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we take the protection of your data very seriously. This section of our Privacy Policy outlines the measures we take to safeguard your personal information and other data from unauthorized access, use, or disclosure.</p>
      <ol>
        <li>Secure Data Transfer
          <ul>
            <li>We use Secure Socket Layer (SSL) technology to encrypt the transmission of your personal identification information, billing information, and other sensitive data between your device and our servers.</li>
            <li>SSL technology ensures that your data is protected from interception or tampering by third parties during transit.</li>
            <li>We also use SSL technology to encrypt your User Content when it is uploaded to or downloaded from the ESD platform, to protect it from unauthorized access or alteration.</li>
          </ul>
        </li>
        <li>Secure Data Storage
          <ul>
            <li>We store your personal identification information, billing information, and other sensitive data on secure servers protected by firewalls and other industry standard security measures.</li>
            <li>Access to these servers is restricted to authorized personnel only, who are required to maintain the confidentiality of your data.</li>
            <li>We use encryption to protect your data at rest, meaning that even if our servers were compromised, your data would be unreadable without the encryption key.</li>
          </ul>
        </li>
        <li>Access Controls
          <ul>
            <li>We implement strict access controls to limit who can view or modify your personal information and other data within the ESD organization.</li>
            <li>Access to your data is granted only to those employees, contractors, and agents who need it to perform their job functions, such as providing customer support or maintaining the ESD platform.</li>
            <li>We regularly review and update our access controls to ensure that they remain effective and appropriate.</li>
          </ul>
        </li>
        <li>Third Party Security
          <ul>
            <li>When we share your data with third party service providers, such as payment processors or analytics providers, we ensure that they have appropriate security measures in place to protect your data.</li>
            <li>We require our service providers to enter into confidentiality agreements that prohibit them from using your data for any purpose other than providing services to ESD.</li>
            <li>We regularly monitor and audit our service providers' security practices to ensure that they meet our standards and legal requirements.</li>
          </ul>
        </li>
        <li>Security Monitoring and Incident Response
          <ul>
            <li>We continuously monitor our systems and networks for signs of unauthorized access, use, or disclosure of your data.</li>
            <li>If we detect a security incident that may affect your data, we will promptly investigate the incident and take appropriate action to mitigate any harm.</li>
            <li>We will notify you of any security incident that results in the unauthorized access, use, or disclosure of your personal information, in accordance with applicable laws and regulations.</li>
          </ul>
        </li>
        <li>Employee Training and Awareness
          <ul>
            <li>We provide regular training and awareness programs to our employees on data protection best practices and their responsibilities under this Privacy Policy.</li>
            <li>We require all employees to acknowledge and agree to abide by this Privacy Policy and our internal data protection policies.</li>
            <li>We take disciplinary action against employees who violate this Privacy Policy or our data protection policies, up to and including termination of employment.</li>
          </ul>
        </li>
        <li>Compliance with Laws and Regulations
          <ul>
            <li>We comply with all applicable laws and regulations governing the protection of personal information, such as the General Data Protection Regulation (GDPR) in the European Union and the California Consumer Privacy Act (CCPA) in the United States.</li>
            <li>We monitor changes to these laws and regulations and update our data protection practices as needed to ensure ongoing compliance.</li>
            <li>We cooperate with data protection authorities and other regulators in the investigation and resolution of any complaints or disputes regarding our data protection practices.</li>
          </ul>
        </li>
      </ol>
      <p>By using the ESD platform, you can trust that we are committed to protecting your data to the best of our ability. However, no method of data transmission or storage is 100% secure, and we cannot guarantee the absolute security of your data. If you have any questions or concerns about our data protection practices, or if you suspect that your data has been compromised, please contact us immediately at <a href="mailto:security@esd.one">security@esd.one</a>. We will work with you to investigate and resolve any issues as quickly as possible.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.data-protection {
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
