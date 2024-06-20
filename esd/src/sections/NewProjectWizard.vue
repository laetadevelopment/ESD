<script setup lang="ts">
import { ref } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
const navigationStore = useNavigationStore()
const currentStep = ref(1)
import Notifications from '@/components/Notifications.vue'

import One from '../components/project/wizard/One.vue'
import Two from '../components/project/wizard/Two.vue'
import Three from '../components/project/wizard/Three.vue'
import Four from '../components/project/wizard/Four.vue'
import Five from '../components/project/wizard/Five.vue'

function wizard(step: string) {
  switch (step) {
    case 'back':
      currentStep.value = Math.max(currentStep.value - 1, 1)
      navigationStore.navigateToStep(currentStep.value)
      break
    case 'one':
      currentStep.value = 1
      navigationStore.navigateToStep(currentStep.value)
      break
    case 'two':
      currentStep.value = 2
      navigationStore.navigateToStep(currentStep.value)
      break
    case 'three':
      currentStep.value = 3
      navigationStore.navigateToStep(currentStep.value)
      break
    case 'four':
      currentStep.value = 4
      navigationStore.navigateToStep(currentStep.value)
      break
    case 'five':
      currentStep.value = 5
      navigationStore.navigateToStep(currentStep.value)
      break
    case 'save':
      navigationStore.saveProject()
      break
    default:
      break
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
      <div class="wizard-steps">
        <One v-if="currentStep === 1" />
        <Two v-if="currentStep === 2" />
        <Three v-if="currentStep === 3" />
        <Four v-if="currentStep === 4" />
        <Five v-if="currentStep === 5" />
      </div>
      <div class="wizard-nav">
        <nav>
          <a href="#" @click.prevent="wizard('back')" title="Back">Back</a>
          <a href="#" @click.prevent="wizard('one')" title="One">One</a>
          <a href="#" @click.prevent="wizard('two')" title="Two">Two</a>
          <a href="#" @click.prevent="wizard('three')" title="Three">Three</a>
          <a href="#" @click.prevent="wizard('four')" title="Four">Four</a>
          <a href="#" @click.prevent="wizard('five')" title="Five">Five</a>
          <a href="#" @click.prevent="wizard('save')" title="Save">Save</a>
        </nav>
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
.content-body {
  overflow: hidden;
}
.wizard-steps {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  height: calc(100% - 55px);
  width: 100%;
  overflow-y: scroll;
}
.wizard-step {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wizard-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
}
.wizard-nav nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  background: rgba(57,116,203,1);
}
.wizard-nav nav a {
  color: rgba(255,255,255,1);
}
.wizard-nav nav a:hover {
  color: rgba(255,255,255,.75);
}
</style>
