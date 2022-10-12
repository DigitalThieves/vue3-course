<template>
  <section>
    <p>
      Best Sellers.
    </p>
    <div class="container-fluid px-0 best-sellers">
      <div class="row">
        <router-link
          :to="{ name: 'products', params: { slug: 'salty-black-jacket' } }"
          class="col-3 best-seller text-decoration-none text-dark"
        >
          <img
            class="img-fluid mb-3"
            src="../assets/images/salt-store-items/jacket/01.jpg"
          >
          <p>Salty Black / <br> Jacket</p>
        </router-link>
        <router-link
          :to="{ name: 'products', params: { slug: 'tshirt-salty' } }"
          class="col-3 best-seller text-decoration-none text-dark"
        >
          <img
            class="img-fluid mb-3"
            src="../assets/images/salt-store-items/t-shirt/psyche-01.jpg"
          >
          <p>Psyche Blue / <br> T-shirt</p>
        </router-link>
        <router-link
          :to="{ name: 'products', params: { slug: 'one-size-baseball' } }"
          class="col-3 best-seller text-decoration-none text-dark"
        >
          <img
            class="img-fluid mb-3"
            src="../assets/images/salt-store-items/hat/01.jpg"
          >
          <p>One size / <br> Baseball cap</p>
        </router-link>
        <router-link
          :to="{ name: 'products', params: { slug: 'baggie-salt-laptop-bag' } }"
          class="col-3 best-seller text-decoration-none text-dark"
        >
          <img
            class="img-fluid mb-3"
            src="../assets/images/salt-store-items/laptop-bag/01.jpg"
          >
          <p>Baggie Salt / <br> Laptop Bag</p>
        </router-link>
      </div>
    </div>
  </section>
</template>
<style scoped>
.best-seller {
  cursor: pointer;
}
.best-seller img.img-fluid {
  height: 420px;
  object-fit: cover;
  object-position: center;
}
</style>