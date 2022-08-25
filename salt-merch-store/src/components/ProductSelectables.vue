<template>
  <template v-if="type === 'sizes'">
    <div
      v-for="size, i in list"
      :key="size.size"
      class="selectable-product-sizes border text-center px-3 py-2"
      :style="sizeStyle(size, i)"
      @click="size.stock ? $emit('update:index', i) : null"
    >
      {{ size.size }}
    </div>
  </template>
  <template v-else-if="type === 'colors'">
    <div
      v-for="color, i in list"
      :key="color.color_name"
      class="selectable-product-colors border"
      :style="'background-color: ' + color.colorhex + ';'"
      @click="$emit('update:index', i)"
    />
  </template>
  <template v-else-if="type === 'images'">
    <img
      v-for="image, i in list"
      :key="'image-' + i"
      :src="require('@/assets/' + image)"
      class="selectable-product-imgs"
      @click="$emit('update:index', i)"
    >
  </template>
</template>
<script>

export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    type: {
      type: String,
      default () {
        return 'sizes'
      }
    },
    index: {
      type: Number,
      default () {
        return 0
      }
    },
  },
  emits: [ 'update:index' ],
  methods: {
    sizeStyle (size, i) {
      return i === this.index ? 'background-color: black; color: white' : (
        size.stock ? '' : 'background-color: lightgrey; cursor: default !important;'
      )
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
</style>