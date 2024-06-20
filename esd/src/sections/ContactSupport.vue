<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="contact-support">
    <div class="content-title">
      <h1>Contact Support</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we pride ourselves on providing exceptional customer support to ensure that you have the best possible experience with our electrical blueprint analysis solution. Our dedicated support team is here to assist you with any questions, issues, or concerns you may have, and to help you get the most value from ESD.</p>
      <p>There are several ways to contact ESD support:</p>
      <ol>
        <li>Email Support
        <ul>
          <li>For general inquiries or non urgent issues, you can email our support team at support@esd.one.</li>
          <li>We typically respond to email inquiries within 24 hours (or the next business day for emails received over the weekend).</li>
        </ul></li>
        <li>Live Chat Support
        <ul>
          <li>For more immediate assistance, you can use our live chat support feature, available within the ESD application.</li>
          <li>Simply click on the chat icon in the bottom right corner of the screen to start a conversation with one of our support representatives.</li>
          <li>Live chat support is available Monday through Friday, from 9am to 5pm EST.</li>
        </ul></li>
        <li>Phone Support (for Enterprise customers)
        <ul>
          <li>If you are an Enterprise customer, you have access to our dedicated phone support line.</li>
          <li>Simply call +1 (555) 123 4567 to speak directly with one of our support representatives.</li>
          <li>Phone support is available Monday through Friday, from 9am to 5pm EST.</li>
        </ul></li>
        <li>Support Portal
        <ul>
          <li>You can also access our online Support Portal at support.esd.one.</li>
          <li>Here, you can browse our extensive Knowledge Base, submit and track support tickets, and access other self service resources.</li>
          <li>The Support Portal is available 24/7 and is a great option for finding answers to common questions or issues.</li>
        </ul></li>
      </ol>
      <p>When contacting ESD support, please be prepared to provide the following information:</p>
      <ul>
        <li>Your name and ESD account email address</li>
        <li>A detailed description of your question or issue</li>
        <li>Any relevant screenshots, error messages, or log files</li>
        <li>Your ESD plan type (Individual, Team, or Enterprise)</li>
      </ul>
      <p>Our support team is committed to providing timely, accurate, and friendly assistance to help you resolve any issues and get back to your electrical blueprint analysis work as quickly as possible.</p>
      <p>In addition to our reactive support services, we also offer proactive support resources, including:</p>
      <ul>
        <li>Regular email newsletters with tips, updates, and best practices for using ESD</li>
        <li>Webinars and training sessions on ESD features and electrical blueprint analysis topics</li>
        <li>A vibrant Community Forum where you can connect with other ESD users and experts</li>
      </ul>
      <p>At ESD, we're not just providing a software solution — we're partnering with you to ensure your success with electrical blueprint analysis. Our support team is an integral part of that partnership, and we're always here to help you overcome challenges, optimize your processes, and achieve your goals.</p>
      <p>So don't hesitate to reach out to ESD support whenever you need assistance — we're here for you every step of the way!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.contact-support {
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
