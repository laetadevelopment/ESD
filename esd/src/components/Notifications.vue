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

<style scoped>
.content-notifications {
  display: flex;
  width: 100%;
}

.notification {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(255,255,255,1);
}

.default {
  background-color: rgba(57,116,203,1);
}

.success {
  background-color: rgba(89,189,230,1);
}

.error {
  background-color: rgba(214,137,86,1);
}
</style>
