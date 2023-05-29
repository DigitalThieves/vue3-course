<template lang="pug">
footer.mt-5
  .w-100.bg-secondary.py-5.text-white.text-left.fw-bold
    .container.py-5.px-0
      .row.align-content-stretch
        .col-12.col-md-8.pe-md-4
          p  MENU 
          hr.my-4
          .d-flex.w-100.justify-content-start
            .col-6.col-md-4
              router-link.text-decoration-none.text-white(to='/about')
                p  ABOUT TELENOR
            .col-6.col-md-4
              p(v-for="cat in categories") {{ cat.toUpperCase() }}
          hr.my-4.align-self-end
        .col-12.col-md-4.ps-md-4.d-grid
          p  FOLLOW US 
          hr.mb-4.mt-0
          p  FACEBOOK 
          p  INSTAGRAM 
          p  LINKEDIN 
          hr.my-4.align-self-end
  .container.py-4.d-flex.justify-content-between.px-0
    img(alt=' campaign picture', src='../assets/images/logo.svg', style='width: 25px')
    p.fw-semibold.mb-0
      | &copy; COPYRIGHT TELENOR 2023
</template>
<script lang="ts">
export default {
  computed: {
    categories () : any  {
      return (this as any).$store.state.categories.categories
    }
  }
}
</script>