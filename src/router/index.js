import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import curso from '../views/curso.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
