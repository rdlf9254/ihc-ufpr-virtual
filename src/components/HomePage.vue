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
          <label for="nome" class="block font-medium text-nowrap">Nome Completo:</label>
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
          <label for="email" class="block font-medium text-nowrap">Email:</label>
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
          <label for="password" class="block font-medium text-nowrap">Senha:</label>
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
          <label for="confirmPassword" class="block font-medium text-nowrap">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
            required
            :class="{'border-red-500': passwordsMismatch}"
            class="w-100 border rounded p-2"
            placeholder="Repita a senha"
          />
          <p v-if="passwordsMismatch" class="text-red-500 text-sm">As senhas não conferem.</p>
        </div>
        <div class="mb-4 d-flex flex-row gap-4 align-items-center">
          <label for="telefone" class="block font-medium text-nowrap">Telefone:</label>
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
          <label for="dataNascimento" class="block font-medium text-nowrap">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            v-model="form.dataNascimento"
            class="w-100 border rounded p-2"
          />
        </div>
        <div class="mb-4 d-flex flex-row gap-4 align-items-center">
          <label for="genero" class="block font-medium text-nowrap">Gênero:</label>
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
        </div class="mb-4 d-flex flex-row gap-4 align-items-center">
        <div class="flex items-center">
          <input
            type="checkbox"
            id="termos"
            v-model="form.termos"
            class="mr-2"
          />
          <label for="termos" class="text-sm">
            Concordo com os <a href="#" class="text-blue-600 underline">termos de uso</a>.
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


  <div class="">
    <div
      class="header d-flex flex-row justify-content-between align-items-center p-4"
      >
      <!-- style="width: 1800px" -->
      <img
        :src="ufprVirtualLogo"
        height="60px"
      ></img>
      <div class="d-flex flex-row align-items-center gap-5">
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
import fazerlogin from "../assets/menus/fazerlogin.svg";
import Sidebar from "./Sidebar.vue";

export default {
  name: "HomePage",
  components: {
    Sidebar,
  },
  data() {
    return {
      showLogin: false,
      showCadastro: false,
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
      fazerlogin,
            form: {
        nome: '',
        email: '',
        password: '',
        confirmPassword: '',
        telefone: '',
        dataNascimento: '',
        genero: '',
        termos: false
      }

    };
  },
    computed: {
    passwordsMismatch() {
      return (
        this.form.password &&
        this.form.password !== this.form.confirmPassword
      )
    }
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
      if (this.passwordsMismatch) return
      // this.$emit('submit', { ...this.form })
      this.resetForm()
      this.showCadastro = false;
      console.log("Cadastro realizado com sucesso:", this.form);
    },
    resetForm() {
      this.form = {
        nome: '',
        email: '',
        password: '',
        confirmPassword: '',
        telefone: '',
        dataNascimento: '',
        genero: '',
        termos: false
      }
    }
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
</style>
