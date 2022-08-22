<template>
  <div
    class="py-5"
  >
    <h1>
      Loading...
    </h1>
  </div>
  <div
    class="py-5"
  >
    <h1>
      {{ error }}
    </h1>
  </div>
  <div
    class="container my-5"
  >
    <!-- BREADCRUMB -->
    <div class="row text-left">
      <div class="col-12">
        <p class="text-uppercase fs-12 fw-semibold">
          SALT MERCH / CATEGORY / TITLE
        </p>
      </div>
      <div class="col-4">
        <img
          :src="require('@/assets/' + 'images/salt-store-items/t-shirt/black-01.jpg')"
          class="selected-product-img mb-3"
        >
        <img
          :src="require('@/assets/' + 'images/salt-store-items/t-shirt/black-01.jpg')"
          class="selectable-product-imgs"
        >
        <img
          :src="require('@/assets/' + 'images/salt-store-items/t-shirt/black-02.jpg')"
          class="selectable-product-imgs"
        >
        <img
          :src="require('@/assets/' + 'images/salt-store-items/t-shirt/black-03.jpg')"
          class="selectable-product-imgs"
        >
      </div>
      <div class="col-8">
        <h1>
          PRODUCT TITLE
        </h1>
        <p>
          COLOR NAME /
          <span> Stock: AVAILABLE_STOCK </span>
        </p>
        <hr class="my-3">
        <div
          class="selectable-product-colors border"
          style="background-color: #000;"
        />
        <br>
        <br>
        <div
          class="selectable-product-sizes border text-center px-3 py-2"
        >
          S
        </div>
        <div
          class="selectable-product-sizes border text-center px-3 py-2"
        >
          M
        </div>
        <div
          class="selectable-product-sizes border text-center px-3 py-2"
        >
          L
        </div>
        <div
          class="selectable-product-sizes border text-center px-3 py-2"
        >
          XL
        </div>
        <div
          class="selectable-product-sizes border text-center px-3 py-2"
        >
          XXL
        </div>
        <br>
        <br>
        <button
          class="px-5 py-3"
        >
          Add PRODUCT TITLE To Cart
        </button>
        <hr class="my-3">
        <div>
          <p> THIS IS DESCRIPTION FIELD AND NEEDS TO BE REPLACED WITH REAL DATA </p>
          <p> BUT THE DATA IS IN HTML FORMAT. HMMMM... I WONDER HOW TO FIX THIS? </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      product: {},
      colorIndex: 0,
      imgIndex: 0,
      sizeIndex: null,
      isLoading: false,
      error: 'ERROR MESSAGE',
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
