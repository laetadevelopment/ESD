<script setup lang="ts">  
import { useProjectStore } from '@/stores/project'
import { useNotificationStore } from '@/stores/notifications'

const projectStore = useProjectStore()
const notificationStore = useNotificationStore()

const emit = defineEmits<{
  (e: 'wizardComplete'): void
}>()

async function wizard(run: string) {
  if (projectStore.currentProject) {
    emit('wizardComplete')
  }
}
</script>

<template>
  <div class="wizard-step step-three">
    <h2>Step Three: Project Summary</h2>
    <div class="processing-stats">
      <p>Project ID: {{ projectStore.currentProject?.id ?? '' }}</p>
      <p>Project Name: {{ projectStore.currentProject?.name ?? '' }}</p>
      <p>Project Threshold: {{ projectStore.currentProject?.threshold ?? '' }}</p>
      <p>Processing Time: {{ projectStore.currentProject?.data?.two?.time ?? 0 }} seconds</p>
      <p>Pages Processed: {{ projectStore.currentProject?.data?.two?.pages ?? 0 }}</p>
      <p>Tiles Processed: {{ projectStore.currentProject?.data?.two?.tiles ?? 0 }}</p>
      <p>Predictions Made: {{ projectStore.currentProject?.data?.two?.predictions ?? 0 }}</p>
      <h3>Annotated Images:</h3>
      <ul>
        <li v-for="(image, index) in projectStore.currentProject?.data?.two?.annotations || []" :key="index">
          <a :href="image.url" target="_blank">{{ image.name }}</a>
        </li>
      </ul>
      <img @click="wizard('summary')" alt="Complete Project" src="@/assets/summary.svg" width="300" />
    </div>
  </div>
</template>

<style scoped>
.wizard-step img {
  cursor: pointer;
}
.wizard-step img:hover {
  animation: bounce .5s 2 ease-in;
}
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}
</style>
