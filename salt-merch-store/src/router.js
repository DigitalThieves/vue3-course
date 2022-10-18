import { createRouter, createWebHistory } from 'vue-router'
import homepage from '@/pages/home-page.vue'


const routes = [{
  path: '/',
  component: homepage,
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router