import { createRouter, createWebHistory } from 'vue-router'
import homepage from '@/pages/home-page.vue'
import products from '@/pages/products.vue'


const routes = [{
    path: '/',
    component: homepage,
  }, {
    path: '/products/:slug',
    component: products  
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router