<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import AllProjects from '../sections/AllProjects.vue'
import NewProject from '../sections/NewProject.vue'
import NewProjectWizard from '../sections/NewProjectWizard.vue'
import ImportProject from '../sections/ImportProject.vue'
import ExportProject from '../sections/ExportProject.vue'

const props = defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'updateActiveTab', tab: string): void
}>()

function updateActiveTab(tab: string) {
  emit('updateActiveTab', tab)
}

function startWizard() {
  updateActiveTab('newProjectWizard')
}
</script>

<template>
  <div class="content-nav">
    <nav>
      <a href="#" :class="['green', {'active': props.activeTab === 'allProjects'}]" title="All Projects" @click.prevent="updateActiveTab('allProjects')">All Projects</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'newProject'}]" title="New Project" @click.prevent="updateActiveTab('newProject')">New Project</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'importProject'}]" title="Import Project" @click.prevent="updateActiveTab('importProject')">Import Project</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'exportProject'}]" title="Export Project" @click.prevent="updateActiveTab('exportProject')">Export Project</a>
    </nav>
  </div>
  <AllProjects v-if="props.activeTab === 'allProjects'" />
  <NewProject v-if="props.activeTab === 'newProject'" @startWizard="startWizard" />
  <NewProjectWizard v-if="props.activeTab === 'newProjectWizard'" />
  <ImportProject v-if="props.activeTab === 'importProject'" />
  <ExportProject v-if="props.activeTab === 'exportProject'" />
</template>
