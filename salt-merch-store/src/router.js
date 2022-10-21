import { createRouter, createWebHistory } from 'vue-router'
import homepage from '@/pages/home-page.vue'
import products from '@/pages/products.vue'
import categories from '@/pages/categories.vue'


const routes = [{
    path: '/',
    component: homepage,
    name: 'home',
  }, {
    path: '/categories/:slug',
    component: categories,
    name: 'categories',
  }, {
    path: '/products/:slug',
    component: products,
    name: 'products',
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router