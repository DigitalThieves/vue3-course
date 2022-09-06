<template>
  <div class="container p-0">
    <picture-overlayed-with-text>
      <template #overlay>
        <div
          class="position-absolute w-100 h-100 bg-secondary"
          style="top: 0%; left: 0%; opacity:0.5;"
        />
      </template>
      <div class="text-white text-center">
        <h2>
          Timeless Love
        </h2>
        <h1 class="title-1 fw-bold mb-3">
          Salt Merch
        </h1>
        <button class="bg-white px-5 py-3">
          SHOP THE COLLECTION
        </button>
      </div>
    </picture-overlayed-with-text>
    <div class="row">
      <div class="w-100 text-left py-5">
        <categories-nav class="bg-secondary p-5 text-white text-center" />
      </div>
    </div>
  </div>
</template>

<script>
// import BestSellers from './BestSellers.vue'
import CategoriesNav from '@/components/CategoriesNav.vue'
import PictureOverlayedWithText from '@/components/PictureOverlayedWithText.vue'
export default {
  name: 'HelloWorld',
  components: {
    PictureOverlayedWithText,
    // BestSellers,
    CategoriesNav,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
