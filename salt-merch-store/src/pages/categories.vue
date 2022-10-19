<template>
  <div
    v-if="category"
    class="container"
  >
    <div class="row">
      <div class="col-12 text-left">
        <p class="text-uppercase fs-12 fw-semibold">
          <router-link
            class="text-decoration-none text-dark"
            to="/"
          >
            SALT MERCH
          </router-link> /
          <router-link
            class="text-decoration-none text-dark"
            :to="'/categories/' + category.category"
          >
            {{ '< CATEGORY SLUG >' }}
          </router-link>
        </p>
      </div>
      <div class="col-12 px-5">
        <h2>
          {{ '< Category Title Placeholder >' }}
        </h2>
        <p> {{ '< Category Description >' }} </p>
      </div>
    </div>
    <collection-view :collection="category.products" />
  </div>
  <div
    v-else
    class="container"
  >
    <h1>
      Loading...
    </h1>
    <p>
      Category: {{ '< Category Slug >' }}
    </p>
  </div>
</template>

<script>
import CollectionView from '@/components/CollectionView.vue'
// import productClient from '@/services/api-client'

export default {
  name: 'App',
  components: {
    CollectionView
  },
  async beforeRouteUpdate(to, _, next) {
    this.category = null
    next()
  },
  data () {
    return {
      category: null
    }
  },
  async mounted () {
    setTimeout(() => this.category = { products: [] }, 5000)
  },
}
</script>
