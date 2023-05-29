// import { store } from '@/store';// path to store file

// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $store: store;
//   }
// }

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { Cart } from './store/cart'
import { CategoryState } from './store/categories'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    cart: Cart,
    categories: CategoryState
  }
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}