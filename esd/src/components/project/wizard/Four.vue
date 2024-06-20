<script setup lang="ts">
function wizard(run: string) {
  alert(run)
}
</script>

<template>
  <div class="wizard-step step-four">
    <h2>Step Four: Results Visualization</h2>
    <img @click="wizard('visualization')" alt="Step Four: Blueprint Upload" src="@/assets/visualization.svg" width="300" />
  </div>
</template>

<style scoped>
  .wizard-step img {
    cursor: pointer;
  }
</style>
