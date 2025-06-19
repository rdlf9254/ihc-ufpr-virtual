<template>
  <div class="">
    <div
      class="header d-flex flex-row justify-content-between"
      style="width: 1800px"
    >
      <v-img
        :src="ufprVirtualLogo"
        max-height="60"
        contain
        class="mx-auto"
      ></v-img>
    </div>

    <h2 class="content-para text-h5 mb-4">Conteúdos para <span>você</span></h2>
    <div class="menus d-flex flex-column gap-5">
      <div class="d-flex flex-row" style="gap: 150px">
        <img :src="moocIcon" alt="MOOC" class="menu-icon" />
        <img :src="microsIcon" alt="Micros" class="menu-icon" />
      </div>
      <div class="d-flex flex-row" style="gap: 150px">
        <img :src="eventosIcon" alt="Eventos" class="menu-icon" />
        <img :src="extIcon" alt="Extensão" class="menu-icon" />
      </div>
    </div>
  </div>

  <div
    class="menu2 d-flex flex-row justify-content-center"
    style="gap: 5rem; width: 100vw"
  >
    <img :src="suporteIcon" alt="Suporte ao usuário" class="menu-icon" />
    <img :src="virtualIcon" alt="UFPR Virtual" class="menu-icon" />
    <img :src="oficialIcon" alt="Site oficial" class="menu-icon" />
    <img :src="sobreIcon" alt="Sobre a UFPR Aberta" class="menu-icon" />
  </div>
  <v-container fluid class="mt-4 h-100 main-seadip">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="4" class="d-flex justify-center justify-md-start">
          <v-btn color="#007bff" dark class="mr-4">Acessibilidade</v-btn>
          <v-btn color="#007bff" dark>Versão com libras</v-btn>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-img
            src="/path/to/seadip-logo.png"
            max-height="40"
            contain
            class="mx-auto"
          ></v-img>
          <div class="text-caption mt-2">
            Superintendência de Educação a Distância <br />
            © 2023 Todos os direitos reservados
          </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="d-flex justify-center justify-md-end align-center"
        >
          <v-btn text small @click="increaseFont">A+</v-btn>
          <span class="mx-2">aumentar fonte</span>
          <v-btn text small @click="decreaseFont">A-</v-btn>
          <span class="ml-2">diminuir fonte</span>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import ufprVirtualLogo from "../assets/ufprvirtual.png";
import moocIcon from "../assets/menus/mooc.svg";
import microsIcon from "../assets/menus/micros.svg";
import eventosIcon from "../assets/menus/eventos.svg";
import extIcon from "../assets/menus/ext.svg";
import suporteIcon from "../assets/menus2/suporte.svg";
import virtualIcon from "../assets/menus2/virtual.svg";
import oficialIcon from "../assets/menus2/oficial.svg";
import sobreIcon from "../assets/menus2/sobre.svg";
</script>

<style scoped>
.main-seadip {
  background-color: #f3f3f3;
}

.menu-icon {
  /* width: 48px; */
  /* height: 48px; */
  /* margin: 0 8px; */
  cursor: pointer;
  transition: transform 0.2s;
}

.menu-icon:hover {
  transform: scale(1.1);
}

.content-para {
  font-family: Josefin Sans;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #00bcf4;

  span {
    color: #ed8038;
  }
}
</style>
