import { createRouter, createWebHistory } from 'vue-router'
import homepage from '@/pages/home-page.vue'
import products from '@/pages/products.vue'
import categories from '@/pages/categories.vue'
import collection from '@/pages/collection.vue'
import aboutSalt from '@/pages/about-salt.vue'
import AltHeader from '@/components/AltHeader.vue'
import SaltHeader from '@/components/SaltHeader.vue'


const routes = [{
    path: '/',
    components: {
      default: homepage,
      header: SaltHeader
    },
    name: 'home',
  }, {
    path: '/collection/',
    components: {
      default: collection,
      header: SaltHeader
    },
    name: 'collection',
  }, {
    path: '/categories/:slug',
    components: {
      default: categories,
      header: SaltHeader
    },
    name: 'categories',
  }, {
    path: '/products/:slug',
    components: {
      default: products,
      header: SaltHeader
    },
    name: 'products',
  }, {
    path: '/about',
    components: {
      default: aboutSalt,
      header: AltHeader
    },
    name: 'about',
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
