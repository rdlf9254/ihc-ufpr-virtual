<template>
  <div class="dev-container">
    <h1>Nosso Time de Desenvolvedores</h1>
    <div v-for="dev in desenvolvedores" :key="dev.nome" class="dev-card">
      <img :src="dev.foto" :alt="`Foto de ${dev.nome}`" class="dev-foto" />
      <h2>{{ dev.nome }}</h2>
      <p>{{ dev.curriculo }}</p>
      <a :href="dev.linkedin" target="_blank">LinkedIn</a>
      <p class="atualizacao">Última atualização: {{ dev.ultimaAtualizacao }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Desenvolvedores',
  data() {
    return {
      desenvolvedores: [
        {
          nome: 'Ana Silva',
          foto: 'https://randomuser.me/api/portraits/women/44.jpg',
          curriculo: 'Desenvolvedora Frontend com foco em Vue.js e experiência em design de interfaces.',
          linkedin: 'https://www.linkedin.com/in/ana-silva/',
          ultimaAtualizacao: '20/06/2025'
        },
        {
          nome: 'Bruno Souza',
          foto: 'https://randomuser.me/api/portraits/men/46.jpg',
          curriculo: 'Backend Developer especializado em Node.js, APIs REST e bancos de dados SQL.',
          linkedin: 'https://www.linkedin.com/in/bruno-souza/',
          ultimaAtualizacao: '19/06/2025'
        },
        {
          nome: 'Carla Mendes',
          foto: 'https://randomuser.me/api/portraits/women/48.jpg',
          curriculo: 'Fullstack Developer com experiência em Vue, Node e desenvolvimento de apps escaláveis.',
          linkedin: 'https://www.linkedin.com/in/carla-mendes/',
          ultimaAtualizacao: '18/06/2025'
        }
      ]
    };
  }
};
</script>

<style scoped>
.dev-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.dev-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
}

.dev-foto {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

a {
  color: #0077b5;
  text-decoration: none;
  font-weight: bold;
}

.atualizacao {
  font-size: 0.9em;
  color: #666;
  margin-top: 10px;
}
</style>
