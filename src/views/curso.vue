<template>
  <div id="app-container">
    <header class="main-header">
      <div class="header-top">
        <img
          :src="voltar"
          alt="Voltar"
          class="menu-icon"
          height="50px"
          @click="gotoHome"
        />
        <div class="font-controls">
          <button class="font-button">A+ aumentar fonte</button>
          <button class="font-button">A- diminuir fonte</button>
        </div>
      </div>
      <div class="header-bottom">
        <h1 class="main-title">{{ title }}</h1>
        <div class="search-container">
          <input type="text" placeholder="Buscar..." class="search-input" />
          <button class="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <main class="course-grid">
      <div
        v-for="curso in cursoData?.cursos"
        :key="curso.id"
        class="course-card"
      >
        <div
          class="card-header"
          :style="{ backgroundColor: cursoData.corHead }"
        ></div>
        <div class="card-body">
          <h2 class="course-title">{{ curso.titulo }}</h2>
          <p class="course-info">
            <strong>Carga Horária:</strong> {{ curso.cargaHoraria }}
          </p>
          <p class="course-info">
            <strong>Metodologia:</strong> {{ curso.metodologia }}
          </p>
          <a
            href="#"
            class="details-button"
            :style="{ backgroundColor: cursoData.corBotao }"
            >Ver mais</a
          >
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import voltar from "../assets/menus/voltar.svg";

export default {
  name: "Cursos",
  data() {
    return {
      voltar,
      cursoData: null,
      cursoId: null,
      // Dados dos cursos
      dados: {
        mooc: {
          corHead: "#00BCF4",
          corBotao: "#ED8038",
          cursos: [
            {
              id: 1,
              titulo: "Fundamentos de Programação em Python",
              cargaHoraria: "10h",
              metodologia: "Laboratório Interativo",
            },
            {
              id: 2,
              titulo: "Design de Interfaces com Figma",
              cargaHoraria: "8h",
              metodologia: "Estudos de Caso",
            },
            {
              id: 3,
              titulo: "Introdução ao Marketing Digital",
              cargaHoraria: "12h",
              metodologia: "Podcast Temático",
            },
            {
              id: 4,
              titulo: "Estatística Aplicada para Negócios",
              cargaHoraria: "12h",
              metodologia: "Desafio de Dados",
            },
            {
              id: 5,
              titulo: "Inovação e Empreendedorismo",
              cargaHoraria: "12h",
              metodologia: "Mentoria Colaborativa",
            },
            {
              id: 6,
              titulo: "Gestão Ágil de Projetos",
              cargaHoraria: "12h",
              metodologia: "Simulação de Sprint",
            },
            {
              id: 7,
              titulo: "Introdução à Inteligência Artificial",
              cargaHoraria: "10h",
              metodologia: "Laboratório Prático",
            },
            {
              id: 8,
              titulo: "Fotografia Digital para Iniciantes",
              cargaHoraria: "8h",
              metodologia: "Desafio Fotográfico",
            },
            {
              id: 9,
              titulo: "Redação Científica",
              cargaHoraria: "10h",
              metodologia: "Oficina de Escrita",
            },
            {
              id: 10,
              titulo: "Desenvolvimento de Apps com Flutter",
              cargaHoraria: "14h",
              metodologia: "Projeto Guiado",
            },
            {
              id: 11,
              titulo: "Lógica de Programação com Jogos",
              cargaHoraria: "10h",
              metodologia: "Gamificação",
            },
            {
              id: 12,
              titulo: "Finanças Pessoais e Investimentos",
              cargaHoraria: "8h",
              metodologia: "Simulação Financeira",
            },
            {
              id: 13,
              titulo: "Introdução ao Machine Learning",
              cargaHoraria: "12h",
              metodologia: "Laboratório de Dados",
            },
            {
              id: 14,
              titulo: "Desenvolvimento Web com Vue.js",
              cargaHoraria: "10h",
              metodologia: "Hands-on",
            },
            {
              id: 15,
              titulo: "Gestão do Tempo e Produtividade",
              cargaHoraria: "6h",
              metodologia: "Dinâmica de Grupos",
            },
            {
              id: 16,
              titulo: "Introdução à Robótica Educacional",
              cargaHoraria: "10h",
              metodologia: "Montagem de Protótipos",
            },
            {
              id: 17,
              titulo: "Comunicação Não Violenta",
              cargaHoraria: "8h",
              metodologia: "Role-Play",
            },
            {
              id: 18,
              titulo: "Desenvolvimento de Chatbots",
              cargaHoraria: "10h",
              metodologia: "Projeto Prático",
            },
            {
              id: 19,
              titulo: "Gestão de Mídias Sociais",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 20,
              titulo: "Introdução ao Blockchain",
              cargaHoraria: "10h",
              metodologia: "Laboratório Virtual",
            },
            {
              id: 21,
              titulo: "Educação Ambiental e Sustentabilidade",
              cargaHoraria: "8h",
              metodologia: "Projeto Colaborativo",
            },
            {
              id: 22,
              titulo: "Criação de Podcasts",
              cargaHoraria: "8h",
              metodologia: "Oficina Prática",
            },
            {
              id: 23,
              titulo: "Desenvolvimento de APIs REST",
              cargaHoraria: "12h",
              metodologia: "Laboratório de Código",
            },
            {
              id: 24,
              titulo: "Introdução ao Design Thinking",
              cargaHoraria: "8h",
              metodologia: "Workshop Interativo",
            },
            {
              id: 25,
              titulo: "Segurança da Informação",
              cargaHoraria: "10h",
              metodologia: "Simulação de Ataques",
            },
            {
              id: 26,
              titulo: "Gestão de Projetos Sociais",
              cargaHoraria: "10h",
              metodologia: "Estudo de Impacto",
            },
            {
              id: 27,
              titulo: "Introdução ao Arduino",
              cargaHoraria: "10h",
              metodologia: "Montagem de Circuitos",
            },
            {
              id: 28,
              titulo: "Educação Inclusiva",
              cargaHoraria: "8h",
              metodologia: "Dinâmica de Sensibilização",
            },
            {
              id: 29,
              titulo: "Desenvolvimento de Games 2D",
              cargaHoraria: "12h",
              metodologia: "Projeto de Jogo",
            },
            {
              id: 30,
              titulo: "Introdução ao Cloud Computing",
              cargaHoraria: "10h",
              metodologia: "Laboratório em Nuvem",
            },
            {
              id: 31,
              titulo: "Gestão de Conflitos",
              cargaHoraria: "8h",
              metodologia: "Simulação de Situações",
            },
            {
              id: 32,
              titulo: "Introdução ao SQL e Bancos de Dados",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Consultas",
            },
            {
              id: 33,
              titulo: "Educação Financeira para Jovens",
              cargaHoraria: "6h",
              metodologia: "Gamificação",
            },
            {
              id: 34,
              titulo: "Introdução à Programação em Java",
              cargaHoraria: "10h",
              metodologia: "Laboratório Interativo",
            },
            {
              id: 35,
              titulo: "Gestão de Equipes Remotas",
              cargaHoraria: "8h",
              metodologia: "Dinâmica Online",
            },
            {
              id: 36,
              titulo: "Introdução ao UX/UI Design",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 37,
              titulo: "Cibersegurança para Pequenos Negócios",
              cargaHoraria: "8h",
              metodologia: "Simulação de Incidentes",
            },
            {
              id: 38,
              titulo: "Introdução ao React",
              cargaHoraria: "10h",
              metodologia: "Projeto Prático",
            },
            {
              id: 39,
              titulo: "Gestão de Carreira e Empregabilidade",
              cargaHoraria: "6h",
              metodologia: "Mentoria Online",
            },
            {
              id: 40,
              titulo: "Introdução à Análise de Dados",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Dados",
            },
            {
              id: 41,
              titulo: "Produção de Vídeos para Internet",
              cargaHoraria: "8h",
              metodologia: "Oficina Prática",
            },
            {
              id: 42,
              titulo: "Introdução ao SCRUM",
              cargaHoraria: "8h",
              metodologia: "Simulação de Sprints",
            },
            {
              id: 43,
              titulo: "Gestão de Documentos Digitais",
              cargaHoraria: "6h",
              metodologia: "Laboratório Prático",
            },
            {
              id: 44,
              titulo: "Introdução à Programação Mobile",
              cargaHoraria: "10h",
              metodologia: "Projeto de App",
            },
            {
              id: 45,
              titulo: "Comunicação Visual e Branding",
              cargaHoraria: "8h",
              metodologia: "Workshop Criativo",
            },
            {
              id: 46,
              titulo: "Introdução ao Power BI",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Dashboards",
            },
            {
              id: 47,
              titulo: "Gestão de E-commerce",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 48,
              titulo: "Introdução ao Linux",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Comandos",
            },
            {
              id: 49,
              titulo: "Educação Midiática",
              cargaHoraria: "6h",
              metodologia: "Oficina de Análise",
            },
            {
              id: 50,
              titulo: "Introdução à Automação Residencial",
              cargaHoraria: "8h",
              metodologia: "Projeto Maker",
            },
          ],
        },
        micro: {
          corHead: "#ED8038",
          corBotao: "#00BCF4",
          cursos: [
            {
              id: 1,
              titulo: "Fundamentos de Programação em Python",
              cargaHoraria: "10h",
              metodologia: "Laboratório Interativo",
            },
            {
              id: 2,
              titulo: "Design de Interfaces com Figma",
              cargaHoraria: "8h",
              metodologia: "Estudos de Caso",
            },
            {
              id: 3,
              titulo: "Introdução ao Marketing Digital",
              cargaHoraria: "12h",
              metodologia: "Podcast Temático",
            },
            {
              id: 4,
              titulo: "Estatística Aplicada para Negócios",
              cargaHoraria: "12h",
              metodologia: "Desafio de Dados",
            },
            {
              id: 5,
              titulo: "Inovação e Empreendedorismo",
              cargaHoraria: "12h",
              metodologia: "Mentoria Colaborativa",
            },
            {
              id: 6,
              titulo: "Gestão Ágil de Projetos",
              cargaHoraria: "12h",
              metodologia: "Simulação de Sprint",
            },
            {
              id: 7,
              titulo: "Introdução à Inteligência Artificial",
              cargaHoraria: "10h",
              metodologia: "Laboratório Prático",
            },
            {
              id: 8,
              titulo: "Fotografia Digital para Iniciantes",
              cargaHoraria: "8h",
              metodologia: "Desafio Fotográfico",
            },
            {
              id: 9,
              titulo: "Redação Científica",
              cargaHoraria: "10h",
              metodologia: "Oficina de Escrita",
            },
            {
              id: 10,
              titulo: "Desenvolvimento de Apps com Flutter",
              cargaHoraria: "14h",
              metodologia: "Projeto Guiado",
            },
            {
              id: 11,
              titulo: "Lógica de Programação com Jogos",
              cargaHoraria: "10h",
              metodologia: "Gamificação",
            },
            {
              id: 12,
              titulo: "Finanças Pessoais e Investimentos",
              cargaHoraria: "8h",
              metodologia: "Simulação Financeira",
            },
            {
              id: 13,
              titulo: "Introdução ao Machine Learning",
              cargaHoraria: "12h",
              metodologia: "Laboratório de Dados",
            },
            {
              id: 14,
              titulo: "Desenvolvimento Web com Vue.js",
              cargaHoraria: "10h",
              metodologia: "Hands-on",
            },
            {
              id: 15,
              titulo: "Gestão do Tempo e Produtividade",
              cargaHoraria: "6h",
              metodologia: "Dinâmica de Grupos",
            },
            {
              id: 16,
              titulo: "Introdução à Robótica Educacional",
              cargaHoraria: "10h",
              metodologia: "Montagem de Protótipos",
            },
            {
              id: 17,
              titulo: "Comunicação Não Violenta",
              cargaHoraria: "8h",
              metodologia: "Role-Play",
            },
            {
              id: 18,
              titulo: "Desenvolvimento de Chatbots",
              cargaHoraria: "10h",
              metodologia: "Projeto Prático",
            },
            {
              id: 19,
              titulo: "Gestão de Mídias Sociais",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 20,
              titulo: "Introdução ao Blockchain",
              cargaHoraria: "10h",
              metodologia: "Laboratório Virtual",
            },
            {
              id: 21,
              titulo: "Educação Ambiental e Sustentabilidade",
              cargaHoraria: "8h",
              metodologia: "Projeto Colaborativo",
            },
            {
              id: 22,
              titulo: "Criação de Podcasts",
              cargaHoraria: "8h",
              metodologia: "Oficina Prática",
            },
            {
              id: 23,
              titulo: "Desenvolvimento de APIs REST",
              cargaHoraria: "12h",
              metodologia: "Laboratório de Código",
            },
            {
              id: 24,
              titulo: "Introdução ao Design Thinking",
              cargaHoraria: "8h",
              metodologia: "Workshop Interativo",
            },
            {
              id: 25,
              titulo: "Segurança da Informação",
              cargaHoraria: "10h",
              metodologia: "Simulação de Ataques",
            },
            {
              id: 26,
              titulo: "Gestão de Projetos Sociais",
              cargaHoraria: "10h",
              metodologia: "Estudo de Impacto",
            },
            {
              id: 27,
              titulo: "Introdução ao Arduino",
              cargaHoraria: "10h",
              metodologia: "Montagem de Circuitos",
            },
            {
              id: 28,
              titulo: "Educação Inclusiva",
              cargaHoraria: "8h",
              metodologia: "Dinâmica de Sensibilização",
            },
            {
              id: 29,
              titulo: "Desenvolvimento de Games 2D",
              cargaHoraria: "12h",
              metodologia: "Projeto de Jogo",
            },
            {
              id: 30,
              titulo: "Introdução ao Cloud Computing",
              cargaHoraria: "10h",
              metodologia: "Laboratório em Nuvem",
            },
            {
              id: 31,
              titulo: "Gestão de Conflitos",
              cargaHoraria: "8h",
              metodologia: "Simulação de Situações",
            },
            {
              id: 32,
              titulo: "Introdução ao SQL e Bancos de Dados",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Consultas",
            },
            {
              id: 33,
              titulo: "Educação Financeira para Jovens",
              cargaHoraria: "6h",
              metodologia: "Gamificação",
            },
            {
              id: 34,
              titulo: "Introdução à Programação em Java",
              cargaHoraria: "10h",
              metodologia: "Laboratório Interativo",
            },
            {
              id: 35,
              titulo: "Gestão de Equipes Remotas",
              cargaHoraria: "8h",
              metodologia: "Dinâmica Online",
            },
            {
              id: 36,
              titulo: "Introdução ao UX/UI Design",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 37,
              titulo: "Cibersegurança para Pequenos Negócios",
              cargaHoraria: "8h",
              metodologia: "Simulação de Incidentes",
            },
            {
              id: 38,
              titulo: "Introdução ao React",
              cargaHoraria: "10h",
              metodologia: "Projeto Prático",
            },
            {
              id: 39,
              titulo: "Gestão de Carreira e Empregabilidade",
              cargaHoraria: "6h",
              metodologia: "Mentoria Online",
            },
            {
              id: 40,
              titulo: "Introdução à Análise de Dados",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Dados",
            },
            {
              id: 41,
              titulo: "Produção de Vídeos para Internet",
              cargaHoraria: "8h",
              metodologia: "Oficina Prática",
            },
            {
              id: 42,
              titulo: "Introdução ao SCRUM",
              cargaHoraria: "8h",
              metodologia: "Simulação de Sprints",
            },
            {
              id: 43,
              titulo: "Gestão de Documentos Digitais",
              cargaHoraria: "6h",
              metodologia: "Laboratório Prático",
            },
            {
              id: 44,
              titulo: "Introdução à Programação Mobile",
              cargaHoraria: "10h",
              metodologia: "Projeto de App",
            },
            {
              id: 45,
              titulo: "Comunicação Visual e Branding",
              cargaHoraria: "8h",
              metodologia: "Workshop Criativo",
            },
            {
              id: 46,
              titulo: "Introdução ao Power BI",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Dashboards",
            },
            {
              id: 47,
              titulo: "Gestão de E-commerce",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 48,
              titulo: "Introdução ao Linux",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Comandos",
            },
            {
              id: 49,
              titulo: "Educação Midiática",
              cargaHoraria: "6h",
              metodologia: "Oficina de Análise",
            },
            {
              id: 50,
              titulo: "Introdução à Automação Residencial",
              cargaHoraria: "8h",
              metodologia: "Projeto Maker",
            },
          ],
        },
        eventos: {
          corHead: "#A2DD28",
          corBotao: "#6959EA",
          cursos: [
            {
              id: 1,
              titulo: "Fundamentos de Programação em Python",
              cargaHoraria: "10h",
              metodologia: "Laboratório Interativo",
            },
            {
              id: 2,
              titulo: "Design de Interfaces com Figma",
              cargaHoraria: "8h",
              metodologia: "Estudos de Caso",
            },
            {
              id: 3,
              titulo: "Introdução ao Marketing Digital",
              cargaHoraria: "12h",
              metodologia: "Podcast Temático",
            },
            {
              id: 4,
              titulo: "Estatística Aplicada para Negócios",
              cargaHoraria: "12h",
              metodologia: "Desafio de Dados",
            },
            {
              id: 5,
              titulo: "Inovação e Empreendedorismo",
              cargaHoraria: "12h",
              metodologia: "Mentoria Colaborativa",
            },
            {
              id: 6,
              titulo: "Gestão Ágil de Projetos",
              cargaHoraria: "12h",
              metodologia: "Simulação de Sprint",
            },
            {
              id: 7,
              titulo: "Introdução à Inteligência Artificial",
              cargaHoraria: "10h",
              metodologia: "Laboratório Prático",
            },
            {
              id: 8,
              titulo: "Fotografia Digital para Iniciantes",
              cargaHoraria: "8h",
              metodologia: "Desafio Fotográfico",
            },
            {
              id: 9,
              titulo: "Redação Científica",
              cargaHoraria: "10h",
              metodologia: "Oficina de Escrita",
            },
            {
              id: 10,
              titulo: "Desenvolvimento de Apps com Flutter",
              cargaHoraria: "14h",
              metodologia: "Projeto Guiado",
            },
            {
              id: 11,
              titulo: "Lógica de Programação com Jogos",
              cargaHoraria: "10h",
              metodologia: "Gamificação",
            },
            {
              id: 12,
              titulo: "Finanças Pessoais e Investimentos",
              cargaHoraria: "8h",
              metodologia: "Simulação Financeira",
            },
            {
              id: 13,
              titulo: "Introdução ao Machine Learning",
              cargaHoraria: "12h",
              metodologia: "Laboratório de Dados",
            },
            {
              id: 14,
              titulo: "Desenvolvimento Web com Vue.js",
              cargaHoraria: "10h",
              metodologia: "Hands-on",
            },
            {
              id: 15,
              titulo: "Gestão do Tempo e Produtividade",
              cargaHoraria: "6h",
              metodologia: "Dinâmica de Grupos",
            },
            {
              id: 16,
              titulo: "Introdução à Robótica Educacional",
              cargaHoraria: "10h",
              metodologia: "Montagem de Protótipos",
            },
            {
              id: 17,
              titulo: "Comunicação Não Violenta",
              cargaHoraria: "8h",
              metodologia: "Role-Play",
            },
            {
              id: 18,
              titulo: "Desenvolvimento de Chatbots",
              cargaHoraria: "10h",
              metodologia: "Projeto Prático",
            },
            {
              id: 19,
              titulo: "Gestão de Mídias Sociais",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 20,
              titulo: "Introdução ao Blockchain",
              cargaHoraria: "10h",
              metodologia: "Laboratório Virtual",
            },
            {
              id: 21,
              titulo: "Educação Ambiental e Sustentabilidade",
              cargaHoraria: "8h",
              metodologia: "Projeto Colaborativo",
            },
            {
              id: 22,
              titulo: "Criação de Podcasts",
              cargaHoraria: "8h",
              metodologia: "Oficina Prática",
            },
            {
              id: 23,
              titulo: "Desenvolvimento de APIs REST",
              cargaHoraria: "12h",
              metodologia: "Laboratório de Código",
            },
            {
              id: 24,
              titulo: "Introdução ao Design Thinking",
              cargaHoraria: "8h",
              metodologia: "Workshop Interativo",
            },
            {
              id: 25,
              titulo: "Segurança da Informação",
              cargaHoraria: "10h",
              metodologia: "Simulação de Ataques",
            },
            {
              id: 26,
              titulo: "Gestão de Projetos Sociais",
              cargaHoraria: "10h",
              metodologia: "Estudo de Impacto",
            },
            {
              id: 27,
              titulo: "Introdução ao Arduino",
              cargaHoraria: "10h",
              metodologia: "Montagem de Circuitos",
            },
            {
              id: 28,
              titulo: "Educação Inclusiva",
              cargaHoraria: "8h",
              metodologia: "Dinâmica de Sensibilização",
            },
            {
              id: 29,
              titulo: "Desenvolvimento de Games 2D",
              cargaHoraria: "12h",
              metodologia: "Projeto de Jogo",
            },
            {
              id: 30,
              titulo: "Introdução ao Cloud Computing",
              cargaHoraria: "10h",
              metodologia: "Laboratório em Nuvem",
            },
            {
              id: 31,
              titulo: "Gestão de Conflitos",
              cargaHoraria: "8h",
              metodologia: "Simulação de Situações",
            },
            {
              id: 32,
              titulo: "Introdução ao SQL e Bancos de Dados",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Consultas",
            },
            {
              id: 33,
              titulo: "Educação Financeira para Jovens",
              cargaHoraria: "6h",
              metodologia: "Gamificação",
            },
            {
              id: 34,
              titulo: "Introdução à Programação em Java",
              cargaHoraria: "10h",
              metodologia: "Laboratório Interativo",
            },
            {
              id: 35,
              titulo: "Gestão de Equipes Remotas",
              cargaHoraria: "8h",
              metodologia: "Dinâmica Online",
            },
            {
              id: 36,
              titulo: "Introdução ao UX/UI Design",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 37,
              titulo: "Cibersegurança para Pequenos Negócios",
              cargaHoraria: "8h",
              metodologia: "Simulação de Incidentes",
            },
            {
              id: 38,
              titulo: "Introdução ao React",
              cargaHoraria: "10h",
              metodologia: "Projeto Prático",
            },
            {
              id: 39,
              titulo: "Gestão de Carreira e Empregabilidade",
              cargaHoraria: "6h",
              metodologia: "Mentoria Online",
            },
            {
              id: 40,
              titulo: "Introdução à Análise de Dados",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Dados",
            },
            {
              id: 41,
              titulo: "Produção de Vídeos para Internet",
              cargaHoraria: "8h",
              metodologia: "Oficina Prática",
            },
            {
              id: 42,
              titulo: "Introdução ao SCRUM",
              cargaHoraria: "8h",
              metodologia: "Simulação de Sprints",
            },
            {
              id: 43,
              titulo: "Gestão de Documentos Digitais",
              cargaHoraria: "6h",
              metodologia: "Laboratório Prático",
            },
            {
              id: 44,
              titulo: "Introdução à Programação Mobile",
              cargaHoraria: "10h",
              metodologia: "Projeto de App",
            },
            {
              id: 45,
              titulo: "Comunicação Visual e Branding",
              cargaHoraria: "8h",
              metodologia: "Workshop Criativo",
            },
            {
              id: 46,
              titulo: "Introdução ao Power BI",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Dashboards",
            },
            {
              id: 47,
              titulo: "Gestão de E-commerce",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 48,
              titulo: "Introdução ao Linux",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Comandos",
            },
            {
              id: 49,
              titulo: "Educação Midiática",
              cargaHoraria: "6h",
              metodologia: "Oficina de Análise",
            },
            {
              id: 50,
              titulo: "Introdução à Automação Residencial",
              cargaHoraria: "8h",
              metodologia: "Projeto Maker",
            },
          ],
        },
        meusCursos: {
          corHead: "#6959EA",
          corBotao: "#A2DD28",
          cursos: [
            {
              id: 1,
              titulo: "Fundamentos de Programação em Python",
              cargaHoraria: "10h",
              metodologia: "Laboratório Interativo",
            },
            {
              id: 2,
              titulo: "Design de Interfaces com Figma",
              cargaHoraria: "8h",
              metodologia: "Estudos de Caso",
            },
            {
              id: 3,
              titulo: "Introdução ao Marketing Digital",
              cargaHoraria: "12h",
              metodologia: "Podcast Temático",
            },
            {
              id: 4,
              titulo: "Estatística Aplicada para Negócios",
              cargaHoraria: "12h",
              metodologia: "Desafio de Dados",
            },
            {
              id: 5,
              titulo: "Inovação e Empreendedorismo",
              cargaHoraria: "12h",
              metodologia: "Mentoria Colaborativa",
            },
            {
              id: 6,
              titulo: "Gestão Ágil de Projetos",
              cargaHoraria: "12h",
              metodologia: "Simulação de Sprint",
            },
            {
              id: 7,
              titulo: "Introdução à Inteligência Artificial",
              cargaHoraria: "10h",
              metodologia: "Laboratório Prático",
            },
            {
              id: 8,
              titulo: "Fotografia Digital para Iniciantes",
              cargaHoraria: "8h",
              metodologia: "Desafio Fotográfico",
            },
            {
              id: 9,
              titulo: "Redação Científica",
              cargaHoraria: "10h",
              metodologia: "Oficina de Escrita",
            },
            {
              id: 10,
              titulo: "Desenvolvimento de Apps com Flutter",
              cargaHoraria: "14h",
              metodologia: "Projeto Guiado",
            },
            {
              id: 11,
              titulo: "Lógica de Programação com Jogos",
              cargaHoraria: "10h",
              metodologia: "Gamificação",
            },
            {
              id: 12,
              titulo: "Finanças Pessoais e Investimentos",
              cargaHoraria: "8h",
              metodologia: "Simulação Financeira",
            },
            {
              id: 13,
              titulo: "Introdução ao Machine Learning",
              cargaHoraria: "12h",
              metodologia: "Laboratório de Dados",
            },
            {
              id: 14,
              titulo: "Desenvolvimento Web com Vue.js",
              cargaHoraria: "10h",
              metodologia: "Hands-on",
            },
            {
              id: 15,
              titulo: "Gestão do Tempo e Produtividade",
              cargaHoraria: "6h",
              metodologia: "Dinâmica de Grupos",
            },
            {
              id: 16,
              titulo: "Introdução à Robótica Educacional",
              cargaHoraria: "10h",
              metodologia: "Montagem de Protótipos",
            },
            {
              id: 17,
              titulo: "Comunicação Não Violenta",
              cargaHoraria: "8h",
              metodologia: "Role-Play",
            },
            {
              id: 18,
              titulo: "Desenvolvimento de Chatbots",
              cargaHoraria: "10h",
              metodologia: "Projeto Prático",
            },
            {
              id: 19,
              titulo: "Gestão de Mídias Sociais",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 20,
              titulo: "Introdução ao Blockchain",
              cargaHoraria: "10h",
              metodologia: "Laboratório Virtual",
            },
            {
              id: 21,
              titulo: "Educação Ambiental e Sustentabilidade",
              cargaHoraria: "8h",
              metodologia: "Projeto Colaborativo",
            },
            {
              id: 22,
              titulo: "Criação de Podcasts",
              cargaHoraria: "8h",
              metodologia: "Oficina Prática",
            },
            {
              id: 23,
              titulo: "Desenvolvimento de APIs REST",
              cargaHoraria: "12h",
              metodologia: "Laboratório de Código",
            },
            {
              id: 24,
              titulo: "Introdução ao Design Thinking",
              cargaHoraria: "8h",
              metodologia: "Workshop Interativo",
            },
            {
              id: 25,
              titulo: "Segurança da Informação",
              cargaHoraria: "10h",
              metodologia: "Simulação de Ataques",
            },
            {
              id: 26,
              titulo: "Gestão de Projetos Sociais",
              cargaHoraria: "10h",
              metodologia: "Estudo de Impacto",
            },
            {
              id: 27,
              titulo: "Introdução ao Arduino",
              cargaHoraria: "10h",
              metodologia: "Montagem de Circuitos",
            },
            {
              id: 28,
              titulo: "Educação Inclusiva",
              cargaHoraria: "8h",
              metodologia: "Dinâmica de Sensibilização",
            },
            {
              id: 29,
              titulo: "Desenvolvimento de Games 2D",
              cargaHoraria: "12h",
              metodologia: "Projeto de Jogo",
            },
            {
              id: 30,
              titulo: "Introdução ao Cloud Computing",
              cargaHoraria: "10h",
              metodologia: "Laboratório em Nuvem",
            },
            {
              id: 31,
              titulo: "Gestão de Conflitos",
              cargaHoraria: "8h",
              metodologia: "Simulação de Situações",
            },
            {
              id: 32,
              titulo: "Introdução ao SQL e Bancos de Dados",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Consultas",
            },
            {
              id: 33,
              titulo: "Educação Financeira para Jovens",
              cargaHoraria: "6h",
              metodologia: "Gamificação",
            },
            {
              id: 34,
              titulo: "Introdução à Programação em Java",
              cargaHoraria: "10h",
              metodologia: "Laboratório Interativo",
            },
            {
              id: 35,
              titulo: "Gestão de Equipes Remotas",
              cargaHoraria: "8h",
              metodologia: "Dinâmica Online",
            },
            {
              id: 36,
              titulo: "Introdução ao UX/UI Design",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 37,
              titulo: "Cibersegurança para Pequenos Negócios",
              cargaHoraria: "8h",
              metodologia: "Simulação de Incidentes",
            },
            {
              id: 38,
              titulo: "Introdução ao React",
              cargaHoraria: "10h",
              metodologia: "Projeto Prático",
            },
            {
              id: 39,
              titulo: "Gestão de Carreira e Empregabilidade",
              cargaHoraria: "6h",
              metodologia: "Mentoria Online",
            },
            {
              id: 40,
              titulo: "Introdução à Análise de Dados",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Dados",
            },
            {
              id: 41,
              titulo: "Produção de Vídeos para Internet",
              cargaHoraria: "8h",
              metodologia: "Oficina Prática",
            },
            {
              id: 42,
              titulo: "Introdução ao SCRUM",
              cargaHoraria: "8h",
              metodologia: "Simulação de Sprints",
            },
            {
              id: 43,
              titulo: "Gestão de Documentos Digitais",
              cargaHoraria: "6h",
              metodologia: "Laboratório Prático",
            },
            {
              id: 44,
              titulo: "Introdução à Programação Mobile",
              cargaHoraria: "10h",
              metodologia: "Projeto de App",
            },
            {
              id: 45,
              titulo: "Comunicação Visual e Branding",
              cargaHoraria: "8h",
              metodologia: "Workshop Criativo",
            },
            {
              id: 46,
              titulo: "Introdução ao Power BI",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Dashboards",
            },
            {
              id: 47,
              titulo: "Gestão de E-commerce",
              cargaHoraria: "8h",
              metodologia: "Estudo de Casos",
            },
            {
              id: 48,
              titulo: "Introdução ao Linux",
              cargaHoraria: "10h",
              metodologia: "Laboratório de Comandos",
            },
            {
              id: 49,
              titulo: "Educação Midiática",
              cargaHoraria: "6h",
              metodologia: "Oficina de Análise",
            },
            {
              id: 50,
              titulo: "Introdução à Automação Residencial",
              cargaHoraria: "8h",
              metodologia: "Projeto Maker",
            },
          ],
        },
        extensao: {
          corHead: "#6959EA",
          corBotao: "#A2DD28",
          cursos: [
            {
              id: 1,
              titulo: "Cidadania Digital e Segurança",
              cargaHoraria: "10h",
              metodologia: "Role-Play Educativo",
            },
            {
              id: 2,
              titulo: "Educação Financeira para Comunidades",
              cargaHoraria: "8h",
              metodologia: "Banco Simulado",
            },
            {
              id: 3,
              titulo: "Saúde Mental e Bem-Estar",
              cargaHoraria: "12h",
              metodologia: "Dinâmica em Grupo",
            },
            {
              id: 4,
              titulo: "Inclusão e Diversidade na Tecnologia",
              cargaHoraria: "12h",
              metodologia: "Oficina de Sensibilização",
            },
            {
              id: 5,
              titulo: "Comunicação Científica Avançada",
              cargaHoraria: "12h",
              metodologia: "Oficina de Abstract",
            },
            {
              id: 6,
              titulo: "Produção Audiovisual Comunitária",
              cargaHoraria: "12h",
              metodologia: "Filmagem Colaborativa",
            },
          ],
        },
      },

      titles: {
        mooc: "abertaMOOC - Cursos Gratuitos",
        micro: "abertaMICRO - Microaprendizagem",
        eventos: "abertaEVENTOS - Eventos Online",
        extensao: "abertaEXT - Ações de Extensão",
        meusCursos: "Meus Cursos",
      },
      title: "Cursos",
    };
  },
  computed: {},
  mounted() {
    this.cursoId = this.$route.params.cursoId;
    if (!this.cursoId) {
      console.log("nao achei");
      this.$router.push({ name: "Home" });
    } else {
      this.cursoData = this.dados[this.cursoId] ?? null;
      this.title = this.titles[this.cursoId] || "Cursos";
    }
  },
  methods: {
    gotoHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
/* Estilos Gerais */
#app-container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;
  padding: 2rem 4rem;
}

/* Cabeçalho */
.main-header {
  width: 100%;
  margin-bottom: 2.5rem;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.back-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1rem;
}

.back-link svg {
  margin-right: 8px;
}

.font-controls {
  display: flex;
  gap: 1rem;
}

.font-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  font-size: 0.875rem;
}

.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.main-title {
  font-size: 2rem;
  font-weight: 300;
  color: #333;
  margin: 0;
}

.search-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.search-input {
  border: none;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  outline: none;
}

.search-button {
  background-color: #fff;
  border: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-left: 1px solid #ccc;
}

/* Grid de Cursos */
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

/* Card do Curso */
.course-card {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.card-header {
  height: 40px;
}

.card-body {
  background-color: #eaeaea; /* Cinza claro da imagem */
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.course-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: #333;
}

.course-info {
  font-size: 0.9rem;
  color: #555;
  margin: 0.25rem 0;
}

.course-info strong {
  font-weight: 600;
}

.details-button {
  background-color: #3498db; /* Azul da imagem */
  color: white;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.875rem;
  text-align: center;
  /* position: absolute; */
  width: min-content;
  white-space: nowrap;
  align-self: flex-end;
  bottom: 1.5rem;
  right: 1.5rem;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #2980b9;
}

/* Responsividade */
@media (max-width: 768px) {
  #app-container {
    padding: 1.5rem;
  }

  .header-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .course-grid {
    grid-template-columns: 1fr;
  }
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
</style>
