<template>
  <div id="app-container">
    <header class="main-header">
      <div class="header-top">
        <a href="#" class="back-link" @click="gotoHome()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Voltar</span>
        </a>
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
      <div v-for="curso in curso?.cursos" :key="curso.id" class="course-card">
        <div class="card-header"></div>
        <div class="card-body">
          <h2 class="course-title">{{ curso.titulo }}</h2>
          <p class="course-info">
            <strong>Carga Horária:</strong> {{ curso.cargaHoraria }}
          </p>
          <p class="course-info">
            <strong>Metodologia:</strong> {{ curso.metodologia }}
          </p>
          <a href="#" class="details-button">Ver mais</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Cursos",
  data() {
    return {
      curso: null,
      cursoId: null,
      // Dados dos cursos
      dados: {
        mooc: {
          corHead: "#00BCF4",
          corBotao: "#ED8038",
          cursos: [
            {
              id: 1,
              titulo: "Curso 1",
              cargaHoraria: "10h",
              metodologia: "Vídeos e textos",
            },
            {
              id: 2,
              titulo: "Curso 2",
              cargaHoraria: "8h",
              metodologia: "Interativo",
            },
            {
              id: 3,
              titulo: "Curso 3",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 4,
              titulo: "Curso 4",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 5,
              titulo: "Curso 5",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 6,
              titulo: "Curso 6",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
          ],
        },
        micro: {
          corHead: "#ED8038",
          corBotao: "#00BCF4",
          cursos: [
            {
              id: 1,
              titulo: "Curso 1",
              cargaHoraria: "10h",
              metodologia: "Vídeos e textos",
            },
            {
              id: 2,
              titulo: "Curso 2",
              cargaHoraria: "8h",
              metodologia: "Interativo",
            },
            {
              id: 3,
              titulo: "Curso 3",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 4,
              titulo: "Curso 4",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 5,
              titulo: "Curso 5",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 6,
              titulo: "Curso 6",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
          ],
        },
        eventos: {
          corHead: "#A2DD28",
          corBotao: "#6959EA",
          cursos: [
            {
              id: 1,
              titulo: "Curso 1",
              cargaHoraria: "10h",
              metodologia: "Vídeos e textos",
            },
            {
              id: 2,
              titulo: "Curso 2",
              cargaHoraria: "8h",
              metodologia: "Interativo",
            },
            {
              id: 3,
              titulo: "Curso 3",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 4,
              titulo: "Curso 4",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 5,
              titulo: "Curso 5",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 6,
              titulo: "Curso 6",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
          ],
        },
        extensao: {
          corHead: "#6959EA",
          corBotao: "#A2DD28",
          cursos: [
            {
              id: 1,
              titulo: "Curso 1",
              cargaHoraria: "10h",
              metodologia: "Vídeos e textos",
            },
            {
              id: 2,
              titulo: "Curso 2",
              cargaHoraria: "8h",
              metodologia: "Interativo",
            },
            {
              id: 3,
              titulo: "Curso 3",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 4,
              titulo: "Curso 4",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 5,
              titulo: "Curso 5",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
            {
              id: 6,
              titulo: "Curso 6",
              cargaHoraria: "12h",
              metodologia: "Gamificação",
            },
          ],
        },
      },
      titles: {
        mooc: "abertaMOOC - Cursos Gratuitos",
        micro: "abertaMICRO - Microaprendizagem",
        eventos: "abertaEVENTOS - Eventos Online",
        extensao: "abertaEXT - Ações de Extensão",
      },
      title: "Cursos",
    };
  },
  computed: {
    // cursoId() {
    //   return this.$route.params.cursoId;
    // },
    // cursos() {
    //   return this.dados[this.cursoId]?.cursos ?? null;
    // },
    // corHead() {
    //   return this.dados[this.cursoId]?.corHead ?? null;
    // },
    // corBotao() {
    //   return this.dados[this.cursoId]?.corBotao ?? null;
    // },
  },
  mounted() {
    this.cursoId = this.$route.params.cursoId;
    if (!this.cursoId) {
      console.log("nao achei");
      this.$router.push({ name: "Home" });
    } else {
      this.curso = this.dados[this.cursoId] ?? null;
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
  background-color: #e67e22; /* Laranja da imagem */
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
  position: absolute;
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
</style>
