<template>
  <app-header></app-header>
  <div class="max-w-screen-lg mx-auto">
    <NuxtPage />
  </div>
  <app-footer></app-footer>
</template>

<script setup lang="ts">
  useHead({
    title: 'Video Analysis'
  })

</script>