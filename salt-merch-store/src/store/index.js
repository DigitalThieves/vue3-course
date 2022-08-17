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
        state.cart.push({ ...newItem, quantity: 1 })
      else
        prev_item.quantity++

      state.cart.sort(
        (a, b) =>
          a.title.localeCompare(b.title) +
          a.colors[0].color_name.localeCompare( b.colors[0].color_name ) +
          a.colors[0].sizes[0].size.localeCompare( b.colors[0].sizes[0].size) )

      localStorage.setItem(storageKey, JSON.stringify(state.cart))
    },
    REMOVE_ITEM (state, newItem) {
      let prev_item = state.cart.filter(el => el.slug == newItem.slug && el.colors[0].color_name == newItem.colors[0].color_name && el.colors[0].sizes[0].size == newItem.colors[0].sizes[0].size )[0]
      if (!prev_item)
       return
      else
        prev_item.quantity--
      const rest = state.cart.filter(el => el.slug != newItem.slug || el.colors[0].color_name != newItem.colors[0].color_name || el.colors[0].sizes[0].size != newItem.colors[0].sizes[0].size)
      if (!prev_item.quantity)
        state.cart = [ ...rest ]
      // else
      //   state.cart = [ ...rest, prev_item ]
      localStorage.setItem(storageKey, JSON.stringify(state.cart))
    }
  },
  actions: {
    addItem ({ commit }, newItem) {
      commit('ADD_ITEM', newItem)
    },
    removeItem ({ commit }, newItem) {
      commit('REMOVE_ITEM', newItem)
    }
  },
  modules: {},
})

export default store
