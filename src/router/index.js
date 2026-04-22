import { createRouter, createWebHistory } from 'vue-router'
import PackagesView from '../views/PackagesView.vue'

const routes = [
  { path: '/packages', name: 'packages', component: PackagesView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
    