<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore } from '@/stores/project'
import { stepTwo } from '@/functions/stepTwo'

const projectStore = useProjectStore()
const projectName = ref('')
const threshold = ref(0.87)
const isProcessing = ref(false)

const emit = defineEmits<{
  (e: 'updateWizardStep', step: string): void
}>()

async function wizard(run: string) {
  if (projectStore.currentProject) {
    if (run === 'blueprintProcessing') {
      isProcessing.value = true
      await stepTwo(projectStore.currentProject.id)
      isProcessing.value = false
      emit('updateWizardStep', 'three')
    }
  }
}

async function saveProjectSettings() {
  if (projectStore.currentProject) {
    projectStore.currentProject.name = projectName.value
    projectStore.currentProject.threshold = threshold.value
    await projectStore.saveProject()
  }
}
</script>

<template>
  <div class="wizard-step step-two">
    <h2>Step Two: Blueprint Processing</h2>
    <div class="project-settings">
      <div class="project-name">
        <label for="project-name">Project Name:</label>
        <input 
          type="text" 
          id="project-name" 
          v-model="projectName" 
          @change="saveProjectSettings"
        />
      </div>
      <div class="project-threshold">
        <label for="projectThreshold">Threshold:</label>
        <input 
          type="number" 
          id="projectThreshold" 
          v-model="threshold" 
          step="0.01" 
          min="0" 
          max="1" 
          @change="saveProjectSettings"
        />
      </div>
    </div>
    <div class="processing-steps">
      <div class="processing-step" :class="{ 'processing': isProcessing }">
        <img @click="wizard('blueprintProcessing')" alt="Blueprint Processing" src="@/assets/processing.svg" width="300" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wizard-step img {
  cursor: pointer;
}
.project-settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
}
.project-settings div {
  display: flex;
  margin-bottom: 25px;
}
.project-settings div:last {
  margin-bottom: 0;
}
.project-settings label {
  width: 160px;
}
.processing-steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
}
.processing-steps img {
  opacity: .4;
}
.processing-steps img:hover {
  animation: bounce .5s 2 ease-in;
}
.processing-step.processing img {
  animation: icon-opacity-change 60s infinite, icon-rotation 60s infinite linear;
}
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}
@keyframes icon-opacity-change {
  0% { opacity: 0.4; }
  100% { opacity: 1; }
}
@keyframes icon-rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
