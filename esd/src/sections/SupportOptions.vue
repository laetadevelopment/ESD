<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
 <div class="support-options">
   <div class="content-title">
     <h1>Support Options</h1>
   </div>
   <Notifications />
   <div class="content-body">
     <p>At ESD, we understand that reliable and responsive support is crucial to your success with our electrical blueprint analysis solution. That's why we offer a range of support options to meet the diverse needs of our users, from individual designers to large enterprises.</p>
     <ol>
       <li>Knowledge Base
         <ul>
           <li>Our extensive Knowledge Base is the first stop for many support inquiries. It includes detailed articles, tutorials, and FAQs covering all aspects of ESD, from getting started to advanced features and troubleshooting.</li>
           <li>The Knowledge Base is available 24/7 and is constantly updated with new content based on user feedback and product updates.</li>
         </ul>
       </li>
       <li>Email Support
         <ul>
           <li>For non urgent inquiries or issues, you can email our support team at <a href="mailto:support@esd.one">support@esd.one</a>. We typically respond within 24 hours (or the next business day for emails received over the weekend).</li>
           <li>When emailing support, please include your ESD account details, a clear description of your issue or question, and any relevant screenshots or files.</li>
         </ul>
       </li>
       <li>Live Chat Support
         <ul>
           <li>For more immediate assistance, we offer live chat support directly within the ESD application. Simply click on the chat icon in the bottom right corner to start a conversation with one of our support agents.</li>
           <li>Live chat support is available Monday through Friday, from 9am to 5pm EST.</li>
         </ul>
       </li>
       <li>Phone Support (Enterprise Only)
         <ul>
           <li>Enterprise customers have access to our dedicated phone support hotline for urgent or complex issues. Simply call +1 (555) 123 4567 to speak with one of our technical support experts.</li>
           <li>Phone support is available Monday through Friday, from 9am to 5pm EST.</li>
         </ul>
       </li>
       <li>Remote Assistance
         <ul>
           <li>In some cases, our support team may need to remotely access your ESD account to diagnose and resolve issues. This is done through a secure, permission based remote support tool.</li>
           <li>Remote assistance is typically used for more complex issues and is available upon request for all users.</li>
         </ul>
       </li>
       <li>Community Forum
         <ul>
           <li>In addition to our official support channels, we also have a vibrant Community Forum where ESD users can connect, share knowledge, and get help from their peers.</li>
           <li>The Community Forum is a great place to get tips, best practices, and creative solutions from other electrical design professionals.</li>
         </ul>
       </li>
     </ol>
     <p>At ESD, we're committed to providing fast, friendly, and effective support to help you overcome any challenges and get the most value from our solution. Our support team is staffed by knowledgeable ESD experts who are passionate about your success.</p>
     <p>We also offer premium support options for Enterprise customers, including dedicated account managers, priority response times, and customized training and onboarding.</p>
     <p>No matter what your support needs may be, we've got you covered. Don't hesitate to reach out – we're here to help you succeed with ESD!</p>
   </div>
   <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
 </div>
</template>

<style scoped>
.support-options {
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
