<template>
  <div class="w-100 position-relative">
    <img
      alt="campaign picture"
      src="../assets/images/salt-store-items/t-shirt/black-03.jpg"
      class="w-100 object-fit h-520"
    >
    <slot name="overlay" />
    <div
      class="position-absolute w-100 h-100 justify-content-center align-items-center d-flex"
      style="top: 0%"
      data-testid="default-slot-container"
    >
      <slot />
    </div>
  </div>
</template>
<style>
.h-520 {
  height: 520px;
}
</style>
