<script setup lang="ts">
function wizard(run: string) {
  alert(run)
}
</script>

<template>
  <div class="wizard-step step-three">
    <h2>Step Three: Symbol Detection</h2>
    <img @click="wizard('detection')" alt="Step Three: Symbol Detection" src="@/assets/detection.svg" width="300" />
  </div>
</template>

<style scoped>
  .wizard-step img {
    cursor: pointer;
  }
</style>

