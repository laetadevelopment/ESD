<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
 <div class="sales-inquiries">
   <div class="content-title">
     <h1>Sales Inquiries</h1>
   </div>
   <Notifications />
   <div class="content-body">
     <p>Interested in bringing the power of ESD's electrical blueprint analysis to your organization? Our sales team is here to help you explore the benefits, features, and pricing options that best fit your needs.</p>
     <p>Whether you're a small design firm looking to streamline your workflow, a large enterprise seeking to standardize and scale your blueprint analysis, or anything in between, ESD has a solution that can help you achieve your goals.</p>
     <p>Here's what you can expect when you reach out to our sales team:</p>
     <ol>
       <li>Discovery Call
         <ul>
           <li>One of our friendly sales representatives will schedule a discovery call to learn more about your organization, your electrical design processes, and your specific needs and challenges.</li>
           <li>This call is an opportunity for us to understand your requirements and for you to ask any questions you may have about ESD.</li>
         </ul>
       </li>
       <li>Product Demo
         <ul>
           <li>Based on the discovery call, our sales representative will schedule a personalized product demo to showcase how ESD can address your specific needs and deliver value to your organization.</li>
           <li>The demo will cover key features, workflow examples, and integration opportunities, and will be tailored to your unique context.</li>
         </ul>
       </li>
       <li>Pricing and Packaging
         <ul>
           <li>Following the product demo, our sales representative will work with you to determine the best pricing and packaging option for your needs, whether that's an Individual, Team, or Enterprise plan.</li>
           <li>We offer flexible pricing, including monthly and annual subscriptions, as well as custom packages for larger organizations.</li>
         </ul>
       </li>
       <li>Onboarding and Support
         <ul>
           <li>Once you've decided to move forward with ESD, our sales team will connect you with our onboarding and support specialists to ensure a smooth transition and successful adoption of our solution.</li>
           <li>We offer a range of onboarding services, including data migration, custom training, and workflow consultations, to help you get up and running quickly and effectively.</li>
         </ul>
       </li>
     </ol>
     <p>Throughout the sales process, our team is committed to being responsive, informative, and transparent. We believe in building long term partnerships with our customers, and we strive to be a trusted advisor in your electrical blueprint analysis journey.</p>
     <p>To get started, simply email us at <a href="mailto:sales@esd.one">sales@esd.one</a> or visit our <a href="/pricing">Pricing page</a> to schedule a discovery call. We'll be in touch shortly to learn more about your needs and explore how ESD can help you transform your electrical design processes.</p>
     <p>Don't wait to take your blueprint analysis to the next level – contact our sales team today and discover the power of ESD!</p>
   </div>
   <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
 </div>
</template>

<style scoped>
.sales-inquiries {
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
