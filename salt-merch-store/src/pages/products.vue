<template>
  <div
    v-if="isLoading"
    class="py-5"
  >
    <h1>
      Loading...
    </h1>
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
            :key="image"
            :src="require('@/assets/' + product.colors[0].images[0])"
            class="selected-product-img"
          >
        </transition-group>
        <br>
        <br>
        <img
          v-for="image, i in product.colors[0].images"
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
          {{ product.colors[0].color_name }} /
          <span v-if="sizeIndex !== null && currentSize.stock"> Stock: {{ currentSize.stock }} </span>
          <span v-else-if="sizeIndex !== null"> Out of stock </span>
          <span v-else> No size chosen </span>
        </p>
        <hr class="my-3">
        <div
          v-for="color, i in product.colors"
          :key="color.color_name"
          class="selectable-product-colors border"
          :style="'background-color: ' + color.colorhex + ';'"
          @click="colorIndex = i"
        />
        <br>
        <br>
        <div
          v-for="size, i in product.colors[0].sizes"
          :key="size.size"
          class="selectable-product-sizes border text-center px-3 py-2"
          :style="size.cssClass"
          @click="size.stock ? sizeIndex = i : null"
        >
          {{ size.size }}
        </div>
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
export default {
  name: 'App',
  data () {
    return {
      product: {
        'category': 'tshirts',
        'colors': [ {
          'color_name': 'Black',
          'colorhex': '#000',
          'sizes': [
            {
              'size': 'S',
              'stock': 1
            }, {
              'size': 'M',
              'stock': 1
            }, {
              'size': 'L',
              'stock': 2
            }, {
              'size': 'XL',
              'stock': 5
            }, {
              'size': 'XXL',
              'stock': 3
            }
          ],
          'images': [ 'images/salt-store-items/t-shirt/black-01.jpg', 'images/salt-store-items/t-shirt/black-02.jpg', 'images/salt-store-items/t-shirt/black-03.jpg', 'images/salt-store-items/t-shirt/black-04.jpg' ]
        } ],
        'title': 'Salty T-Shirt',
        'description': "<p>Salt makes awesome T-Shirts. Get yo'self one immediately before they run out. Go on, don't be shy.</p><p>We take orders fo sure!</p>"
      },
      colorIndex: 0,
      imgIndex: 0,
      sizeIndex: null,
      isLoading: false,
      error: null,
    }
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
