<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import SymbolDetection from '../sections/SymbolDetection.vue'
import BatchProcessing from '../sections/BatchProcessing.vue'
import CollaborationTools from '../sections/CollaborationTools.vue'
import Integrations from '../sections/Integrations.vue'
import PWA from '../sections/PWA.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'symbolDetection'}]" title="Symbol Detection" @click.prevent="updateActiveTab('symbolDetection')">Symbol Detection</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'batchProcessing'}]" title="Batch Processing" @click.prevent="updateActiveTab('batchProcessing')">Batch Processing</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'collaborationTools'}]" title="Collaboration Tools" @click.prevent="updateActiveTab('collaborationTools')">Collaboration Tools</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'integrations'}]" title="Integrations" @click.prevent="updateActiveTab('integrations')">Integrations</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'pwa'}]" title="PWA" @click.prevent="updateActiveTab('pwa')">PWA</a>
    </nav>
  </div>
  <SymbolDetection v-if="props.activeTab === 'symbolDetection'" />
  <BatchProcessing v-if="props.activeTab === 'batchProcessing'" />
  <CollaborationTools v-if="props.activeTab === 'collaborationTools'" />
  <Integrations v-if="props.activeTab === 'integrations'" />
  <PWA v-if="props.activeTab === 'pwa'" />
</template>
