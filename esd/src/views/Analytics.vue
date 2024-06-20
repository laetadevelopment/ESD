<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import RecognitionAccuracy from '../sections/RecognitionAccuracy.vue'
import TimeSavings from '../sections/TimeSavings.vue'
import CostReduction from '../sections/CostReduction.vue'
import ROICalculator from '../sections/ROICalculator.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'recognitionAccuracy'}]" title="Recognition Accuracy" @click.prevent="updateActiveTab('recognitionAccuracy')">Recognition Accuracy</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'timeSavings'}]" title="Time Savings" @click.prevent="updateActiveTab('timeSavings')">Time Savings</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'costReduction'}]" title="Cost Reduction" @click.prevent="updateActiveTab('costReduction')">Cost Reduction</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'roiCalculator'}]" title="ROI Calculator" @click.prevent="updateActiveTab('roiCalculator')">ROI Calculator</a>
    </nav>
  </div>
  <RecognitionAccuracy v-if="props.activeTab === 'recognitionAccuracy'" />
  <TimeSavings v-if="props.activeTab === 'timeSavings'" />
  <CostReduction v-if="props.activeTab === 'costReduction'" />
  <ROICalculator v-if="props.activeTab === 'roiCalculator'" />
</template>
