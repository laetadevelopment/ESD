<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import ElectricalSymbols from '../sections/ElectricalSymbols.vue'
import HVACSymbols from '../sections/HVACSymbols.vue'
import PlumbingSymbols from '../sections/PlumbingSymbols.vue'
import CustomSymbols from '../sections/CustomSymbols.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'electricalSymbols'}]" title="Electrical Symbols" @click.prevent="updateActiveTab('electricalSymbols')">Electrical Symbols</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'hvacSymbols'}]" title="HVAC Symbols" @click.prevent="updateActiveTab('hvacSymbols')">HVAC Symbols</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'plumbingSymbols'}]" title="Plumbing Symbols" @click.prevent="updateActiveTab('plumbingSymbols')">Plumbing Symbols</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'customSymbols'}]" title="Custom Symbols" @click.prevent="updateActiveTab('customSymbols')">Custom Symbols</a>
    </nav>
  </div>
  <ElectricalSymbols v-if="props.activeTab === 'electricalSymbols'" />
  <HVACSymbols v-if="props.activeTab === 'hvacSymbols'" />
  <PlumbingSymbols v-if="props.activeTab === 'plumbingSymbols'" />
  <CustomSymbols v-if="props.activeTab === 'customSymbols'" />
</template>
