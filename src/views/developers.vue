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
          nome: 'André Luis Morais Brito',
          foto: 'https://media.licdn.com/dms/image/v2/D5603AQEy7B7_0qhoqQ/profile-displayphoto-shrink_200_200/B56ZNrfqgUG4AY-/0/1732675283608?e=1756339200&v=beta&t=cMXQ1b7jFPvpT5LWtZT067yETa40e582kwoAzJYekyE',
          curriculo: 'Estudante de Análise e Desenvolvimento de Sistemas na UFPR, com interesse em tecnologia, programação e soluções inovadoras, sempre buscando novos aprendizados e desafios na área de TI.',
          linkedin: 'https://www.linkedin.com/in/andre-brito-jpg/',
          ultimaAtualizacao: '21/06/2025'
        },
        {
          nome: 'Pedro Felipe Ribeiro',
          foto: 'https://media.licdn.com/dms/image/v2/C4D03AQEv_u8kiM2qNA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1641684155617?e=1756339200&v=beta&t=-sasqPWG4bZEDIq_Q3vRX1un4-johFlXXdAS4Bt-9aE',
          curriculo: 'Estudante de Análise e Desenvolvimento de Sistemas na UFPR, trainee em análise de dados na Bosch e em busca de novas oportunidades de crescimento na área.',
          linkedin: 'http://linkedin.com/in/pedro-felipe-ribeiro-da-silva-485a8022a/',
          ultimaAtualizacao: '21/06/2025'
        },
        {
          nome: 'Rodolfo C. dos Santos',
          foto: 'https://media.licdn.com/dms/image/v2/D4D03AQEvHUWbyWdrqA/profile-displayphoto-shrink_400_400/B4DZaQ8YVsGsAg-/0/1746188470562?e=1755734400&v=beta&t=YZY1mdTQFIcFKaIaN46Isrcii5udqPgtIqze5V8-TLk',
          curriculo: 'Fullstack Developer com experiência em Vue, Angular e desenvolvimento Python.',
          linkedin: 'www.linkedin.com/in/rodolfocsnts',
          ultimaAtualizacao: '21/06/2025'
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
