<template>
  <template v-if="selectablesType == 'images'">
    <img
      v-for="image, i in selectables"
      :key="'selectable-image-' + i"
      :src="require('@/assets/' + image)"
      class="selectable-product-imgs"
      @click="updateIndex(i)"
    >
  </template>
  <template v-else-if="selectablesType == 'sizes'">
    <div
      data-testid="selectable"
      v-for="size, i in selectables"
      :key="'selectable-size-' + i"
      class="selectable-product-sizes border text-center px-3 py-2"
      :class="activeIndex === i ? 'bg-dark text-white' : ''"
      @click="updateIndex(i)"
    >
      {{ size.size }}
    </div>
  </template>
  <template v-else-if="selectablesType == 'colors'">
    <div
      v-for="color, i in selectables"
      :key="'selectable-img-' + i"
      class="selectable-product-colors border"
      :style="'background-color: ' + color.colorhex + ';'"
      @click="updateIndex(i)"
    />
  </template>
</template>
<script>
export default {
  props: {
    selectablesType: {
      type: String,
      default () {
        return 'colors'
      }
    },
    selectables: {
      type: Array,
      default () {
        return []
      }
    },
    activeIndex: {
      type: Number,
      default () {
        return 0
      }
    },
  },
  methods: {
    updateIndex (i) {
      this.$emit('update:activeIndex', i)
    }
  }
}
</script>