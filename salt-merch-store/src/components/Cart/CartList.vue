<template>
  <div class="w-full text-left">
    <p :class="titleSize">
      Cart Items:
    </p>
    <hr>
    <ul v-if="cartItems">
      <li
        v-for="item in cartItems"
        :key="item.slug"
        class="mb-3"
        :class="itemSize"
      >
        <div class="d-flex justify-content-between align-items-center">
          <router-link
            :to="'/products/' + item.slug"
            class="text-decoration-none text-dark"
          >
            <img
              :src="require('@/assets/' + item.colors[0].images[0])"
              class="cart-list-img"
            >
            {{ item.title }} / {{ item.colors[0].color_name }} / 
            <span class="text-capitalize">{{ item.colors[0].sizes[0].size }}</span>
          </router-link>
          <div
            class="cart-item-quantity"
            :class="quantitySize"
          >
            <button
              data-testid="removeBtn"
              :class="buttonSize"
              @click="removeQuantity(item)"
            >
              -
            </button>
            <span> Qty: {{ item.quantity }} </span>
            <button
              data-testid="addBtn"
              :class="buttonSize"
              @click="addQuantity(item)"
            >
              +
            </button>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>
      No items in cart
    </p>
  </div>
</template>
<script>

export default {
  props: {
    size: {
      type: String,
      default: 's'
    }
  },
  computed: {
    cartItems () {
      const cart = this.$store.state.cart
      return cart.length ? cart : false
    },
    titleSize () {
      switch (this.size) {
        case 's':
          return 'fs-6'
        case 'm':
        case 'l':
        case 'xl':
          console.log('size is', this.size)
          return 'fs-3'
        default:
          return 'fs-6'
      }
    },
    itemSize () {
      switch (this.size) {
        case 's':
          return 'fs-12'
        case 'm':
        case 'l':
        case 'xl':
          console.log('size is', this.size)
          return 'fs-6'
        default:
          return 'fs-12'
      }
    },
    buttonSize () {
      switch (this.size) {
        case 's':
          return 'px-2 py-1'
        case 'm':
        case 'l':
        case 'xl':
          return 'px-3 py-2'
        default:
          return 'px-2 py-1'
      }
    },
    quantitySize () {
      return this.size
    },
  },
  methods: {
    removeQuantity (item) {
      this.$store.dispatch('removeItem', item)
    },
    addQuantity (item) {
      this.$store.dispatch('addItem', item)
    }
  },
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
.cart-item-quantity {
  display: flex;
  align-items: center;
  width: 160px;
  justify-content: space-between;
}
.cart-item-quantity.s {
  width: 90px;
}
</style>