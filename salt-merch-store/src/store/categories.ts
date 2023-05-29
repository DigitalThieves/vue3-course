import { Commit } from 'vuex'

export type Category = {}
export type CategoryState = {
  categories: Category[]
}

// Create a new store instance.
const categoriesStore = {
  state: (): CategoryState => {
    return {
      categories: []
    }
  },
  mutations: {
    ADD_CATEGORIES (state: CategoryState, categories: Category[]) {
      state.categories = categories
      return state
    },
  },
  actions: {
    async getAllCategories ({ commit }: { commit: Commit } ) {
      const categories = await fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
      commit(
        'ADD_CATEGORIES',
        categories
      )
    },
  },
  modules: {},
}

export default categoriesStore
