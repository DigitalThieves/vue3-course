<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model="name"
      data-testid="name-input"
      type="text"
    >
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  emits: ['formSubmitted'],
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name })
    }
  }
}
</script>