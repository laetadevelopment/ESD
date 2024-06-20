<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="intellectual-property">
    <div class="content-title">
      <h1>Intellectual Property</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we take intellectual property rights very seriously. Our platform is designed to help you streamline and automate your electrical blueprint analysis workflows while respecting and protecting the intellectual property rights of all parties involved.</p>
      <p>This section of our Terms of Service outlines our policies and procedures related to intellectual property, including:</p>
      <ol>
        <li>Ownership of ESD Intellectual Property
          <ul>
            <li>All content, features, and functionality on the ESD platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of ESD, its licensors, or other content suppliers, and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</li>
            <li>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our platform, except as expressly permitted by these Terms or with our prior written consent.</li>
          </ul>
        </li>
        <li>User Content Ownership and License
          <ul>
            <li>You retain ownership of any intellectual property rights that you hold in the User Content you upload, submit, store, send, or receive through the ESD platform.</li>
            <li>By uploading, submitting, storing, sending, or receiving User Content through the ESD platform, you grant ESD a worldwide, non exclusive, royalty free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the ESD platform and ESD's business, including without limitation for promoting and redistributing part or all of the ESD platform (and derivative works thereof) in any media formats and through any media channels.</li>
          </ul>
        </li>
        <li>Third Party Intellectual Property
          <ul>
            <li>The ESD platform may contain content, features, or functionality that are owned by or licensed to third parties, and are protected by copyright, trademark, patent, trade secret, or other proprietary rights and laws.</li>
            <li>You may not use, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any third party content on the ESD platform, except as expressly permitted by the respective third party licensor or with their prior written consent.</li>
            <li>If you believe that any content on the ESD platform infringes your intellectual property rights, please contact us at <a href="mailto:legal@esd.one">legal@esd.one</a> with a detailed description of the alleged infringement and we will promptly investigate and take appropriate action.</li>
          </ul>
        </li>
        <li>Digital Millennium Copyright Act (DMCA) Compliance
          <ul>
            <li>ESD respects the intellectual property rights of others and expects its users to do the same. In accordance with the DMCA, ESD will respond expeditiously to claims of copyright infringement committed using the ESD platform that are reported to ESD's designated copyright agent.</li>
            <li>If you are a copyright owner, or authorized on behalf of one, and you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <a href="mailto:copyright@esd.one">copyright@esd.one</a>, with the subject line: "DMCA Takedown Request". You must include in your claim a detailed description of the alleged infringement.</li>
            <li>In cases where a user of the ESD platform has repeatedly infringed or is repeatedly charged with infringing the copyrights or other intellectual property rights of others, ESD may, at its discretion, terminate the offending user's access to the ESD platform.</li>
          </ul>
        </li>
        <li>Intellectual Property Dispute Resolution
          <ul>
            <li>If you have a dispute with one or more users of the ESD platform related to intellectual property rights, you release ESD (and its officers, directors, agents, subsidiaries, joint ventures, and employees) from claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes.</li>
            <li>If you are a California resident, you waive California Civil Code §1542, which says: "A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party."</li>
          </ul>
        </li>
      </ol>
      <p>At ESD, we are committed to fostering a platform that respects and protects the intellectual property rights of all parties involved. We believe that by working together and following these guidelines, we can create a vibrant and innovative ecosystem for electrical blueprint analysis while minimizing the risk of intellectual property infringement.</p>
      <p>If you have any questions or concerns about our intellectual property policies or procedures, please don't hesitate to contact us at <a href="mailto:legal@esd.one">legal@esd.one</a>. We are always happy to discuss these important issues and work towards mutually beneficial solutions.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.intellectual-property {
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
