<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { useUserStore } from '@/stores/user'
import { useNotificationStore } from '@/stores/notifications'
import Notifications from '@/components/Notifications.vue'

const email = ref('')
const password = ref('')
const userStore = useUserStore()
const notificationStore = useNotificationStore()
const emit = defineEmits<{
  (e: 'updateActiveTab', tab: string): void
}>()

async function createUser() {
  try {
    await userStore.register(email.value, password.value)
    notificationStore.addNotification(
      "Welcome to ESD! Your account has been created successfully. You can now log in and start using our powerful features to revolutionize your electrical blueprint analysis workflow.",
      'success'
    )
    emit('updateActiveTab', 'login')
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      notificationStore.addNotification(
        "Oops! The email address you provided is already associated with an ESD account. Please log in or use a different email to register.",
        'error'
      )
    } else if (error.code === 'auth/weak-password') {
      notificationStore.addNotification(
        "The password you entered doesn't meet our security standards. Please choose a stronger password that includes a mix of uppercase and lowercase letters, numbers, and symbols to keep your account safe.",
        'error'
      )
    } else if (error.code === 'auth/invalid-email') {
      notificationStore.addNotification(
        "The email address you entered doesn't look quite right. Please double-check and provide a valid email address to proceed with registration.",
        'error'
      )
    } else {
      notificationStore.addNotification(
        "Sorry, we seem to be experiencing a temporary network or server issue. Please try registering again later, and if the problem persists, don't hesitate to contact our friendly support team for assistance.",
        'error'
      )
    }
    console.error('Error creating user:', error)
  }
}
</script>

<template>
  <div class="new-users">
    <div class="content-title">
      <h1>New Users</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <form @submit.prevent="createUser">
        <div class="user-email">
          <label>Email:</label>
          <input type="email" v-model="email" required>
        </div>
        <div class="user-password">
        <label>Password:</label>
          <input type="password" v-model="password" required>
          <button type="submit">Go</button>
        </div>
      </form>
      <p>Getting started with ESD is easy! Here's how to create your account and start using our powerful features:</p>
      <ol>
      <li>Click the "Sign Up" button on the top right corner of the page.</li>
      <li>Fill out the registration form with your name, email, and a secure password.</li>
      <li>Choose your subscription plan (Individual, Team, or Enterprise).</li>
      <li>Provide your payment information and complete the checkout process.</li>
      <li>Verify your email address by clicking the link in the confirmation email we send you.</li>
      <li>Log in to your new ESD account and start uploading your blueprints!</li>
      </ol>
      <p>If you're not ready to commit to a paid subscription, no worries! You can sign up for our 14 day free trial to test out all of ESD's features and see how our app can benefit your workflow. No credit card is required for the free trial, and you can cancel anytime.</p>
      <p>As a new user, you'll have access to our comprehensive onboarding resources, including:</p>
      <ul>
      <li>Step by step tutorials</li>
      <li>Video walkthroughs</li>
      <li>FAQ and knowledge base</li>
      <li>Dedicated support from our customer success team</li>
      </ul>
      <p>We're here to help you get the most out of ESD and ensure a smooth transition to our platform. If you have any questions or need assistance, don't hesitate to reach out to our friendly support staff.</p>
      <p>Start your journey with ESD today and discover a smarter, faster, and more efficient way to analyze and label your electrical blueprints!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.new-users {
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
