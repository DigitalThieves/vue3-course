/*
* src/router.js
*
* Based on -> https://github.com/gautemo/Vue-guard-routes-with-Firebase-Authentication
*/
import { createRouter, createWebHistory } from 'vue-router';   // map from 'vue-router' once Vite has it (this is only in one place, so no big deal)
import home from './pages/home.vue';
import collection from './pages/collection.vue';
import products from './pages/products.vue';
import categories from './pages/categories.vue';
import cartpage from './pages/cart-page.vue';


const routes = [
  {
    path: '/',
    component: home,
    name: 'home'
  },
  {
    path: '/collection',
    component: collection,
    name: 'collection'
  },
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
    path: '/categories/:category',
    component: categories,
    name: 'categories'
  },
  {
    path: '/cart',
    component: cartpage,
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