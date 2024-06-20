<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import OurStory from '../sections/OurStory.vue'
import Team from '../sections/Team.vue'
import VisionAndMission from '../sections/VisionAndMission.vue'
import PressAndMedia from '../sections/PressAndMedia.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'ourStory'}]" title="Our Story" @click.prevent="updateActiveTab('ourStory')">Our Story</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'team'}]" title="Team" @click.prevent="updateActiveTab('team')">Team</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'visionAndMission'}]" title="Vision and Mission" @click.prevent="updateActiveTab('visionAndMission')">Vision and Mission</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'pressAndMedia'}]" title="Press and Media" @click.prevent="updateActiveTab('pressAndMedia')">Press and Media</a>
    </nav>
  </div>
  <OurStory v-if="props.activeTab === 'ourStory'" />
  <Team v-if="props.activeTab === 'team'" />
  <VisionAndMission v-if="props.activeTab === 'visionAndMission'" />
  <PressAndMedia v-if="props.activeTab === 'pressAndMedia'" />
</template>
