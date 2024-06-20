<script setup lang="ts">
function wizard(run: string) {
  alert(run)
}
</script>

<template>
  <div class="wizard-step step-one">
    <h2>Step One: Blueprint Upload</h2>
    <img @click="wizard('upload')" alt="Step One: Blueprint Upload" src="@/assets/upload.svg" width="300" />
  </div>
</template>

<style scoped>
  .wizard-step img {
    cursor: pointer;
  }
</style>

