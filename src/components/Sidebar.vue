<template>
  <Transition name="fade">
    <div v-if="modelValue" @click="close" class="sidebar-overlay"></div>
  </Transition>
  <Transition name="slide-right">
    <aside v-if="modelValue" class="sidebar">
      <header class="sidebar-header">
        <slot name="header">
          <h2 class="sidebar-title">{{ title }}</h2>
        </slot>
        <button @click="close" class="close-btn" aria-label="Fechar sidebar">&times;</button>
      </header>
      <main class="sidebar-content">
        <slot></slot>
      </main>
      <footer v-if="$slots.footer" class="sidebar-footer">
        <slot name="footer"></slot>
      </footer>
    </aside>
  </Transition>
</template>

<script>
export default {
  name: 'side-bar',
  props: {
    // 'modelValue' é a prop usada pela diretiva v-model
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: 'Menu',
    },
  },
  // Declara os eventos que o componente emite
  emits: ['update:modelValue'],
  methods: {
    // Método para emitir o evento de fechamento
    close() {
      this.$emit('update:modelValue', false);
    },
    // Método para lidar com o pressionamento de tecla
    handleKeydown(e) {
      if (this.modelValue && e.key === 'Escape') {
        this.close();
      }
    },
  },
  // Hooks do ciclo de vida
  mounted() {
    // Adiciona o listener quando o componente é montado no DOM
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    // Remove o listener para evitar vazamentos de memória
    document.removeEventListener('keydown', this.handleKeydown);
  },
};
</script>

<style scoped>
/* Os estilos são exatamente os mesmos da versão anterior */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 800px;
  max-width: 90vw;
  background-color: #ffffff;
  box-shadow: -3px 0 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  z-index: 1000;
}
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}
.sidebar-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: #212121;
}
.close-btn {
  background: none;
  border: none;
  font-size: 2.5rem;
  font-weight: 200;
  line-height: 1;
  cursor: pointer;
  color: #757575;
  padding: 0;
}
.sidebar-content {
  flex-grow: 1;
  overflow-y: auto;
}
.sidebar-footer {
  padding: 1.5rem;
  border-top: 1px solid #e0e0e0;
  background-color: #f5f5f5;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.35s ease-in-out;
}
.slide-right-enter-from, .slide-right-leave-to {
  transform: translateX(100%);
}
</style>