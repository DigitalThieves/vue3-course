import { createStore } from 'vuex'
import cartStore from './cart'
import categoriesStore from './categories'

const store = createStore({
  modules: {
    cart: cartStore,
    categories: categoriesStore,
  }
})

export default store
