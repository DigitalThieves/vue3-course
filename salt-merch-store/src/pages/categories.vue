<template>
  <div
    v-if="category"
    class="container"
  >
    <div class="row">
      <div class="col-12 text-left">
        <p class="text-uppercase fs-12 fw-semibold">
          <a
            class="text-decoration-none text-dark"
            href="/"
          >
            SALT MERCH
          </a> /
          <a
            class="text-decoration-none text-dark"
            href="/categories/<category-slug>"
          >
            {{ '< CATEGORY SLUG >' }}
          </a>
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
      Category: {{ '< Route Parameter Value >' }}
    </p>
  </div>
</template>

<script>
import CollectionView from '@/components/CollectionView.vue'
// import productClient from '@/api-client'

export default {
  name: 'App',
  components: {
    CollectionView
  },
  async beforeRouteUpdate(to, _, next) {
    this.category = null
    setTimeout(() => this.category = { products: [] }, 5000)
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
