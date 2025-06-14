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
  <v-container fluid class="mt-4 h-100 main-seadip">
    <v-row>
      <v-col cols="12" md="6">
        <h2 class="text-h5 mb-4">Conteúdos para você</h2>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card color="#e0f2f7" dark class="pa-4 d-flex align-center">
              <v-icon size="36" class="mr-3">mdi-file-document-outline</v-icon>
              <div>
                <div class="text-subtitle-1 font-weight-bold">abertaMOOC</div>
                <div class="text-caption">
                  Cursos gratuitos on-line com duração de +10 horas.
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#ffedcb" dark class="pa-4 d-flex align-center">
              <v-icon size="36" class="mr-3">mdi-puzzle-outline</v-icon>
              <div>
                <div class="text-subtitle-1 font-weight-bold">abertaMICRO</div>
                <div class="text-caption">
                  Microaprendizagens com duração de até 9 horas.
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#d4edda" dark class="pa-4 d-flex align-center">
              <v-icon size="36" class="mr-3">mdi-calendar-range</v-icon>
              <div>
                <div class="text-subtitle-1 font-weight-bold">
                  abertaEVENTOS
                </div>
                <div class="text-caption">Eventos online na UFPR Aberta</div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card color="#d1c4e9" dark class="pa-4 d-flex align-center">
              <v-icon size="36" class="mr-3">mdi-palette-outline</v-icon>
              <div>
                <div class="text-subtitle-1 font-weight-bold">abertaEXT</div>
                <div class="text-caption">Ações de extensão e cultura.</div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          src="/path/to/main-hero-image.png"
          aspect-ratio="1.7"
          cover
          class="rounded-lg"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12" sm="6" md="3">
        <v-card color="#f7f7f7" class="pa-4 text-center">
          <v-icon size="48" color="orange-darken-2"
            >mdi-help-circle-outline</v-icon
          >
          <div class="text-subtitle-1 font-weight-bold mt-2">
            Suporte ao usuário
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="#e3f2fd" class="pa-4 text-center">
          <v-img
            :src="ufprVirtualLogo"
            max-height="60"
            contain
            class="mx-auto"
          ></v-img>
          <div class="text-subtitle-1 font-weight-bold mt-2">UFPR virtual</div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="#eeeeee" class="pa-4 text-center">
          <v-img
            src="/path/to/ufpr-site-logo.png"
            max-height="60"
            contain
            class="mx-auto"
          ></v-img>
          <div class="text-subtitle-1 font-weight-bold mt-2">Site oficial</div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card color="#e0f7fa" class="pa-4 text-center">
          <v-icon size="48" color="light-blue-darken-2"
            >mdi-information-outline</v-icon
          >
          <div class="text-subtitle-1 font-weight-bold mt-2">
            Sobre a UFPR Aberta
          </div>
        </v-card>
      </v-col>
    </v-row>
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
.content-para{
  font-family: Josefin Sans;
font-weight: 700;
font-size: 48px;
line-height: 100%;
letter-spacing: 0%;
color: #00BCF4;
span{
  color: #ED8038
}

}
</style>
