<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="team-plans">
    <div class="content-title">
      <h1>Team Plans</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we know that electrical blueprint analysis is often a team effort. That's why we offer special pricing and features for teams and organizations looking to collaborate and work together more efficiently.</p>
      <p>Our team plans include:</p>
      <ol>
        <li>Team Plan:
        <ul>
          <li>$99.99/month</li>
          <li>Includes 5 team members</li>
          <li>Unlimited blueprint uploads</li>
          <li>Advanced symbol detection and labeling</li>
          <li>Batch processing</li>
          <li>Collaboration features (co editing, commenting, file sharing)</li>
          <li>Integration with popular CAD tools and project management platforms</li>
          <li>Team management and access controls</li>
          <li>API access for custom integrations</li>
          <li>Priority customer support</li>
        </ul></li>
        <li>Business Plan:
        <ul>
          <li>$299.99/month</li>
          <li>Includes 20 team members</li>
          <li>All features of the Team Plan</li>
          <li>Dedicated account manager</li>
          <li>Custom onboarding and training</li>
          <li>Advanced security and compliance features (SAML SSO, 2FA, audit logs)</li>
          <li>Premium customer support with SLAs</li>
        </ul></li>
        <li>Enterprise Plan:
        <ul>
          <li>Custom pricing</li>
          <li>Unlimited team members</li>
          <li>All features of the Business Plan</li>
          <li>Dedicated server and infrastructure</li>
          <li>Custom feature development and integrations</li>
          <li>On premise or private cloud deployment options</li>
          <li>Strategic partnership and co marketing opportunities</li>
        </ul></li>
      </ol>
      <p>All our team plans come with a free 30 day trial, so you can test out ESD with your team and see the benefits of collaborative blueprint analysis firsthand.</p>
      <p>We also offer flexible team management and access controls, so you can easily add or remove team members, set permissions, and monitor activity and usage.</p>
      <p>With our team plans, you'll get access to powerful collaboration features like co editing, commenting, and file sharing, so you can work together in real time and keep everyone on the same page.</p>
      <p>You'll also be able to integrate ESD with your existing tools and workflows, thanks to our integrations with popular CAD tools, project management platforms, and more.</p>
      <p>And with our advanced security and compliance features (available on the Business and Enterprise plans), you can rest assured that your blueprints and data are always safe and secure.</p>
      <p>At ESD, we're committed to providing the best possible experience for teams and organizations of all sizes. Whether you're a small design firm or a large enterprise, we have a plan that can meet your needs and exceed your expectations.</p>
      <p>Ready to take your team's electrical blueprint analysis to the next level? Choose the team plan that's right for you and sign up today!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.team-plans {
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
