<template>
  <header class="w-100 mb-4 border-secondary border-bottom">
    <div class="container-fluid bg-secondary py-3 text-center">
      <p class="text-white mb-0 text-uppercase">1 - 3 days of delivery | 30 days refundable</p>
    </div>
    <div class="container">
      <div class="row justify-content-center py-4">
        <div class="col-4 d-none d-md-flex px-4 text-left align-items-center">
          <p class="text-left mb-0 d-block">
            <span class="mb-0 text-uppercase">Dark</span>
            <span class="mb-0 text-uppercase px-3">Light</span>
          </p>
        </div>
        <router-link
          to="/"
          class="col-4 justify-content-center"
        >
          <img src="../assets/images/salt.svg" class="header-logo" />
        </router-link>
        <div class="col-4 justify-content-end text-end px-4 align-items-center d-flex">
          <div class="px-3 d-inline-block">
            <svg style="width: 18px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg>
          </div>
          <div class="d-inline-block">
            <svg style="width: 18px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 border-secondary border-bottom" />
    <div class="container border-left">
      <nav class="row justify-content-center">
        <div class="navitem col-3 border-secondary border-right p-4 text-center pointer">
          <router-link
            to="/categories/hats"
            class="text-transform-none"
          >
            <p class="mb-0">Hats</p>
          </router-link>
        </div>
        <div class="navitem col-3 border-secondary border-right p-4 text-center pointer">
          <router-link
            to="/categories/jackets"
            class="text-transform-none"
          >
            <p class="mb-0">Jackets</p>
          </router-link>
        </div>
        <div class="navitem col-3 border-secondary border-right p-4 text-center pointer">
          <router-link
            to="/categories/tshirts"
            class="text-transform-none"
          >
            <p class="mb-0">T-shirts</p>
          </router-link>
        </div>
        <div class="navitem col-3 border-secondary border-right p-4 text-center pointer">
          <router-link
            to="/categories/bags"
            class="text-transform-none"
          >
            <p class="mb-0">Bags</p>
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>
<style>
.border-right { border-right: 1px solid black; }
.pointer { cursor: pointer; }
.header-logo { width: 175px; }
.border-left { border-left: rgb(108, 117, 125) solid 0.998264px !important; }
nav .navitem:hover { background: black; color: white; font-weight: 900; }
.text-left { text-align: left !important; }
</style>