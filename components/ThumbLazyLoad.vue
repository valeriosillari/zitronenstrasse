<template lang="pug">
  div(v-lazy-container="{ selector: 'img' }")
    img.thumb(
      data-loading='~/assets/img/fallback/440x250_fallback_magenta.png'
      data-src='~/assets/img/places/001_nothaftcafes.png'
    )
</template>


<style lang="sass">
  .thumb
    transition: opacity 1.5s ease-in-out
  // extra data attribute added via lazy loading
  img[lazy=loading]
    opacity: 0
  img[lazy=loaded]
    opacity: 1
</style>


<script>
  export default {
    data () {
      return {
        // empty
      }
    }
  }
</script>
