<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import AccountSettings from '../sections/AccountSettings.vue'
import BillingAndSubscription from '../sections/BillingAndSubscription.vue'
import UserManagement from '../sections/UserManagement.vue'
import IntegrationManagement from '../sections/IntegrationManagement.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'accountSettings'}]" title="Account Settings" @click.prevent="updateActiveTab('accountSettings')">Account Settings</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'billingAndSubscription'}]" title="Billing and Subscription" @click.prevent="updateActiveTab('billingAndSubscription')">Billing and Subscription</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'userManagement'}]" title="User Management" @click.prevent="updateActiveTab('userManagement')">User Management</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'integrationManagement'}]" title="Integration Management" @click.prevent="updateActiveTab('integrationManagement')">Integration Management</a>
    </nav>
  </div>
  <AccountSettings v-if="props.activeTab === 'accountSettings'" />
  <BillingAndSubscription v-if="props.activeTab === 'billingAndSubscription'" />
  <UserManagement v-if="props.activeTab === 'userManagement'" />
  <IntegrationManagement v-if="props.activeTab === 'integrationManagement'" />
</template>
