<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AllProjects from '../sections/AllProjects.vue'
import NewProject from '../sections/NewProject.vue'
import NewProjectWizard from '../sections/NewProjectWizard.vue'
import ImportProject from '../sections/ImportProject.vue'
import ExportProject from '../sections/ExportProject.vue'

const route = useRoute()
const activeTab = ref('')

const props = defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'updateActiveTab', tab: string): void
}>()

onMounted(() => {
  const queryActiveTab = route.query.activeTab as string
  if (queryActiveTab) {
    activeTab.value = queryActiveTab
    emit('updateActiveTab', queryActiveTab)
  } else {
    activeTab.value = props.activeTab
  }
})

function updateActiveTab(tab: string) {
  activeTab.value = tab
  emit('updateActiveTab', tab)
}

function startWizard() {
  updateActiveTab('newProjectWizard')
}
</script>

<template>
  <div class="content-nav">
    <nav>
      <a href="#" :class="['green', {'active': activeTab === 'allProjects'}]" title="All Projects" @click.prevent="updateActiveTab('allProjects')">All Projects</a>
      <a href="#" :class="['green', {'active': activeTab === 'newProject'}]" title="New Project" @click.prevent="updateActiveTab('newProject')">New Project</a>
      <a href="#" :class="['green', {'active': activeTab === 'importProject'}]" title="Import Project" @click.prevent="updateActiveTab('importProject')">Import Project</a>
      <a href="#" :class="['green', {'active': activeTab === 'exportProject'}]" title="Export Project" @click.prevent="updateActiveTab('exportProject')">Export Project</a>
    </nav>
  </div>
  <AllProjects v-if="activeTab === 'allProjects'" />
  <NewProject v-if="activeTab === 'newProject'" @startWizard="startWizard" />
  <NewProjectWizard v-if="activeTab === 'newProjectWizard'" @updateActiveTab="updateActiveTab" />
  <ImportProject v-if="activeTab === 'importProject'" />
  <ExportProject v-if="activeTab === 'exportProject'" />
</template>
