<template>
  <Sidebar v-model="showLogin" title="Login">
    <template>
      <div>
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </template>
  </Sidebar>

  <Sidebar v-model="showCadastro" title="Cadastro">
    <div class="p-4">
      <form @submit.prevent="handleCadastro" class="space-y-4">
        <div class="mb-4 d-flex flex-row gap-4 align-items-center">
          <label for="nome" class="block font-medium text-nowrap"
            >Nome Completo:</label
          >
          <input
            type="text"
            id="nome"
            v-model="form.nome"
            required
            class="w-100 border rounded p-2"
            placeholder="Digite seu nome completo"
          />
        </div>
        <div class="mb-4 d-flex flex-row gap-4 align-items-center">
          <label for="email" class="block font-medium text-nowrap"
            >Email:</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="w-100 border rounded p-2"
            placeholder="exemplo@dominio.com"
          />
        </div>
        <div class="mb-4 d-flex flex-row gap-4 align-items-center">
          <label for="password" class="block font-medium text-nowrap"
            >Senha:</label
          >
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            minlength="6"
            class="w-100 border rounded p-2"
            placeholder="Mínimo 6 caracteres"
          />
        </div>
        <div class="mb-4 d-flex flex-row gap-4 align-items-center">
          <label for="confirmPassword" class="block font-medium text-nowrap"
            >Confirmar Senha:</label
          >
          <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
            required
            :class="{ 'border-red-500': passwordsMismatch }"
            class="w-100 border rounded p-2"
            placeholder="Repita a senha"
          />
          <p v-if="passwordsMismatch" class="text-red-500 text-sm">
            As senhas não conferem.
          </p>
        </div>
        <div class="mb-4 d-flex flex-row gap-4 align-items-center">
          <label for="telefone" class="block font-medium text-nowrap"
            >Telefone:</label
          >
          <input
            type="tel"
            id="telefone"
            v-model="form.telefone"
            pattern="\d{10,11}"
            class="w-100 border rounded p-2"
            placeholder="(xx) xxxxx-xxxx"
          />
        </div>
        <div class="mb-4 d-flex flex-row gap-4 align-items-center">
          <label for="dataNascimento" class="block font-medium text-nowrap"
            >Data de Nascimento:</label
          >
          <input
            type="date"
            id="dataNascimento"
            v-model="form.dataNascimento"
            class="w-100 border rounded p-2"
          />
        </div>
        <div class="mb-4 d-flex flex-row gap-4 align-items-center">
          <label for="genero" class="block font-medium text-nowrap"
            >Gênero:</label
          >
          <select
            id="genero"
            v-model="form.genero"
            class="w-100 border rounded p-2"
          >
            <option value="">Selecione...</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div class="flex items-center">
          <input
            type="checkbox"
            id="termos"
            v-model="form.termos"
            class="mr-2"
          />
          <label for="termos" class="text-sm">
            Concordo com os
            <a href="#" class="text-blue-600 underline">termos de uso</a>.
          </label>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          :disabled="!form.termos || passwordsMismatch"
        >
          Cadastrar
        </button>
      </form>
    </div>
  </Sidebar>

  <Sidebar v-model="showMensagens" title="Mensagens">
    <div class="mensagens-container">

      <div class="mensagens-list">
        <div
          v-for="conversa in conversas"
          :key="conversa.id"
          class="conversa-item"
        >
          <div class="avatar-placeholder">
            <svg viewBox="0 0 24 24" fill="currentColor" class="icon-user">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </div>
          <div class="conversa-content">
            <div class="conversa-titulo">{{ conversa.titulo }}</div>
            <div class="conversa-preview">{{ conversa.preview }}</div>
          </div>
        </div>
      </div>

      <div class="nova-conversa-button-wrapper">
        <button class="nova-conversa-button">
          <svg viewBox="0 0 24 24" fill="currentColor" class="icon-plus">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          Nova conversa
        </button>
      </div>
    </div>
  </Sidebar>

  <Sidebar v-model="showNotifications" title="Notificações">
    <div class="notificacoes-container">

      <div class="notificacoes-list">
        <div
          v-for="notificacao in notificacoes"
          :key="notificacao.id"
          class="notificacao-item"
        >
          <div class="icon-placeholder">
            <svg viewBox="0 0 24 24" fill="currentColor" class="icon-bell">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
          </div>
          <div class="notificacao-content">
            <div class="notificacao-titulo">{{ notificacao.titulo }}</div>
            <div class="notificacao-descricao">{{ notificacao.descricao }}</div>
            <div class="notificacao-data">{{ notificacao.data }}</div>
          </div>
        </div>
      </div>
    </div>
  </Sidebar>

  <div class="">
    <div
      class="header d-flex flex-row justify-content-between align-items-center p-4"
    >
      <!-- style="width: 1800px" -->
      <img :src="ufprVirtualLogo" height="60px" />
      <div v-if="!loged" class="d-flex flex-row align-items-center gap-5">
        <img
          :src="cadastrese"
          alt="Cadastre-se"
          class="menu-icon"
          height="50px"
          @click="goToCadastrese"
        />
        <img
          :src="fazerlogin"
          alt="Fazer login"
          class="menu-icon"
          height="50px"
          @click="goToFazerLogin"
        />
      </div>
      <div v-if="loged" class="d-flex flex-row align-items-center gap-5">
        <img
          :src="meuscursos"
          alt="cursos"
          class="menu-icon"
          height="50px"
          @click="goToPage('meusCursos')"
        />
        <img
          :src="notificacoesbtn"
          alt="notificações"
          class="menu-icon"
          height="50px"
          @click="showNotifications = true"
        />
        <img
          :src="batepapo"
          alt="bate-papo"
          class="menu-icon"
          height="50px"
          @click="showMensagens = true"
        />
        <img
          :src="user"
          alt="usuário"
          class="menu-icon"
          height="50px"
          @click="gotoconfig"
        />
      </div>
    </div>

    <div
      class="d-flex flex-row justify-content-center align-items-center mt-4 mb-4 w-100"
      style="background-color: #d9d9d9; gap: 50px"
    >
      <div>
        <h2 class="content-para text-h5 mb-4">
          Conteúdos para <span>você</span>
        </h2>
        <div class="menus d-flex flex-column gap-5">
          <div class="d-flex flex-row" style="gap: 50px">
            <img
              :src="moocIcon"
              alt="MOOC"
              class="menu-icon"
              height="100px"
              @click="goToPage('mooc')"
            />
            <img
              :src="microsIcon"
              alt="micro"
              class="menu-icon"
              height="100px"
              @click="goToPage('micro')"
            />
          </div>
          <div class="d-flex flex-row" style="gap: 50px">
            <img
              :src="eventosIcon"
              alt="Eventos"
              class="menu-icon"
              height="100px"
              @click="goToPage('eventos')"
            />
            <img
              :src="extIcon"
              alt="Extensão"
              class="menu-icon"
              height="100px"
              @click="goToPage('extensao')"
            />
          </div>
        </div>
      </div>

      <img :src="muie" alt="muie" class="" height="350px" />
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

<script>
import ufprVirtualLogo from "../assets/ufprvirtual.png";
import moocIcon from "../assets/menus/mooc.svg";
import microsIcon from "../assets/menus/micros.svg";
import eventosIcon from "../assets/menus/eventos.svg";
import muie from "../assets/Screenshot from 2025-06-19 21-04-29.png";
import extIcon from "../assets/menus/ext.svg";
import suporteIcon from "../assets/menus2/suporte.svg";
import virtualIcon from "../assets/menus2/virtual.svg";
import oficialIcon from "../assets/menus2/oficial.svg";
import sobreIcon from "../assets/menus2/sobre.svg";
import cadastrese from "../assets/menus/cadastrese.svg";
import meuscursos from "../assets/menus/meuscursos.svg";
import notificacoesbtn from "../assets/menus/notificacoes.svg";
import batepapo from "../assets/menus/batebapo.svg";
import user from "../assets/menus/user.svg";
import fazerlogin from "../assets/menus/fazerlogin.svg";
import Sidebar from "./Sidebar.vue";

export default {
  name: "HomePage",
  components: {
    Sidebar,
  },
  data() {
    return {
      notificacoesbtn,
      batepapo,
      user,
      showLogin: false,
      showCadastro: false,
      showMensagens: false,
      showNotifications: false,
      loged: true,
      conversas: [
        {
          id: 1,
          titulo: "Conversa 1",
          preview: "Lorem ipsum dolor sit amet, consecte...",
        },
        {
          id: 2,
          titulo: "Conversa 2",
          preview: "Lorem ipsum dolor sit amet, consecte...",
        },
        {
          id: 3,
          titulo: "Conversa 3",
          preview: "Lorem ipsum dolor sit amet, consecte...",
        },
        {
          id: 4,
          titulo: "Conversa 4",
          preview: "Lorem ipsum dolor sit amet, consecte...",
        },
      ],
      notificacoes: [
        {
          id: 1,
          titulo: "Nova Mensagem",
          descricao: "Você recebeu uma nova mensagem de João.",
          data: "Há 5 minutos",
        },
        {
          id: 2,
          titulo: "Atualização do Sistema",
          descricao: "Seu perfil foi atualizado com sucesso.",
          data: "Há 1 hora",
        },
        {
          id: 3,
          titulo: "Lembrete de Evento",
          descricao: "Reunião de equipe agendada para amanhã às 10h.",
          data: "Ontem",
        },
        {
          id: 4,
          titulo: "Promoção Exclusiva",
          descricao: "Confira nossas novas ofertas especiais!",
          data: "18 de Junho",
        },
      ],

      email: "",
      password: "",
      ufprVirtualLogo,
      moocIcon,
      microsIcon,
      eventosIcon,
      muie,
      extIcon,
      suporteIcon,
      virtualIcon,
      oficialIcon,
      sobreIcon,
      cadastrese,
      meuscursos,
      fazerlogin,
      form: {
        nome: "",
        email: "",
        password: "",
        confirmPassword: "",
        telefone: "",
        dataNascimento: "",
        genero: "",
        termos: false,
      },
    };
  },
  computed: {
    passwordsMismatch() {
      return (
        this.form.password && this.form.password !== this.form.confirmPassword
      );
    },
  },

  methods: {
    increaseFont() {
      document.body.style.fontSize = "larger";
    },
    decreaseFont() {
      document.body.style.fontSize = "smaller";
    },
    goToPage(cursoId) {
      this.$router.push({ name: "Curso", params: { cursoId } });
    },
    goToFazerLogin() {
      this.showLogin = true;
    },
    goToCadastrese() {
      this.showCadastro = true;
    },
    handleLogin() {
      // Aqui você pode adicionar a lógica de autenticação
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      // Fechar o modal após o login
      this.showLogin = false;
    },
    handleCadastro() {
      if (this.passwordsMismatch) return;
      // this.$emit('submit', { ...this.form })
      this.resetForm();
      this.showCadastro = false;
      console.log("Cadastro realizado com sucesso:", this.form);
    },
    resetForm() {
      this.form = {
        nome: "",
        email: "",
        password: "",
        confirmPassword: "",
        telefone: "",
        dataNascimento: "",
        genero: "",
        termos: false,
      };
    },
  },
};
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
.notificacoes-container {
  font-family: Arial, sans-serif;
  /* background-color: #f0f0f0; Um cinza claro para o fundo */
  padding: 20px;
  /* max-width: 400px; */
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.notificacoes-title {
  font-size: 2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 25px;
  position: relative;
}

.notificacoes-title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  width: 10px;
  height: 2px;
  background-color: #000;
  border-radius: 1px;
}

.notificacoes-list {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.notificacao-item {
  display: flex;
  align-items: flex-start; /* Alinhar ao topo para o texto */
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.notificacao-item:last-child {
  border-bottom: none;
}

.icon-placeholder {
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  flex-shrink: 0;
}

.icon-bell {
  width: 30px;
  height: 30px;
  color: #888;
}

.notificacao-content {
  flex-grow: 1;
}

.notificacao-titulo {
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  margin-bottom: 3px;
}

.notificacao-descricao {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 5px;
}

.notificacao-data {
  font-size: 0.8em;
  color: #999;
}

/* Estilos para um possível botão de ação (descomentar se usar) */
/* .acao-button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.acao-button {
  background-color: #6c757d; // Cinza para ação secundária
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 12px 25px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.acao-button:hover {
  background-color: #5a6268;
} */
.mensagens-container {
  font-family: Arial, sans-serif;
  /* background-color: #f0f0f0; Um cinza claro para o fundo */
  padding: 20px;
  /* max-width: 400px; */
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; /* Garante que padding não adicione largura */
}

.mensagens-title {
  font-size: 2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 25px;
  position: relative; /* Para a linha decorativa */
}

.mensagens-title::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -20px; /* Ajuste para a esquerda */
  transform: translateY(-50%);
  width: 10px; /* Largura da linha */
  height: 2px; /* Espessura da linha */
  background-color: #000; /* Cor da linha */
  border-radius: 1px;
}

.mensagens-list {
  /* background-color: #fff; */
  border-radius: 8px;
  overflow: hidden; /* Para as bordas dos itens internos */
}

.conversa-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.conversa-item:last-child {
  border-bottom: none; /* Remove a borda do último item */
}

.avatar-placeholder {
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  flex-shrink: 0; /* Não permite que encolha */
}

.icon-user {
  width: 30px;
  height: 30px;
  color: #888;
}

.conversa-content {
  flex-grow: 1;
}

.conversa-titulo {
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  margin-bottom: 3px;
}

.conversa-preview {
  font-size: 0.9em;
  color: #777;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Adiciona "..." se o texto for muito longo */
}

.nova-conversa-button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.nova-conversa-button {
  display: flex;
  align-items: center;
  background-color: #007bff; /* Azul vibrante */
  color: #fff;
  border: none;
  border-radius: 25px; /* Botão arredondado */
  padding: 12px 25px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  transition: background-color 0.3s ease;
}

.nova-conversa-button:hover {
  background-color: #0056b3; /* Azul mais escuro no hover */
}

.icon-plus {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: #fff;
}
</style>
