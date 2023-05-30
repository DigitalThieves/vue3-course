<template lang="pug">
.row
  .col-12.d-flex.justify-content-between
    //- filter-options(v-model:options="filter_options")
    search-input(@search="search")
  .col-12
    hr.my-4
  router-link.col-6.col-md-4.col-lg-3.text-decoration-none(
    data-testid='collection-product'
    v-for="product in filteredCollection"
    :key="product.slug"
    :to="'/products/' + product.slug"
  )
    img(
      class="img-fluid mb-3"
      :src="product.colors[0].images[0]"
    )
    p.text-left.text-dark(data-testid="collection-product-title") {{ product.title }} /
      br
      | {{ product.colors[0].color_name }}
    p.text-left.text-dark(data-testid="collection-product-price") {{ product.price }}
</template>
<script>
import SearchInput from './SearchInput.vue'
export default {
  components: {
    SearchInput,
  },
  props: {
    collection: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      filter_options: null,
      search_input: null
    }
  },
  computed: {
    filteredCollection () {
      return this.collection.filter((prod) => {
        // if (this.filter_options && this.filter_options.price) {
        //   const price = Number.parseInt(prod.price)
        //   if (
        //     price < this.filter_options.price.min
        //     || price > this.filter_options.price.max
        //   )
        //     return false
        // }
        // if (
        //   this.filter_options && this.filter_options.color &&
        //   prod.colors.findIndex(
        //     col => col.color_name.like(
        //       this.filter_options.color
        //     )
        //   ) < 0
        // )
          // return false
        if (this.search_input && this.search_input !== '')
          if (
            !this.searchIn((prod.title), (this.search_input))
            && !this.searchIn((prod.description), (this.search_input))
          )
            return false
        return true
      })
    }
  },
  methods: {
    search (data) {
      console.log('search data is ', data)
      this.search_input = data
    },
    searchIn: (haystack, needle) => new RegExp(needle.toLowerCase()).test(haystack.toLowerCase())
  },
}
</script>
