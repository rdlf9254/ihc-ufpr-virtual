import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import curso from '../views/curso.vue'
import Configuracoes from '../views/Configuracoes.vue'
import Developers from '../views/developers.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/config',
    name: 'Config',
    component: Configuracoes
  },
  {
    path: '/desenvolvedores',
    name: 'Desenvolvedores',
    component: Developers
  },
  {
    path: '/curso/:cursoId',
    name: 'Curso',
    component: curso,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
