<template lang="pug">
.hamburger-container.position-relative
  .hamburger-clickable(:class="{ 'open': isOpen}")
    div
    div
    div
</template>
<script lang="ts">
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
.hamburger-clickable
  overflow visible
  width 24px
  height 24px
  position relative
  display inline-block
  float right
  -webkit-transform rotate(0deg)
  -moz-transform rotate(0deg)
  -o-transform rotate(0deg)
  transform rotate(0deg)
  -webkit-transition 0.35s ease-in-out
  -moz-transition 0.35s ease-in-out
  -o-transition 0.35s ease-in-out
  transition 0.35s ease-in-out
  cursor pointer
  *
    overflow visible
  div
    display inline
    position absolute
    height 3px
    width 100%
    background #fff
    opacity 1
    left 0
    -webkit-transform rotate(0deg)
    -moz-transform rotate(0deg)
    -o-transform rotate(0deg)
    transform rotate(0deg)
    -webkit-transition .2s ease-in-out
    -moz-transition .2s ease-in-out
    -o-transition .2s ease-in-out
    transition .2s ease-in-out

.hamburger-clickable div
  background #000
.hamburger-clickable div:nth-child(1)
  top 5px

.hamburger-clickable div:nth-child(2)
  top 13px

.hamburger-clickable div:nth-child(3)
  top 21px

.hamburger-clickable.open div:nth-child(1)
  -webkit-transform rotate(45deg)
  -moz-transform rotate(45deg)
  -o-transform rotate(45deg)
  transform rotate(45deg)
  top 13px
.hamburger-clickable.open div:nth-child(2)
  left -15px
  width 0%
  opacity 0

.hamburger-clickable.open div:nth-child(3)
  -webkit-transform rotate(-45deg)
  -moz-transform rotate(-45deg)
  -o-transform rotate(-45deg)
  transform rotate(-45deg)
  top 13px
</style>
