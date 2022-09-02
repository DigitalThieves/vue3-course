<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div
    v-if="isLoading"
    class="py-5"
  >
    <h1>
      Loading...
    </h1>
    <p>
      Product: {{ $route.params.slug }}
    </p>
  </div>
  <div
    v-else-if="error"
    class="py-5"
  >
    <h1>
      {{ error }}
    </h1>
  </div>
  <div
    v-else
    class="container"
  >
    <div class="row text-left">
      <div class="col-12">
        <p class="text-uppercase fs-12 fw-semibold">
          <router-link
            class="text-decoration-none text-dark"
            to="/"
          >
            SALT MERCH
          </router-link> /
          <router-link
            class="text-decoration-none text-dark"
            :to="'/categories/' + product.category"
          >
            {{ product.category }}
          </router-link> /
          <router-link
            class="text-decoration-none text-dark"
            :to="'/products/' + product.slug"
          >
            {{ product.title }}
          </router-link>
        </p>
      </div>
      <div class="col-4">
        <transition-group
          name="fade"
          mode="out-in"
          tag="div"
        >
          <img
            v-for="image in [currentImage]"
            :key="image"
            :src="image"
            class="selected-product-img"
          >
        </transition-group>
        <br>
        <br>
        <product-selectables
          v-model:index="imgIndex"
          :list="currentImages"
          type="images"
        />
      </div>
      <div class="col-8">
        <h1>
          {{ product.title }}
        </h1>
        <p>
          {{ currentColor.color_name }} /
          <span v-if="sizeIndex !== null && currentSize !== null && currentSize.stock"> Stock: {{ currentSize.stock }} </span>
          <span v-else-if="sizeIndex !== null"> Out of stock </span>
          <span v-else> No size chosen </span>
        </p>
        <hr class="my-3">
        <product-selectables
          v-model:index="colorIndex"
          :list="product.colors"
          type="colors"
        />
        <br>
        <br>
        <product-selectables
          v-model:index="sizeIndex"
          :list="currentColor.sizes"
          type="sizes"
        />
        <br>
        <br>
        <button
          class="px-5 py-3"
          :disabled="sizeIndex == null"
          @click="addItem"
        >
          Add {{ product.title }} To Cart
        </button>
        <hr class="my-3">
        <div v-html="product.description" />
      </div>
    </div>
  </div>
</template>

<script>
import client from '@/services/api-client'
import ProductSelectables from '@/components/ProductSelectables.vue'
export default {
  name: 'App',
  components: {
    ProductSelectables
  },
  async beforeRouteUpdate(to, _, next) {
    this.products = null
    this.product = await client.getProductBySlug(to.params.slug)
    next()
  },
  data () {
    return {
      product: null,
      colorIndex: 0,
      imgIndex: 0,
      sizeIndex: null,
      isLoading: true,
      error: null,
    }
  },
  computed: {
    currentColor () {
      return this.product.colors[ this.colorIndex ]
    },
    currentImages () {
      return this.currentColor.images
    },
    currentImage () {
      return require(`@/assets/${this.currentImages[this.imgIndex]}`)
    },
    currentSize () {
      return this.currentColor.sizes[this.sizeIndex]
    }
  },
  watch: {
    colorIndex () {
      this.imgIndex = 0
      this.sizeIndex = null
    }
  },
  async mounted () {
    try {
      this.product = await client.getProductBySlug(this.$route.params.slug)
    } catch (e) {
      this.error = e.message
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    addItem () {
      this.$store.dispatch('addItem', {
        ...this.product,
        colors: [
          {
            ...this.currentColor,
            sizes: [ this.currentSize ]
          }
        ]
      })
    },
  }
}
</script>
