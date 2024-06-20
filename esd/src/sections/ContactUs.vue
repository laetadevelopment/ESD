<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="contact-us">
    <div class="content-title">
      <h1>Contact Us</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we believe in building strong, lasting relationships with our customers, partners, and stakeholders. That's why we've made it easy for you to get in touch with us, no matter what your inquiry or need may be.</p>
      <p>Whether you're a potential customer looking to learn more about our electrical blueprint analysis solution, an existing user seeking technical support, or a partner interested in collaboration opportunities, our friendly and knowledgeable team is here to help.</p>
      <p>You can reach out to us through any of the following channels:</p>
      <ol>
        <li>General Inquiries
          <ul>
            <li>For general questions, comments, or feedback, please email us at <a href="mailto:info@esd.one">info@esd.one</a>.</li>
            <li>We typically respond to all inquiries within 24 hours (or the next business day for emails received over the weekend).</li>
          </ul>
        </li>
        <li>Technical Support
          <ul>
            <li>If you're an existing ESD user and need technical assistance, please visit our <a href="/support">Support page</a> for detailed options, including email support, live chat, and our extensive Knowledge Base.</li>
            <li>For urgent issues, Enterprise customers can also contact our dedicated support hotline.</li>
          </ul>
        </li>
        <li>Sales Inquiries
          <ul>
            <li>If you're interested in purchasing ESD or have questions about our pricing and plans, please email our sales team at <a href="mailto:sales@esd.one">sales@esd.one</a>.</li>
            <li>One of our friendly sales representatives will be in touch shortly to discuss your needs and provide personalized recommendations.</li>
          </ul>
        </li>
        <li>Partnership Opportunities
          <ul>
            <li>If you're interested in partnering with ESD, whether through integration, reseller, or other collaboration opportunities, please email us at <a href="mailto:partners@esd.one">partners@esd.one</a>.</li>
            <li>Our partnerships team will review your inquiry and contact you to explore potential synergies and next steps.</li>
          </ul>
        </li>
      </ol>
      <p>In addition to these channels, you can also connect with us on social media:</p>
      <ul>
        <li>LinkedIn: <a href="https://www.linkedin.com/company/esd-one" target="_blank">linkedin.com/company/esd-one</a></li>
        <li>Twitter: <a href="https://twitter.com/esd_one" target="_blank">@esd_one</a></li>
        <li>Facebook: <a href="https://www.facebook.com/esdone" target="_blank">facebook.com/esdone</a></li>
      </ul>
      <p>We regularly share updates, insights, and best practices on these platforms, and we'd love to engage with you there.</p>
      <p>At ESD, we're committed to providing exceptional customer service and support, and we strive to make every interaction with our team a positive and productive one. So, whether you have a simple question or a complex challenge, don't hesitate to reach out — we're here to help you succeed with electrical blueprint analysis.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.contact-us {
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
