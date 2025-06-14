<template>
  <v-app>
    <AppBar />
    <v-main>
      <HomePage />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import AppBar from "../components/AppBar.vue";
import HomePage from "../components/HomePage.vue";
import AppFooter from "../components/AppFooter.vue";
</script>
