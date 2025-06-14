<template>
    <v-app-bar app color="white" flat class="border-b-1">
      <v-toolbar-title>
        <v-img
          src="/path/to/govbr-logo.png"
          max-height="24"
          max-width="80"
          contain
          class="mr-4"
        ></v-img>
      </v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <v-btn text>COMUNICA BR</v-btn>
      <v-btn text>ACESSO À INFORMAÇÃO</v-btn>
      <v-btn text>PARTICIPE</v-btn>
      <v-btn text>LEGISLAÇÃO</v-btn>
      <v-btn text>ÓRGÃOS DO GOVERNO</v-btn>
  
      <v-spacer></v-spacer>
  
      <div class="d-flex align-center ml-10">
        <v-img
          src="/path/to/ufpr-aberta-logo.png"
          max-height="30"
          max-width="150"
          contain
        ></v-img>
        <v-btn class="ml-4" color="#007bff" dark>Meus cursos</v-btn>
        <v-btn icon class="ml-2">
          <v-icon>mdi-message-text-outline</v-icon>
        </v-btn>
        <v-btn icon class="ml-2">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn icon class="ml-2">
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </template>
  
  <script setup>
  // No script logic needed for a static app bar
  </script>
  
  <style scoped>
  /* Custom styles for precise positioning or font sizes if needed */
  .v-toolbar-title {
    display: flex;
    align-items: center;
  }
  </style>