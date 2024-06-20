<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import DataCollection from '../sections/DataCollection.vue'
import DataUsage from '../sections/DataUsage.vue'
import DataProtection from '../sections/DataProtection.vue'
import UserRights from '../sections/UserRights.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'dataCollection'}]" title="Data Collection" @click.prevent="updateActiveTab('dataCollection')">Data Collection</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'dataUsage'}]" title="Data Usage" @click.prevent="updateActiveTab('dataUsage')">Data Usage</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'dataProtection'}]" title="Data Protection" @click.prevent="updateActiveTab('dataProtection')">Data Protection</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'userRights'}]" title="User Rights" @click.prevent="updateActiveTab('userRights')">User Rights</a>
    </nav>
  </div>
  <DataCollection v-if="props.activeTab === 'dataCollection'" />
  <DataUsage v-if="props.activeTab === 'dataUsage'" />
  <DataProtection v-if="props.activeTab === 'dataProtection'" />
  <UserRights v-if="props.activeTab === 'userRights'" />
</template>
