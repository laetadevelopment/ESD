<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import Overview from '../sections/Overview.vue'
import IntellectualProperty from '../sections/IntellectualProperty.vue'
import UserResponsibilities from '../sections/UserResponsibilities.vue'
import Termination from '../sections/Termination.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'overview'}]" title="Overview" @click.prevent="updateActiveTab('overview')">Overview</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'intellectualProperty'}]" title="Intellectual Property" @click.prevent="updateActiveTab('intellectualProperty')">Intellectual Property</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'userResponsibilities'}]" title="User Responsibilities" @click.prevent="updateActiveTab('userResponsibilities')">User Responsibilities</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'termination'}]" title="Termination" @click.prevent="updateActiveTab('termination')">Termination</a>
    </nav>
  </div>
  <Overview v-if="props.activeTab === 'overview'" />
  <IntellectualProperty v-if="props.activeTab === 'intellectualProperty'" />
  <UserResponsibilities v-if="props.activeTab === 'userResponsibilities'" />
  <Termination v-if="props.activeTab === 'termination'" />
</template>
