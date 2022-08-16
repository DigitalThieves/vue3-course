/*
* src/router.js
*
* Based on -> https://github.com/gautemo/Vue-guard-routes-with-Firebase-Authentication
*/
import { createRouter, createWebHistory } from 'vue-router';   // map from 'vue-router' once Vite has it (this is only in one place, so no big deal)
import home from './pages/home.vue';
import products from './pages/products.vue';
import categories from './pages/categories.vue';


const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
  },
  {
    path: '/products/:slug',
    component: products,
    name: 'products'
  },
  {
    path: '/categories/:slug',
    component: categories,
    name: 'categories'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach(async (to, from, next) => {
// });

export default router