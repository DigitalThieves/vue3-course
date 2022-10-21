<template>
  <p class="mt-5" data-testid="root-wo-attr">Categories.</p>
  <div v-bind="$attrs" data-testid="root-w-attr">
    <h2 class="mb-5">
      popular categories.
    </h2>
    <div class="d-flex justify-content-center">
      <RouterLink v-slot="{ navigate }" :to="{ name: 'categories', params: { slug: 'hats' } }">
        <button @click="navigate" class="px-5 py-3 bg-white mx-1 text-uppercase"> Hats </button>
      </RouterLink>
      <RouterLink v-slot="{ navigate }" :to="{ name: 'categories', params: { slug: 'jackets' } }">
        <button @click="navigate" class="px-5 py-3 bg-white mx-1 text-uppercase"> Jackets </button>
      </RouterLink>
      <RouterLink v-slot="{ navigate }" :to="{ name: 'categories', params: { slug: 'tshirts' } }">
        <button @click="navigate" class="px-5 py-3 bg-white mx-1 text-uppercase"> T-shirts </button>
      </RouterLink>
      <RouterLink v-slot="{ navigate }" :to="{ name: 'categories', params: { slug: 'bags' } }">
        <button @click="navigate" class="px-5 py-3 bg-white mx-1 text-uppercase"> Bags </button>
      </RouterLink>
    </div>
  </div>
</template>
