<template>
  <template v-if="selectablesType === 'sizes'">
    <div
      v-for="size, i in selectables"
      :key="size.size"
      data-testid="selectable"
      class="selectable-product-sizes border text-center px-3 py-2"
      :class="sizeClass(size, i)"
      @click="size.stock ? $emit('update:active-index', i) : null"
    >
      {{ size.size }}
    </div>
  </template>
  <template v-else-if="selectablesType === 'colors'">
    <div
      v-for="color, i in selectables"
      :key="color.color_name"
      data-testid="selectable"
      class="selectable-product-colors border"
      :style="'background-color: ' + color.colorhex + ';'"
      @click="$emit('update:active-index', i)"
    />
  </template>
  <template v-else-if="selectablesType === 'images'">
    <img
      v-for="image, i in selectables"
      :key="'image-' + i"
      data-testid="selectable"
      :src="image"
      class="selectable-product-imgs"
      @click="$emit('update:active-index', i)"
    >
  </template>
</template>
<script>

export default {
  props: {
    selectables: {
      type: Array,
      default () {
        return []
      }
    },
    selectablesType: {
      type: String,
      default () {
        return 'sizes'
      }
    },
    activeIndex: {
      type: Number,
      default () {
        return 0
      }
    },
  },
  emits: [ 'update:active-index' ],
  methods: {
    sizeStyle (size, i) {
      return i === this.activeIndex ? 'background-color: black; color: white' : (
        size.stock ? '' : 'background-color: lightgrey; cursor: default !important;'
      )
    },
    sizeClass (size, i) {
      return i === this.activeIndex ? 'bg-dark text-white' : (
        size.stock ? '' : 'bg-secondary text-white cursor-default'
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
.cursor-default {
  cursor: default;
}
</style>