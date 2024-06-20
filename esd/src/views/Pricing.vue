<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import IndividualPlans from '../sections/IndividualPlans.vue'
import TeamPlans from '../sections/TeamPlans.vue'
import EnterpriseSolutions from '../sections/EnterpriseSolutions.vue'
import FAQ from '../sections/FAQ.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'individualPlans'}]" title="Individual Plans" @click.prevent="updateActiveTab('individualPlans')">Individual Plans</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'teamPlans'}]" title="Team Plans" @click.prevent="updateActiveTab('teamPlans')">Team Plans</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'enterpriseSolutions'}]" title="Enterprise Solutions" @click.prevent="updateActiveTab('enterpriseSolutions')">Enterprise Solutions</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'faq'}]" title="FAQ" @click.prevent="updateActiveTab('faq')">FAQ</a>
    </nav>
  </div>
  <IndividualPlans v-if="props.activeTab === 'individualPlans'" />
  <TeamPlans v-if="props.activeTab === 'teamPlans'" />
  <EnterpriseSolutions v-if="props.activeTab === 'enterpriseSolutions'" />
  <FAQ v-if="props.activeTab === 'faq'" />
</template>
