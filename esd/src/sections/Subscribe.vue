<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="subscribe">
    <div class="content-title">
      <h1>Subscribe</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Don't miss out on the latest news, insights, and updates from the ESD Blog. Subscribe to our email newsletter and get the latest posts delivered straight to your inbox, every week.</p>
      <p>Subscribing to the ESD Blog newsletter is quick and easy:</p>
      <ol>
        <li>Visit <a href="/blog">esd.one/blog</a> and look for the "Subscribe" form in the sidebar or footer.</li>
        <li>Enter your email address in the form and click "Subscribe".</li>
        <li>Check your email inbox for a confirmation message from ESD, and click on the confirmation link to activate your subscription.</li>
      </ol>
      <p>Once you've subscribed, you'll receive a weekly digest of our latest blog posts, as well as occasional special announcements and offers from ESD. You can unsubscribe at any time by clicking on the "Unsubscribe" link at the bottom of any newsletter email.</p>
      <p>In addition to our email newsletter, you can also follow ESD on social media to stay up to date with our latest blog posts and other updates. Find us on:</p>
      <ul>
        <li>LinkedIn: <a href="https://www.linkedin.com/company/esd-one" target="_blank">linkedin.com/company/esd-one</a></li>
        <li>Twitter: <a href="https://twitter.com/esd_one" target="_blank">@esd_one</a></li>
        <li>Facebook: <a href="https://www.facebook.com/esdone" target="_blank">facebook.com/esdone</a></li>
      </ul>
      <p>We also encourage you to share our blog posts with your colleagues and peers, and to join the conversation by leaving comments and feedback on our posts. We value your input and insights, and we're always looking for ways to improve and expand our content to better serve our readers.</p>
      <p>At ESD, we're committed to providing valuable, informative, and engaging content to help you stay ahead of the curve in electrical blueprint analysis. Subscribe to our blog newsletter today and join the ESD community of experts and enthusiasts.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.subscribe {
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
