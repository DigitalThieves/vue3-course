/*
* src/router.js
*
* Based on -> https://github.com/gautemo/Vue-guard-routes-with-Firebase-Authentication
*/
import { createRouter, createWebHistory } from 'vue-router';   // map from 'vue-router' once Vite has it (this is only in one place, so no big deal)
import home from './pages/home.vue';
import aboutsalt from './pages/about-salt.vue';
import AltHeader from './components/AltHeader.vue';
import AppHeader from './components/AppHeader.vue';
import collection from '@/pages/collection.vue';
import products from '@/pages/products.vue';
import categories from '@/pages/categories.vue';
import cartpage from '@/pages/cart-page.vue';


const routes = [
  {
    path: '/',
    components: {
      default: home,
      header: AppHeader,
    },
    name: 'home'
  },
  {
    path: '/collection',
    components: {
      default: collection,
      header: AppHeader,
    },
    name: 'collection'
  },
  {
    path: '/',
    components: {
      default: home,
      header: AppHeader,
    },
    name: 'home'
  },
  {
    path: '/about',
    components: {
      default: aboutsalt,
      header: AltHeader,
    },
    name: 'about-salt'
  },
  {
    path: '/products/:slug',
    components: {
      default: products,
      header: AppHeader,
    },
    name: 'products'
  },
  {
    path: '/categories/:category',
    components: {
      default: categories,
      header: AppHeader,
    },
    name: 'categories'
  },
  {
    path: '/cart',
    components: {
      default: cartpage,
      header: AppHeader,
    },
    name: 'cartpage'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router