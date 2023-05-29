<template lang="pug">
.row
  .col-12
    hr.my-4
  router-link.col-6.col-md-4.col-lg-3.text-decoration-none(
    v-for="product in collection"
    :key="product.slug"
    :to="'/products/' + product.slug"
  )
    img(
      class="img-fluid mb-3"
      :src="product.colors[0].images[0]"
    )
    p.text-left.text-dark {{ product.title }} /
      br
      | {{ product.colors[0].color_name }}
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
