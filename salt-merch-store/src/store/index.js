import { createStore } from 'vuex'

const storageKey = 'salt-merch-cart'

// Create a new store instance.
const store = createStore({
  state () {
    const cart = JSON.parse(localStorage.getItem(storageKey) || '[]')
    return {
      cart
    }
  },
  mutations: {
    ADD_ITEM (state, newItem) {
      let prev_item = state.cart.filter(el => el.slug == newItem.slug && el.colors[0].color_name == newItem.colors[0].color_name && el.colors[0].sizes[0].size == newItem.colors[0].sizes[0].size )[0]
      if (!prev_item)
        prev_item = { ...newItem, quantity: 1 }
      else
        prev_item.quantity++
      state.cart = [ ...state.cart.filter(el => el.slug != newItem.slug || el.colors[0].color_name != newItem.colors[0].color_name || el.colors[0].sizes[0].size != newItem.colors[0].sizes[0].size), prev_item ]
      localStorage.setItem(storageKey, JSON.stringify(state.cart))
    }
  },
  actions: {
    addItem ({ commit }, newItem) {
      commit('ADD_ITEM', newItem)
    }
  },
  modules: {},
})

export default store
