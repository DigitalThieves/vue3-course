<template>
  <div class="w-full text-left">
    <p class="fs-6">
      Cart Items:
    </p>
    <hr>
    <ul v-if="cartItems">
      <li
        v-for="item in cartItems"
        :key="item.slug"
        class="fs-10 mb-3"
      >
        <router-link
          :to="'/products/' + item.slug"
          class="text-decoration-none text-dark"
        >
          <img
            :src="require('@/assets/' + item.colors[0].images[0])"
            class="cart-list-img"
          >
          {{ item.title }} / {{ item.colors[0].color_name }} / {{ item.colors[0].sizes[0].size }} / Qty: {{ item.quantity }}
        </router-link>
      </li>
    </ul>
    <p v-else>
      No items in cart
    </p>
  </div>
</template>
<script>

export default {
  computed: {
    cartItems () {
      const cart = this.$store.state.cart
      return cart.length ? cart : false
    }
  }
}

</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.cart-list-img {
  width: 24px;
  height: 24px;
  margin-right: 6px;
  object-fit: cover;
}
</style>