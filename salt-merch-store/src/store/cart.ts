import { Commit } from 'vuex'

const storageKey = 'telenor-merch-cart'

export type Size = {
  size: string
}

export type Color = {
  color_name: string,
  sizes: Size[]
  images: string[]
}

export type CartItem = {
  slug: string,
  title: string,
  colors: Color[],
  quantity: number
}

export type Cart = {
  cart: CartItem[]
}

// Create a new store instance.
const cartStore = {
  state () : Cart {
    const cart = JSON.parse(localStorage.getItem(storageKey) || '[]') as CartItem[]
    return {
      cart
    }
  },
  mutations: {
    ADD_ITEM (state: Cart, newItem: CartItem) {
      const prev_item = state.cart.filter(
        el => el.slug == newItem.slug
          && el.colors[0].color_name == newItem.colors[0].color_name
          && el.colors[0].sizes[0].size == newItem.colors[0].sizes[0].size
      )[0]
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
    REMOVE_ITEM (state: Cart, newItem: CartItem) {
      const prev_item = state.cart.find(
        el => el.slug == newItem.slug
          && el.colors[0].color_name == newItem.colors[0].color_name
          && el.colors[0].sizes[0].size == newItem.colors[0].sizes[0].size
      )
      if (!prev_item)
       return
      else
        prev_item.quantity--
      const rest = state.cart.filter(el => el.slug != newItem.slug || el.colors[0].color_name != newItem.colors[0].color_name || el.colors[0].sizes[0].size != newItem.colors[0].sizes[0].size)
      if (!prev_item.quantity)
        state.cart = [ ...rest ]
      localStorage.setItem(storageKey, JSON.stringify(state.cart))
    }
  },
  actions: {
    addItem ({ commit }: { commit: Commit }, newItem: CartItem) {
      commit('ADD_ITEM', newItem)
    },
    removeItem ({ commit }: { commit: Commit }, newItem: CartItem) {
      commit('REMOVE_ITEM', newItem)
    }
  },
  modules: {},
}

export default cartStore
