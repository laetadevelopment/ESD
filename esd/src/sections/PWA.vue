<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="pwa">
    <div class="content-title">
      <h1>PWA</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we're always looking for ways to make our app more accessible, convenient, and user friendly. That's why we've built ESD as a Progressive Web App (PWA) — a cutting edge web technology that combines the best of web and mobile apps.</p>
      <p>As a PWA, ESD offers a host of benefits and features that traditional web or mobile apps can't match, such as:</p>
      <ol>
        <li>Instant access: With ESD, there's no need to download or install anything from an app store. Simply navigate to our web app in your browser, and you're ready to go — on any device, anywhere, anytime.</li>
        <li>Offline functionality: ESD can work offline or in low connectivity environments, thanks to its ability to cache data and resources locally on your device. This means you can access your blueprints and projects even without an internet connection.</li>
        <li>Cross platform compatibility: As a web based app, ESD works seamlessly across all platforms and devices — from desktop computers to smartphones and tablets. You'll get the same great experience no matter what device you're using.</li>
        <li>Always up to date: With ESD, you'll always have access to the latest features, updates, and improvements — without having to manually update or reinstall the app. We continuously deploy updates and enhancements behind the scenes, so you can focus on your work.</li>
        <li>Home screen installation: While you can access ESD through your web browser, you can also "install" it on your device's home screen for even easier access. This gives you the convenience of a native app, with the flexibility and accessibility of a web app.</li>
        <li>Push notifications: ESD can send you push notifications directly to your device, keeping you informed about important updates, collaborator actions, or project milestones — even when you're not actively using the app.</li>
        <li>Lightweight and fast: As a PWA, ESD is lightweight, fast, and optimized for performance. It loads quickly, uses minimal data, and doesn't take up valuable storage space on your device.</li>
      </ol>
      <p>Under the hood, ESD leverages the latest web technologies and standards — such as Service Workers, Web App Manifests, and Cache APIs — to deliver a seamless and app like experience within a web browser.</p>
      <p>Our team of experienced web developers and PWA experts has worked hard to ensure that ESD is fast, reliable, and optimized for all devices and network conditions. We've also put a strong emphasis on usability and accessibility, ensuring that ESD is easy to use and navigate for all users.</p>
      <p>But the benefits of ESD as a PWA extend beyond just the user experience. As a web based app, ESD is also easier to maintain, update, and deploy compared to traditional native apps. This allows our team to be more agile and responsive to user needs and feedback.</p>
      <p>At ESD, we believe that PWAs represent the future of app development and delivery. By combining the reach and accessibility of the web with the functionality and performance of native apps, PWAs offer the best of both worlds — and we're excited to be at the forefront of this technology.</p>
      <p>Ready to experience the power and convenience of ESD as a PWA? Simply head to our website and start using the app — no download or installation required!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.pwa {
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
