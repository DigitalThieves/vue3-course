<template>
  <div class="container p-0">
    <picture-overlayed-with-text />
    <div class="row">
      <div class="w-100 text-left py-5">
        <categories-nav />
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
