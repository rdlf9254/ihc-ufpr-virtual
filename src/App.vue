<script setup>
import AppBar from './components/AppBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-container" id="app-container">
    <AppBar />
    <router-view />
    <AppFooter style="bottom: 0;" />
  </div>
</template>

<style scoped>
</style>
