<template>
  <salt-header />
  <router-view v-slot="{ Component }">
    <transition
      name="fade"
      mode="out-in"
    >
      <div :key="$route.name">
        <component
          :is="Component"
        />
      </div>
    </transition>
  </router-view>
  <salt-footer />
</template>
<script>
import SaltHeader from './components/SaltHeader.vue'
import SaltFooter from './components/SaltFooter.vue'

export default {
  name: 'App',
  components: {
    SaltHeader,
    SaltFooter,
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title-1 {
  font-size: 3.5rem;
}
</style>
