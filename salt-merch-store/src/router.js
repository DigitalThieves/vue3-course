/*
* src/router.js
*
* Based on -> https://github.com/gautemo/Vue-guard-routes-with-Firebase-Authentication
*/
import { createRouter, createWebHistory } from 'vue-router';   // map from 'vue-router' once Vite has it (this is only in one place, so no big deal)
import products from './pages/products.vue';

const routes = [
  {
    path: '/',
    component: products,
    name: 'products'
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