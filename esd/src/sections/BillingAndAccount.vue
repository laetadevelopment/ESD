<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="billing-and-account">
    <div class="content-title">
      <h1>Billing and Account</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we strive to make billing and account management as simple and transparent as possible. Here are answers to some common questions about billing and account management:</p>
      <ol>
        <li>What payment methods does ESD accept?
        <ul>
          <li>We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept payments via PayPal and bank transfer (for enterprise customers).</li>
        </ul></li>
        <li>How can I update my billing information?
        <ul>
          <li>You can update your billing information at any time by logging into your ESD account and going to the "Billing" section of your account settings. From there, you can update your credit card details, billing address, and other information.</li>
        </ul></li>
        <li>When am I billed for my ESD subscription?
        <ul>
          <li>For monthly subscriptions, you are billed on the same day each month, based on the date you first signed up. For annual subscriptions, you are billed once per year on your anniversary date.</li>
        </ul></li>
        <li>Can I change my subscription plan?
        <ul>
          <li>Yes, you can upgrade or downgrade your subscription plan at any time by going to the "Subscription" section of your account settings. If you upgrade, you'll be charged a prorated amount based on the remaining time in your billing cycle. If you downgrade, your new plan will take effect at the start of your next billing cycle.</li>
        </ul></li>
        <li>How can I cancel my subscription?
        <ul>
          <li>You can cancel your subscription at any time by going to the "Subscription" section of your account settings and clicking the "Cancel Subscription" button. Your cancellation will take effect at the end of your current billing cycle, and you will not be charged again.</li>
        </ul></li>
        <li>Do you offer refunds?
        <ul>
          <li>We offer a 30 day money back guarantee for all our subscription plans. If you're not satisfied with ESD for any reason, you can contact our support team within 30 days of your initial purchase for a full refund. After 30 days, we do not offer refunds for cancellations, but you can still cancel your subscription at any time to prevent future charges.</li>
        </ul></li>
        <li>How can I view my billing history?
        <ul>
          <li>You can view your complete billing history, including past invoices and payments, by going to the "Billing" section of your account settings. From there, you can also download invoices for your records.</li>
        </ul></li>
        <li>How can I add or remove team members from my account?
        <ul>
          <li>If you have a Team or Enterprise plan, you can add or remove team members by going to the "Team" section of your account settings. From there, you can invite new team members by email, set their permissions, and remove team members as needed.</li>
        </ul></li>
        <li>What happens to my data if I cancel my subscription?
        <ul>
          <li>If you cancel your subscription, your account and all associated data will be deactivated at the end of your current billing cycle. However, we will retain your data for a period of 30 days after cancellation, during which time you can reactivate your account and regain access to your data. After 30 days, all data associated with your cancelled account will be permanently deleted.</li>
        </ul></li>
        <li>How can I contact support for billing or account issues?
        <ul>
          <li>If you have any questions or issues related to billing or account management, you can contact our support team via email or live chat. For enterprise customers, you can also contact your dedicated account manager directly.</li>
        </ul></li>
      </ol>
      <p>At ESD, we're committed to providing a smooth and hassle free billing and account management experience. If you have any other questions or concerns, please don't hesitate to reach out to our support team. We're always here to help!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.billing-and-account {
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
