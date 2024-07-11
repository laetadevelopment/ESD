<script setup lang="ts">
import { useNotificationStore } from '@/stores/notifications'

const notificationStore = useNotificationStore()
</script>

<template>
  <div class="content-notifications">
    <div v-for="notification in notificationStore.notifications" :key="notification.id"
      :class="['notification', notification.type]">
      {{ notification.message }}
    </div>
  </div>
</template>
