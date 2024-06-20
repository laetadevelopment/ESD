<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="billing-and-subscription">
    <div class="content-title">
      <h1>Billing and Subscription</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>To provide you with the flexibility and scalability to match your evolving needs and budget, ESD offers a range of subscription plans and billing options. Whether you are an individual user with a small project, or a large organization with complex requirements, we have a plan that can fit your specific use case and budget.</p>
      <p>The Billing and Subscription section of the Settings dashboard provides you with a centralized and transparent view of your ESD account's financial and usage details, including:</p>
      <ol>
        <li>Subscription Plan
          <ul>
            <li>View your current subscription plan, including the features, limits, and pricing</li>
            <li>Compare different plans and see which one best fits your needs</li>
            <li>Upgrade or downgrade your plan at any time, with prorated charges or credits</li>
            <li>See your next billing date and renewal options</li>
          </ul>
        </li>
        <li>Usage and Limits
          <ul>
            <li>Monitor your current usage of ESD's features and resources, such as the number of blueprints processed, storage used, and API calls made</li>
            <li>Track your progress towards your plan's limits and quotas</li>
            <li>Get alerts and notifications when you are approaching or exceeding your limits</li>
            <li>View your usage history and trends over time</li>
          </ul>
        </li>
        <li>Billing and Invoicing
          <ul>
            <li>Manage your billing information, such as your company name, address, and VAT number</li>
            <li>Update your payment methods, such as credit card or wire transfer</li>
            <li>View and download your current and past invoices and receipts</li>
            <li>Set up automatic payments and receive billing notifications</li>
          </ul>
        </li>
        <li>Payment History
          <ul>
            <li>See a detailed record of your payment transactions, including the date, amount, and status</li>
            <li>Identify any failed or pending payments and take corrective action</li>
            <li>Contact our support team for any billing or payment inquiries or disputes</li>
          </ul>
        </li>
        <li>Subscription Changes
          <ul>
            <li>Make changes to your subscription plan, such as upgrading or downgrading</li>
            <li>Add or remove additional features or services, such as custom integrations or premium support</li>
            <li>Manage your renewal settings, such as automatic renewal or manual approval</li>
            <li>Cancel your subscription at any time, with a prorated refund for any unused period</li>
          </ul>
        </li>
      </ol>
      <p>At ESD, we believe in providing transparent and fair pricing, with no hidden fees or long term contracts. Our subscription plans are designed to be flexible and adaptable to your changing needs and budget, with the ability to scale up or down as your usage and requirements evolve.</p>
      <p>We also strive to provide you with clear and detailed information about your billing and usage, so you can make informed decisions about your ESD investment and avoid any surprises or unexpected charges. Our Billing and Subscription section provides you with real time visibility into your account's financial health and utilization, and gives you the tools and options to manage your costs and optimize your ROI.</p>
      <p>Moreover, we are committed to providing exceptional customer support and service, including for billing and subscription matters. Our team of experts is available to answer any questions, resolve any issues, and provide guidance and recommendations to help you make the most of your ESD subscription.</p>
      <p>Ultimately, our goal is to build long term, mutually beneficial relationships with our users, based on trust, transparency, and value creation. We believe that by providing flexible and affordable pricing, clear and detailed billing information, and exceptional customer support, we can help you achieve your business objectives and maximize your success with ESD.</p>
      <p>So whether you are just starting with ESD or looking to optimize your existing subscription, the Billing and Subscription section provides you with the insights and tools you need to make informed and confident decisions about your investment. With ESD, you can not only streamline your electrical blueprint analysis processes but also ensure the financial sustainability and predictability of your operations.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.billing-and-subscription {
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
