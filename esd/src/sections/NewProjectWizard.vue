<script setup lang="ts">
import { ref, watch } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
import { useProjectStore } from '@/stores/project'
import { useRouter } from 'vue-router'
import { useNotificationStore } from '@/stores/notifications'
import Notifications from '@/components/Notifications.vue'
import One from '@/components/project/wizard/One.vue'
import Two from '@/components/project/wizard/Two.vue'
import Three from '@/components/project/wizard/Three.vue'

const navigationStore = useNavigationStore()
const projectStore = useProjectStore()
const router = useRouter()
const notificationStore = useNotificationStore()
const currentStep = ref(2)

const emit = defineEmits<{
  (e: 'updateActiveTab', tab: string): void
}>()

watch(
  () => projectStore.currentProject,
  (project) => {
    if (project) {
      currentStep.value = getStepNumber(project.currentWizardStep)
    }
  },
  { immediate: true }
)

function getStepNumber(step: string): number {
  switch (step) {
    case 'start':
      return 2
    case 'one':
      return 2
    case 'two':
      return 3
    case 'three':
      return 4
    default:
      return 2
  }
}

async function wizard(step: string) {
  if (projectStore.currentProject) {
    switch (step) {
      case 'back':
        currentStep.value = Math.max(currentStep.value - 1, 2)
        projectStore.currentProject.currentWizardStep = getStepName(currentStep.value)
        await projectStore.saveProject()
        break
      case 'one':
        currentStep.value = 2
        projectStore.currentProject.currentWizardStep = 'one'
        await projectStore.saveProject()
        break
      case 'two':
        currentStep.value = 3
        projectStore.currentProject.currentWizardStep = 'two'
        await projectStore.saveProject()
        break
      case 'three':
        currentStep.value = 4
        projectStore.currentProject.currentWizardStep = 'three'
        await projectStore.saveProject()
        break
      case 'save':
        const currentStepName = getStepName(currentStep.value)
        projectStore.currentProject.currentWizardStep = `save ${currentStepName}`
        await projectStore.saveProject()
        emit('updateActiveTab', 'allProjects')
        router.replace({ path: '/projects', query: { activeTab: 'allProjects' } })
        notificationStore.addNotification("Project saved successfully!", 'success')
        break
      default:
        break
    }
  }
}

function getStepName(stepNumber: number): string {
  switch (stepNumber) {
    case 2:
      return 'one'
    case 3:
      return 'two'
    case 4:
      return 'three'
    default:
      return 'one'
  }
}

function updateWizardStep(step: string) {
  currentStep.value = getStepNumber(step)
}

async function handleWizardComplete() {
  if (projectStore.currentProject) {
    projectStore.currentProject.currentWizardStep = 'complete'
    await projectStore.saveProject()
    emit('updateActiveTab', 'allProjects')
    router.replace({ path: '/projects', query: { activeTab: 'allProjects' } })
    notificationStore.addNotification("New project created successfully!", 'success')
  }
}
</script>

<template>
  <div class="new-project-wizard">
    <div class="content-title">
      <h1>New Project Wizard</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <div class="wizard-nav">
        <nav>
          <a href="#" @click.prevent="wizard('back')" title="Back">Back</a>
          <a href="#" @click.prevent="wizard('one')" title="One">One</a>
          <a href="#" @click.prevent="wizard('two')" title="Two">Two</a>
          <a href="#" @click.prevent="wizard('three')" title="Three">Three</a>
          <a href="#" @click.prevent="wizard('save')" title="Save">Save</a>
        </nav>
      </div>
      <div class="wizard-steps">
        <One v-if="currentStep === 2" @updateWizardStep="updateWizardStep" />
        <Two v-if="currentStep === 3" @updateWizardStep="updateWizardStep" />
        <Three v-if="currentStep === 4" @wizardComplete="handleWizardComplete" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.new-project-wizard {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
.new-project-wizard .content-body {
  border-top: none;
}
.wizard-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  background: rgba(57,116,203,1);
}
.wizard-nav nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.wizard-nav nav a {
  color: rgba(255,255,255,1);
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  text-transform: uppercase;
}
.wizard-nav nav a:hover {
  color: rgba(255,255,255,.75);
}
.wizard-steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 25px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.wizard-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
@media (max-width: 1125px) {
  .wizard-nav nav a {
    font-size: 16px;
  }
}
@media (max-width: 500px) {
  .wizard-nav nav a {
    font-size: 14px;
  }
}
</style>
