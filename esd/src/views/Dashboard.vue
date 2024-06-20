<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import ContentNotifications from '@/components/Notifications.vue'
import RecentProjects from '../sections/RecentProjects.vue'
import UsageStatistics from '../sections/UsageStatistics.vue'
import AccountOverview from '../sections/AccountOverview.vue'

const props = defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'updateActiveTab', tab: string): void
}>()

function updateActiveTab(tab: string) {
  emit('updateActiveTab', tab)
}
</script>

<template>
  <div class="content-nav">
    <nav>
      <a href="#" :class="['green', {'active': props.activeTab === 'recentProjects'}]" title="Recent Projects" @click.prevent="updateActiveTab('recentProjects')">Recent Projects</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'usageStatistics'}]" title="Usage Statistics" @click.prevent="updateActiveTab('usageStatistics')">Usage Statistics</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'accountOverview'}]" title="Account Overview" @click.prevent="updateActiveTab('accountOverview')">Account Overview</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'notifications'}]" title="Notifications" @click.prevent="updateActiveTab('notifications')">Notifications</a>
    </nav>
  </div>
  <RecentProjects v-if="props.activeTab === 'recentProjects'" />
  <UsageStatistics v-if="props.activeTab === 'usageStatistics'" />
  <AccountOverview v-if="props.activeTab === 'accountOverview'" />
  <Notifications v-if="props.activeTab === 'notifications'" />
</template>
