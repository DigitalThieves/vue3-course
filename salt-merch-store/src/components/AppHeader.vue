<template lang="pug">
header.w-100.mb-4.border-secondary.border-bottom
  .container-fluid.bg-secondary.py-3.text-center
    p.text-white.mb-0.text-uppercase 1 - 3 days of delivery | 30 days refundable
  .container
    .row.justify-content-center.py-4
      .col-4.d-none.d-md-flex.px-4.text-left.align-items-center
      .col-4.d-md-none.align-items-center.d-flex.pointer(@click="navOpen = !navOpen")
        hamburger-nav(:isOpen="navOpen").mr-auto
      router-link.col-4.d-flex.justify-content-center(to='/')
        img.header-logo(src='../assets/images/logo.svg')
      .col-4.justify-content-end.text-end.px-4.align-items-center.d-flex
        cart-icon
  .w-100.border-secondary.border-bottom
  .container.border-left
    nav.row(:class="{ 'hide-on-mobile': !navOpen }")
      router-link(
        v-for='category in categories',
        v-slot='{ isActive, navigate }',
        :key="'cat-' + category",
        :to=`{
          name: 'categories',
          params: {
            category
          }
        }`,
        custom
      )
        .text-capitalize.mb-0.navitem.col-12.col-md-3.border-secondary.border-right.p-4.align-items-center.justify-content-center.d-flex.text-center.pointer.text-decoration-none.text-dark(
          :class="isActive ? 'fw-bold' : ''",
          @click='goTo(navigate)'
        )
          | {{ category }}
</template>
<script lang="ts">
import CartIcon from '@/components/Cart/CartIcon.vue'
import HamburgerNav from '@/components/HamburgerNav.vue'

export default {
  components: {
    CartIcon, HamburgerNav
  },
  data () {
    return {
      navOpen: false
    }
  },
  computed: {
    categories () : any  {
      return (this as any).$store.state.categories.categories
    }
  },
  methods: {
    goTo (navigate: Function): void {
      (this as any).navOpen = false;
      navigate()
    }
  },
}
</script>
<style>
@media (max-width: 768px) {
  nav {
    transition: height .2s ease-in-out;
    height: 300px;
    overflow-y: hidden;
  }
  .hide-on-mobile {
    height: 0;
  }
}
.border-right { border-right: 1px solid black; }
.pointer { cursor: pointer; }
.header-logo { width: 50px; }
.border-left { border-left: rgb(108, 117, 125) solid 0.998264px !important; }
nav .navitem:hover { background: black; color: white !important; font-weight: 900; }
.text-left { text-align: left !important; }
</style>