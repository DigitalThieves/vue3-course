<template>
  <div class="row">
    <div class="col-12">
      <hr class="my-4">
    </div>
    <router-link
      v-for="product in collection"
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
</template>
<script>

export default {
  props: {
    collection: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
