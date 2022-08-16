<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div
    v-if="product"
    class="container"
  >
    <div class="row text-left">
      <div class="col-12">
        <p class="text-uppercase fs-12 fw-semibold">
          SALT MERCH / {{ product.category }} / {{ product.title }}
        </p>
      </div>
      <div class="col-4">
        <transitionGroup
          name="fade"
          tag="div"
        >
          <img
            v-for="image in [currentImage]"
            :key="image"
            :src="image"
            class="selected-product-img"
          >
        </transitionGroup>
        <br>
        <br>
        <img
          v-for="image, i in currentImages"
          :key="image"
          :src="require('@/assets/' + image)"
          class="selectable-product-imgs"
          @click="imgIndex = i"
        >
      </div>
      <div class="col-8">
        <h1>
          {{ product.title }}
        </h1>
        <p>
          {{ currentColor.color_name }} /
          <span v-if="currentSize.stock"> Stock: {{ currentSize.stock }} </span>
          <span v-else> Out of stock </span>
        </p>
        <hr class="my-3">
        <div
          v-for="color, i in product.colors"
          :key="color.color_name"
          class="selectable-product-colors border"
          :style="'background-color: ' + color.colorhex + ';'"
          @click="colorIndex = i"
        />
        <hr class="my-3">
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
  <div
    v-else
    class="py-5"
  >
    <h1>
      Loading...
    </h1>
    <p>
      Product: {{ $route.params.slug }}
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
  data () {
    return {
      product: null,
      colorIndex: 0,
      imgIndex: 0,
      sizeIndex: 0,
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
      return require('@/assets/' + (this.currentImages[this.imgIndex]))
    },
    currentSize () {
      return this.currentColor.sizes[this.sizeIndex]
    }
  },
  watch: {
    colorIndex () {
      this.imgIndex = 0
      this.sizeIndex = 0
    }
  },
  async mounted () {
    this.product = await client.getProductBySlug(this.$route.params.slug)
  }
}
</script>

<style>
.selected-product-img,
.selectable-product-imgs {
  object-fit: cover;
  object-position: center;
}
.selected-product-img {
  height: 520px;
  width: 100%;
}
.selectable-product-imgs,
.selectable-product-colors {
  height: 100px;
  width: 75px;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}
.selectable-product-imgs {
  height: 100px;
  width: 75px;
}
.selectable-product-colors {
  height: 50px;
  width: 37px;
}
.fs-12 {
  font-size: .7rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
