<template>
  <HomePage msg="Welcome to Your Vue.js App" />
</template>

<script>
import HomePage from '../components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
.object-fit {
  object-fit: cover;
  object-position: center;
}
.h-520 {
  height: 520px;
}
</style>
