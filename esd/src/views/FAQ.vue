<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import GettingStarted from '../sections/GettingStarted.vue'
import Troubleshooting from '../sections/Troubleshooting.vue'
import FeatureQuestions from '../sections/FeatureQuestions.vue'
import BillingAndAccount from '../sections/BillingAndAccount.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'gettingStarted'}]" title="Getting Started" @click.prevent="updateActiveTab('gettingStarted')">Getting Started</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'troubleshooting'}]" title="Troubleshooting" @click.prevent="updateActiveTab('troubleshooting')">Troubleshooting</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'featureQuestions'}]" title="Feature Questions" @click.prevent="updateActiveTab('featureQuestions')">Feature Questions</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'billingAndAccount'}]" title="Billing and Account" @click.prevent="updateActiveTab('billingAndAccount')">Billing and Account</a>
    </nav>
  </div>
  <GettingStarted v-if="props.activeTab === 'gettingStarted' " />
  <Troubleshooting v-if="props.activeTab === 'troubleshooting'" />
  <FeatureQuestions v-if="props.activeTab === 'featureQuestions'" />
  <BillingAndAccount v-if="props.activeTab === 'billingAndAccount'" />
</template>
