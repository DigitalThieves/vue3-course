<template>
  <div class="w-100 position-relative">
    <img
      alt="campaign picture"
      src="../assets/images/salt-store-items/t-shirt/black-03.jpg"
      class="w-100 object-fit h-520"
    >
    <!-- PICTURE OVERLAY MAKE IT INTO A NAMED SLOT -->
    <div
      class="position-absolute w-100 h-100 bg-secondary"
      style="top: 0%; left: 0%; opacity:0.5;"
    />
    <div
      class="position-absolute w-100 h-100 justify-content-center align-items-center d-flex"
      style="top: 0%"
    >
      <slot />
    </div>
  </div>
</template>