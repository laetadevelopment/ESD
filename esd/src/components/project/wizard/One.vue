<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore } from '@/stores/project'
import { stepOne } from '@/functions/stepOne'

const projectStore = useProjectStore()
const dropzoneActive = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const isProcessing = ref(false)

const emit = defineEmits<{
  (e: 'updateWizardStep', step: string): void
}>()

function handleFileSelect(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    if (file.size <= 10 * 1024 * 1024) {
      selectedFile.value = file
    } else {
      selectedFile.value = null
      alert('Please select a file that is 10MB or less.')
      target.value = ''
    }
  } else {
    selectedFile.value = null
  }
}

function handleDrop(event: DragEvent) {
  event.preventDefault()
  dropzoneActive.value = false
  if (event.dataTransfer?.files.length) {
    const file = event.dataTransfer.files[0]
    if (file.size <= 10 * 1024 * 1024) {
      selectedFile.value = file
    } else {
      selectedFile.value = null
      alert('Please upload a file that is 10MB or less.')
    }
  }
}

function handleDragOver(event: DragEvent) {
  event.preventDefault()
  dropzoneActive.value = true
}

function handleDragLeave(event: DragEvent) {
  event.preventDefault()
  dropzoneActive.value = false
}

async function handleUpload() {
  if (selectedFile.value && projectStore.currentProject) {
    isProcessing.value = true
    const blueprintUrl = await stepOne(selectedFile.value, projectStore.currentProject.id)
    await projectStore.updateBlueprintUrl(blueprintUrl)
    isProcessing.value = false
    emit('updateWizardStep', 'two')
  }
}

function handleDropzoneClick(event: MouseEvent) {
  if (!selectedFile.value) {
    fileInput.value?.click()
  } else {
    handleUpload()
  }
}
</script>

<template>
  <div class="wizard-step step-one">
    <h2>Step One: Blueprint Upload</h2>
    <p>To get started, please upload your electrical blueprint in PDF format. The file size should be 10MB or less. If your file is too large for the New Project Wizard then you will need to use Batch Processing in the Import Project feature.</p>
    <div 
      class="dropzone" 
      :class="{ 'active': dropzoneActive, 'file-selected': selectedFile, 'processing': isProcessing }"
      @click="handleDropzoneClick"
      @drop="handleDrop"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
    >
      <input 
        type="file" 
        accept="application/pdf" 
        @change="handleFileSelect" 
        ref="fileInput"
      />
      <p v-if="!selectedFile">Drag and drop.</p>
      <p v-else>Click to upload.</p>
      <img 
        alt="Upload Icon" 
        src="@/assets/upload.svg" 
        width="300" 
      />
    </div>
  </div>
</template>

<style scoped>
.wizard-step {
  text-align: center;
}

.wizard-step img {
  cursor: pointer;
}

.dropzone {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 5px dashed rgba(0,0,0,.5);
  padding: 50px;
  width: 300px;
  margin-bottom: 25px;
  transition: border-color 0.3s;
  cursor: pointer;
}
.dropzone.active {
  border-color: #3974cb;
}
.dropzone.file-selected {
  border-color: rgba(89,189,230,1);
}
.dropzone img {
  opacity: .4;
}
.dropzone img:hover {
  animation: bounce .5s 2 ease-in;
}
.dropzone input[type="file"] {
  display: none;
}
.dropzone p {
  font-weight: bold;
}
.dropzone.processing {
  animation: border-color-change 3s infinite, icon-opacity-change 60s infinite;
}
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}
@keyframes border-color-change {
  0% { border-color: rgba(214,137,86,1); }
  33% { border-color: rgba(57,116,203,1); }
  66% { border-color: rgba(89,189,230,1); }
  100% { border-color: rgba(214,137,86,1); }
}
@keyframes icon-opacity-change {
  0% { opacity: 0.4; }
  100% { opacity: 1; }
}
</style>
