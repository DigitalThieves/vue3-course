
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
      <!-- PICTURE TEXT SHOULD BE STANDARD / DEFAULT SLOT -->
      <div class="text-white text-center">
        <h2>
          Timeless Love
        </h2>
        <h1 class="title-1 fw-bold mb-3">
          Salt Merch
        </h1>
        <button class="bg-white px-5 py-3">
          SHOP THE COLLECTION
        </button>
      </div>
    </div>
  </div>
</template>
<style>

  .object-fit {
    object-fit: cover;
    object-position: center;
  }
  .h-520 {
    height: 520px;
  }

  </style>