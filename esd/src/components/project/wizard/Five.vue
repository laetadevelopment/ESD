<script setup lang="ts">
function wizard(run: string) {
  alert(run)
}
</script>

<template>
  <div class="wizard-step step-five">
    <h2>Step Five: Project Summary</h2>
    <img @click="wizard('summary')" alt="Step Five: Project Summary" src="@/assets/summary.svg" width="300" />
  </div>
</template>

<style scoped>
  .wizard-step img {
    cursor: pointer;
  }
</style>
