<template>
  <input
    v-model="text"
    type="text"
    placeholder="Search"
  >
</template>
<script>
export default {
emits: ['search'],
  data () {
    return {
      text: ''
    }
  },
  watch: {
    text (newVal) {
      this.$emit('search', newVal)
    }
  }
}
</script>