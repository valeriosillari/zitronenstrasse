<template lang="pug">
  div(v-lazy-container="{ selector: 'img' }")
    img.thumb(
      :data-loading='lazyLoadThumbLoading'
      :data-src='lazyLoadThumbLoaded',
      :title='lazyLoadThumbTitle'
    )
</template>


<style lang="sass">
  .thumb
    +img-fluid
    margin-bottom: 20px
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
        // from static folder it is ok.
        lazyLoadThumbLoading: '/thumbs/fallback/440x250_fallback_magenta.png',
        lazyLoadThumbLoaded: '/thumbs/places/440x250_green.png',
        lazyLoadThumbTitle: 'TITLE image heres'
      }
    }
  }
</script>
