<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
import AppBar from "../components/AppBar.vue";
import HomePage from "../components/HomePage.vue";
import AppFooter from "../components/AppFooter.vue";
import { RouterView } from "vue-router";
</script>
