<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="enterprise-solutions">
    <div class="content-title">
      <h1>Enterprise Solutions</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we understand that large enterprises and organizations have unique needs and requirements when it comes to electrical blueprint analysis. That's why we offer custom enterprise solutions tailored to your specific use case, workflow, and infrastructure.</p>
      <p>Our enterprise solutions include all the features and benefits of our team plans, plus:</p>
      <ol>
        <li>Custom feature development: We can work with your team to develop custom features, integrations, and workflows that align with your specific needs and requirements.</li>
        <li>Dedicated infrastructure: We can deploy ESD on dedicated servers and infrastructure, ensuring optimal performance, security, and compliance for your organization.</li>
        <li>On premise or private cloud deployment: If you require on premise or private cloud deployment for regulatory or security reasons, we can work with your IT team to deploy ESD in your environment.</li>
        <li>Advanced security and compliance: We offer a range of advanced security and compliance features, including SAML SSO, 2FA, audit logs, and more, to ensure that your blueprints and data are always protected.</li>
        <li>Strategic partnership: We view our enterprise clients as strategic partners, and we offer opportunities for co marketing, co branding, and joint go to market initiatives.</li>
        <li>Dedicated support: You'll have a dedicated account manager and support team, with custom SLAs and escalation procedures to ensure that you always get the help you need, when you need it.</li>
      </ol>
      <p>Our enterprise solutions are highly customizable and can be adapted to fit your specific industry, use case, and regulatory requirements. Whether you're in construction, manufacturing, utilities, or any other industry that relies on electrical blueprints, we can help you streamline your analysis and collaboration workflows.</p>
      <p>We have a proven track record of working with large enterprises and organizations, and we have the expertise and resources to handle even the most complex and demanding projects.</p>
      <p>Some of the benefits of our enterprise solutions include:</p>
      <ul>
        <li>Increased efficiency and productivity across your organization</li>
        <li>Reduced errors and rework, thanks to automated symbol detection and labeling</li>
        <li>Improved collaboration and communication among teams and stakeholders</li>
        <li>Enhanced security and compliance, with enterprise grade features and controls</li>
        <li>Customized workflows and integrations that align with your existing tools and processes</li>
        <li>Dedicated support and partnership from our team of experts</li>
      </ul>
      <p>If you're interested in learning more about our enterprise solutions, please contact our sales team for a custom consultation and demo. We'll work with you to understand your specific needs and requirements, and we'll propose a solution that can help you achieve your goals and drive business value.</p>
      <p>At ESD, we're committed to being the partner of choice for enterprises and organizations looking to transform their electrical blueprint analysis workflows. With our custom solutions, advanced features, and dedicated support, we can help you take your business to the next level.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.enterprise-solutions {
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
