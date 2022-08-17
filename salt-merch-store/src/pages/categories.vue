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
            {{ category.category }}
          </router-link>
        </p>
      </div>
      <div class="col-12 px-5">
        <h2>
          {{ category.title }}
        </h2>
        <p> {{ category.description }} </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <hr class="my-4">
      </div>
      <router-link
        v-for="product in category.products"
        :key="product.slug"
        :to="'/products/' + product.slug"
        class="col-3 text-decoration-none"
      >
        <img
          class="img-fluid mb-3"
          :src="require('@/assets/' + product.colors[0].images[0])"
        >
        <p class="text-left text-dark">
          {{ product.title }} /
          <br>
          {{ product.colors[0].color_name }}
        </p>
      </router-link>
    </div>
  </div>
  <div
    v-else
    class="container"
  >
    <h1>
      Loading...
    </h1>
    <p>
      Category: {{ $route.params.category }}
    </p>
  </div>
</template>

<script>
// import HomePage from '../components/HomePage.vue'
import client from '../api-client'

export default {
  name: 'App',
  components: {
    // HomePage
  },
  async beforeRouteUpdate(to, _, next) {
    this.category = null
    this.category = await client.getProductsByCategory(to.params.category)
    next()
  },
  data () {
    return {
      category: null
    }
  },
  async mounted () {
    this.category = await client.getProductsByCategory(this.$route.params.category)
  },
}
</script>

<style>
.object-fit {
  object-fit: cover;
  object-position: center;
}

.h-520 {
  height: 520px;
}
</style>
