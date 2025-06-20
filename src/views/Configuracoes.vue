<template>
  <div class="container py-4">
    <div class="d-flex align-items-center mb-6">
      <img
        :src="voltar"
        alt="Voltar"
        class="menu-icon"
        height="50px"
        @click="gotoHome()"
      />
    </div>

    <div class="row mt-6">
      <div class="col-md-4 text-center">
        <div
          class="profile-avatar-placeholder d-flex justify-content-center align-items-center mx-auto mb-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
            />
          </svg>
        </div>
        <h2 class="mb-3">João da Silva</h2>
        <button
          class="btn btn-info text-white btn-sm px-3 py-2 d-flex align-items-center justify-content-center mx-auto mb-4 custom-modify-button"
        >
          Modificar perfil
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil-square ms-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </button>
      </div>

      <div class="col-md-8">
        <div class="card mb-4 border-dark">
          <div class="card-body">
            <h5 class="card-title mb-3">Informações pessoais</h5>
            <div class="row mb-2">
              <div class="col-auto me-3"><strong>Email:</strong></div>
              <div class="col">joao123@gemail.com</div>
            </div>
            <div class="row mb-2">
              <div class="col-auto me-3"><strong>Cidade/País:</strong></div>
              <div class="col">Curitiba/Brasil</div>
            </div>
            <div class="row mb-2">
              <div class="col-auto me-3"><strong>Telefone:</strong></div>
              <div class="col">(41) 99999-9999</div>
            </div>
            <div class="row mb-2">
              <div class="col-auto me-3">
                <strong>Data de nascimento:</strong>
              </div>
              <div class="col">01/01/1990</div>
            </div>
            <div class="row mb-2">
              <div class="col-auto me-3"><strong>Instituição:</strong></div>
              <div class="col">Universidade Federal do Paraná</div>
            </div>
            <div class="row mb-3">
              <div class="col-auto me-3"><strong>Senha:</strong></div>
              <div class="col">••••••••••</div>
              <div class="col-auto ms-auto">
                <button class="btn btn-info btn-sm text-white">
                  Lembrar senha
                </button>
              </div>
            </div>
          </div>
        </div>

        <button class="btn btn-secondary px-4 py-2 mb-4 w-100 terms-button">
          Termos de Uso | Política de Privacidade
        </button>

        <div class="row g-3">
          <div class="col-md-6 col-lg-3">
            <button class="btn btn-warning w-100 py-3 button-orange">
              Cursos inscritos
            </button>
          </div>
          <div class="col-md-6 col-lg-3">
            <button class="btn btn-primary w-100 py-3 button-blue">
              Mensagens
            </button>
          </div>
          <div class="col-md-6 col-lg-3">
            <button class="btn btn-info w-100 py-3 button-cyan">
              Atividade de Login
            </button>
          </div>
          <div class="col-md-6 col-lg-3">
            <button class="btn btn-danger w-100 py-3 button-red">
              Deletar perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import voltar from "../assets/menus/voltar.svg";
export default {
  name: "Configuracoes",
  data() {
    return {
      voltar,
    };
  },
  methods: {
    gotoHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
.container {
  /* background-color: #f8f8f8; Fundo cinza claro */
  min-height: calc(100vh - 150px); /* Ocupar toda a altura da viewport */
}

.profile-avatar-placeholder {
  width: 150px;
  height: 150px;
  background-color: #e0e0e0;
  border-radius: 50%;
}

.profile-avatar-placeholder svg {
  color: #888;
}

.custom-modify-button {
  background-color: #17a2b8 !important; /* Cor do info do Bootstrap */
  border-color: #17a2b8 !important;
  font-weight: bold;
}

.custom-modify-button:hover {
  background-color: #138496 !important;
  border-color: #138496 !important;
}

/* Ajustes para o card de informações pessoais */
.card {
  border: 1px solid #dee2e6; /* Borda padrão do Bootstrap */
  border-radius: 0.25rem;
}

.card-title {
  font-weight: bold;
  font-size: 1.25rem;
  color: #333;
}

.card-body strong {
  color: #333;
}

.terms-button {
  background-color: #6c757d; /* Cinza do Bootstrap secondary */
  border-color: #6c757d;
  color: white;
  font-weight: bold;
  border-radius: 0.25rem; /* Menos arredondado para termos */
}

.terms-button:hover {
  background-color: #5a6268;
  border-color: #5a6268;
}

/* Cores personalizadas para os botões de navegação */
.button-orange {
  background-color: #fd7e14 !important; /* Bootstrap orange */
  border-color: #fd7e14 !important;
  color: white;
  font-weight: bold;
  height: 60px; /* Altura fixa para todos */
}
.button-orange:hover {
  background-color: #e66b0d !important;
  border-color: #e66b0d !important;
}

.button-blue {
  background-color: #007bff !important; /* Bootstrap primary */
  border-color: #007bff !important;
  color: white;
  font-weight: bold;
  height: 60px;
}
.button-blue:hover {
  background-color: #0069d9 !important;
  border-color: #0069d9 !important;
}

.button-cyan {
  background-color: #17a2b8 !important; /* Bootstrap info (same as modify profile) */
  border-color: #17a2b8 !important;
  color: white;
  font-weight: bold;
  height: 60px;
}
.button-cyan:hover {
  background-color: #138496 !important;
  border-color: #138496 !important;
}

.button-red {
  background-color: #dc3545 !important; /* Bootstrap danger */
  border-color: #dc3545 !important;
  color: white;
  font-weight: bold;
  height: 60px;
}
.button-red:hover {
  background-color: #c82333 !important;
  border-color: #c82333 !important;
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
