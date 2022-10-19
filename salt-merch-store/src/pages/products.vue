<template>
  <div
    v-if="isLoading"
    class="py-5"
  >
    <h1 data-testid="loading">
      Loading...
    </h1>
  </div>
  <div
    v-else-if="error"
    class="py-5"
  >
    <h1 data-testid="error">
      {{ error }}
    </h1>
  </div>
  <div
    v-else
    class="container"
  >
    <!-- BREADCRUMB -->
    <div class="row text-left">
      <div class="col-12">
        <p class="text-uppercase fs-12 fw-semibold">
          SALT MERCH / {{ product.category }} / {{ product.title }}
        </p>
      </div>
      <div class="col-4">
        <transition-group
          name="fade"
          mode="out-in"
          tag="div"
        >
          <img
            key="image"
            :src="require('@/assets/' + currentImage)"
            class="selected-product-img"
          >
        </transition-group>
        <br>
        <br>
        <product-selectables
          v-model:active-index="imgIndex"
          :selectables="currentColor.images"
          selectables-type="images"
        />
      </div>
      <div class="col-8">
        <h1 data-testid="title">
          {{ product.title }}
        </h1>
        <p>
          {{ currentColor.color_name }} /
          <span v-if="sizeIndex == null"> No size chosen </span>
          <span v-else-if="currentSize.stock == 0"> Out of stock </span>
          <span v-else> Stock: {{ currentSize.stock }} </span>
        </p>
        <hr class="my-3">
        <product-selectables
          v-model:active-index="colorIndex"
          :selectables="product.colors"
          selectables-type="colors"
        />
        <br>
        <br>
        <product-selectables
          v-model:active-index="sizeIndex"
          :selectables="currentColor.sizes"
          selectables-type="sizes"
        />
        <br>
        <br>
        <button
          class="px-5 py-3"
          :disabled="sizeIndex == null || !currentSize.stock"
          @click="addItem"
        >
          Add {{ product.title }} To Cart
        </button>
        <hr class="my-3">
        <div data-testid="description" v-html="product.description" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductSelectables from '@/components/ProductSelectables.vue'
export default {
  name: 'App',
  components: {
    ProductSelectables
  },
  data () {
    return {
      product: {
        category: 'tshirts',
        colors: [
          {
            color_name: 'Black',
            colorhex: '#000',
            sizes: [
              {
                size: 'S',
                stock: 1
              }, {
                size: 'M',
                stock: 1
              }, {
                size: 'L',
                stock: 2
              }, {
                size: 'XL',
                stock: 5
              }, {
                size: 'XXL',
                stock: 3
              }
            ],
            images: [ 'images/salt-store-items/t-shirt/black-01.jpg',
            'images/salt-store-items/t-shirt/black-02.jpg',
            'images/salt-store-items/t-shirt/black-03.jpg',
            'images/salt-store-items/t-shirt/black-04.jpg',
            ]
          }, {
            color_name: 'White',
            colorhex: '#fff',
            sizes: [
              {
                size: 'S',
                stock: 1
              }, {
                size: 'M',
                stock: 1
              }, {
                size: 'L',
                stock: 2
              }, {
                size: 'XL',
                stock: 5
              }, {
                size: 'XXL',
                stock: 0
              }
            ],
            images: [
              'images/salt-store-items/t-shirt/white-01.jpg',
              'images/salt-store-items/t-shirt/white-02.jpg'
            ]
          }
        ],
        title: 'Salty T-Shirt',
        description: "<p>Salt makes awesome T-Shirts. Get yo'self one immediately before they run out. Go on, don't be shy.</p><p>We take orders fo sure!</p>"
      },
      colorIndex: 0,
      imgIndex: 0,
      sizeIndex: null,
      isLoading: true,
      error: null,
    }
  },
  computed: {
    currentColor () {
      if (!this.product)
        return null
      return this.product.colors[this.colorIndex]
    },
    currentImage () {
      if (!this.currentColor)
        return null
      return this.currentColor.images[this.imgIndex]
    },
    currentSize () {
      if (!this.currentColor)
        return null
      return this.currentColor.sizes[this.sizeIndex]
    }
  },
  watch: {
    currentColor () {
      this.imgIndex = 0
      this.sizeIndex = 0
    }
  },
  mounted () {
    setTimeout(() => this.isLoading = false, 500)
  },
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
.selectable-product-sizes,
.selectable-product-colors {
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
/* body * {
  text-align: left;
} */
</style>
