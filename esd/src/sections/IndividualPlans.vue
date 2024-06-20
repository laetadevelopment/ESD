<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="individual-plans">
    <div class="content-title">
      <h1>Individual Plans</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we offer a range of pricing plans to fit the needs and budgets of individual users. Whether you're a freelance electrical designer, a small business owner, or a hobbyist, we have a plan that's right for you.</p>
      <p>Our individual plans include:</p>
      <ol>
        <li>Basic Plan:
        <ul>
          <li>$9.99/month</li>
          <li>10 blueprint uploads per month</li>
          <li>Basic symbol detection and labeling</li>
          <li>Standard customer support</li>
        </ul></li>
        <li>Pro Plan:
        <ul>
          <li>$19.99/month</li>
          <li>Unlimited blueprint uploads</li>
          <li>Advanced symbol detection and labeling</li>
          <li>Batch processing</li>
          <li>Collaboration features (up to 3 team members)</li>
          <li>Integration with popular CAD tools</li>
          <li>Priority customer support</li>
        </ul></li>
        <li>Premium Plan:
        <ul>
          <li>$49.99/month</li>
          <li>Unlimited blueprint uploads</li>
          <li>Advanced symbol detection and labeling</li>
          <li>Batch processing</li>
          <li>Collaboration features (up to 10 team members)</li>
          <li>Integration with popular CAD tools</li>
          <li>API access for custom integrations</li>
          <li>Dedicated account manager</li>
          <li>Premium customer support</li>
        </ul></li>
      </ol>
      <p>All our individual plans come with a free 14 day trial, so you can try out ESD risk free and see how it can transform your electrical blueprint analysis workflow.</p>
      <p>We also offer flexible billing options, including monthly and annual subscriptions. By choosing an annual subscription, you can save up to 20% compared to the monthly price.</p>
      <p>At ESD, we believe in transparent and fair pricing, with no hidden fees or long term contracts. You can cancel or change your plan at any time, and we'll always prorate any unused portion of your subscription.</p>
      <p>We also offer a 30 day money back guarantee on all our plans. If you're not completely satisfied with ESD, simply let us know within 30 days of your purchase, and we'll refund your payment in full.</p>
      <p>In addition to our standard plans, we also offer special discounts and pricing for students, educators, and non profit organizations. If you fall into one of these categories, please contact our sales team to learn more.</p>
      <p>At ESD, we're committed to providing affordable, flexible, and value packed pricing options for individual users. We believe that everyone should have access to powerful and intuitive electrical blueprint analysis tools, regardless of their budget or scale.</p>
      <p>Ready to get started with ESD? Choose the individual plan that's right for you and sign up today!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.individual-plans {
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
