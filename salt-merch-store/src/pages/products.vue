<template lang="pug">
.py-5(v-if='isLoading')
  h1(data-testid='loading') Loading...
  p Product: {{ $route.params.slug }}
.py-5(v-else-if='error')
  h1(data-testid='error')
    | error: {{ error }}
.container(v-else-if="!isLoading && !error")
  .row.text-left
    .col-12
      p.text-uppercase.fs-12.fw-semibold
        router-link.text-decoration-none.text-dark(to="/") SALT MERCH
        | /
        router-link.text-decoration-none.text-dark(:to="'/categories/' + product.category") {{ ' ' + product.category }}
        | /
        router-link.text-decoration-none.text-dark(:to="'/products/' + product.slug") {{ ' ' + product.title }}
    .col-12.col-md-6.col-lg-4
      transition-group(name='fade', mode='out-in', tag='div')
        img.selected-product-img(v-for='image, i in [currentImage]', :key='"image-"+i', :src='image')
      br
      br
      product-selectables(
        v-model:active-index="imgIndex"
        :selectables="currentImages"
        selectables-type="images"
      )
    .col-12.col-md-6.col-lg-8
      h1(data-testid='title')
        | {{ product.title }}
      p {{ currentColor.color_name }} /
        span(v-if='sizeIndex !== null && currentSize !== null && currentSize.stock')  Stock: {{ currentSize.stock }} 
        span(v-else-if='sizeIndex !== null')  Out of stock 
        span(v-else='')  No size chosen 
      hr.my-3
      product-selectables(v-model:active-index='colorIndex', :selectables='product.colors', selectables-type='colors')
      br
      br
      product-selectables(v-model:active-index='sizeIndex', :selectables='currentColor.sizes', selectables-type='sizes')
      br
      br
      button.px-5.py-3(:disabled='sizeIndex == null', @click='addItem')
        | Add {{ product.title }} To Cart
      hr.my-3
      div(data-testid='description', v-html='product.description')
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
      return this.currentImages[this.imgIndex]
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
