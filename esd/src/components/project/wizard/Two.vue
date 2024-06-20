<script setup lang="ts">
function wizard(run: string) {
  alert(run)
}
</script>

<template>
  <div class="wizard-step step-two">
    <h2>Step Two: Blueprint Processing</h2>
    <img @click="wizard('processing')" alt="Step Two: Blueprint Processing" src="@/assets/processing.svg" width="300" />
  </div>
</template>

<style scoped>
  .wizard-step img {
    cursor: pointer;
  }
</style>

