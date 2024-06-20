<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import KnowledgeBase from '../sections/KnowledgeBase.vue'
import VideoTutorials from '../sections/VideoTutorials.vue'
import CommunityForum from '../sections/CommunityForum.vue'
import ContactSupport from '../sections/ContactSupport.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'knowledgeBase'}]" title="Knowledge Base" @click.prevent="updateActiveTab('knowledgeBase')">Knowledge Base</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'videoTutorials'}]" title="Video Tutorials" @click.prevent="updateActiveTab('videoTutorials')">Video Tutorials</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'communityForum'}]" title="Community Forum" @click.prevent="updateActiveTab('communityForum')">Community Forum</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'contactSupport'}]" title="Contact Support" @click.prevent="updateActiveTab('contactSupport')">Contact Support</a>
    </nav>
  </div>
  <KnowledgeBase v-if="props.activeTab === 'knowledgeBase'" />
  <VideoTutorials v-if="props.activeTab === 'videoTutorials'" />
  <CommunityForum v-if="props.activeTab === 'communityForum'" />
  <ContactSupport v-if="props.activeTab === 'contactSupport'" />
</template>
