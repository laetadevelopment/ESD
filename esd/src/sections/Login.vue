<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useNotificationStore } from '@/stores/notifications'
import Notifications from '@/components/Notifications.vue'

const email = ref('')
const password = ref('')
const userStore = useUserStore()
const router = useRouter()
const notificationStore = useNotificationStore()

async function loginUser() {
  try {
    await userStore.login(email.value, password.value)
    notificationStore.addNotification(
      "Welcome back to ESD! You have been logged in successfully. We're excited to have you here and can't wait to see how our app streamlines your electrical blueprint analysis process.",
      'success'
    )
    router.push('/dashboard')
  } catch (error: any) {
    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
      notificationStore.addNotification(
        "The email or password you entered doesn't match our records. Please double-check your credentials and try again.",
        'error'
      )
    } else if (error.code === 'auth/user-disabled') {
      notificationStore.addNotification(
        "We're sorry, but it appears that your ESD account has been temporarily disabled. Please reach out to our support team for assistance in reactivating your account.",
        'error'
      )
    } else {
      notificationStore.addNotification(
        "Sorry, we seem to be experiencing a temporary network or server issue. Please try logging in again later, and if the problem persists, don't hesitate to contact our friendly support team for assistance.",
        'error'
      )
    }
    console.error('Error logging in:', error)
    // Close the mobile menu
    closeMobileMenu()
  }
}

function closeMobileMenu() {
  // Call the closeMobileMenu function from the App.vue component
  useRouter().push({ name: 'home' })
}
</script>

<template>
  <div class="login">
    <div class="content-title">
      <h1>Login</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <form @submit.prevent="loginUser">
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
      <p>Already have an ESD account? Welcome back! To log in and access your projects, simply:</p>
      <ol>
        <li>Enter your email address and password on the login form.</li>
        <li>Click the "Go" button above to access your ESD dashboard.</li>
      </ol>
      <p>If you've forgotten your password, no problem! Just click the "Forgot Password?" link on the login page, enter your email address, and we'll send you instructions on how to reset your password.</p>
      <p>Once you're logged in, you'll have full access to all of ESD's features and your saved projects. From your dashboard, you can:</p>
      <ul>
        <li>Upload new blueprints for analysis</li>
        <li>Review and edit previously processed blueprints</li>
        <li>Collaborate with team members on shared projects</li>
        <li>Access your account settings and subscription information</li>
      </ul>
      <p>We recommend bookmarking the ESD login page for quick and easy access to your account in the future.</p>
      <p>If you experience any issues logging in or have questions about your account, our support team is always here to help. Don't hesitate to contact us via email, live chat, or phone for prompt and friendly assistance.</p>
      <p>Welcome back to ESD — we're thrilled to have you as part of our community!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.login {
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
