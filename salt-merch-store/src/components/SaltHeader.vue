<template>
  <header class="w-100 mb-4 border-secondary border-bottom">
    <div class="container-fluid bg-secondary py-3 text-center">
      <p class="text-white mb-0 text-uppercase">1 - 3 days of delivery | 30 days refundable</p>
    </div>
    <div class="container">
      <div class="row justify-content-center py-4">
        <div class="col-4 d-none d-md-flex px-4 text-left align-items-center">
          <!-- <p class="text-left mb-0 d-block">
            <span class="mb-0 text-uppercase">Dark</span>
            <span class="mb-0 text-uppercase px-3">Light</span>
          </p> -->
        </div>
        <router-link
          to="/"
          class="col-4 justify-content-center"
        >
          <img
            src="../assets/images/salt.svg"
            class="header-logo"
          >
        </router-link>
        <div class="col-4 justify-content-end text-end px-4 align-items-center d-flex">
          <!-- <div class="px-3 d-inline-block">
            <svg style="width: 18px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg>
          </div> -->
          <cart-icon />
        </div>
      </div>
    </div>
    <div class="w-100 border-secondary border-bottom" />
    <div class="container border-left">
      <nav class="row justify-content-center">
        <router-link
          class="navitem col-3 border-secondary border-right p-4 text-center pointer text-decoration-none text-dark"
          to="/categories/hats"
        >
          <p class="mb-0">Hats</p>
        </router-link>
        <router-link
          class="navitem col-3 border-secondary border-right p-4 text-center pointer text-decoration-none text-dark"
          to="/categories/jackets"
        >
          <p class="mb-0">Jackets</p>
        </router-link>
        <router-link
          class="navitem col-3 border-secondary border-right p-4 text-center pointer text-decoration-none text-dark"
          to="/categories/tshirts"
        >
          <p class="mb-0">T-shirts</p>
        </router-link>
        <router-link
          class="navitem col-3 border-secondary border-right p-4 text-center pointer text-decoration-none text-dark"
          to="/categories/bags"
        >
          <p class="mb-0">Bags</p>
        </router-link>
      </nav>
    </div>
  </header>
</template>
<script>
import CartIcon from '@/components/Cart/CartIcon.vue'

export default {
  components: {
    CartIcon
  }
}
</script>

<style>
.border-right { border-right: 1px solid black; }
.pointer { cursor: pointer; }
.header-logo { width: 175px; }
.border-left { border-left: rgb(108, 117, 125) solid 0.998264px !important; }
nav .navitem:hover { background: black; color: white !important; font-weight: 900; }
.text-left { text-align: left !important; }
</style>