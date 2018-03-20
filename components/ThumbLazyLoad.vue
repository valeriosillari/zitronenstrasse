<template lang="pug">
  div(style='border: 5px solid blue;')

    p(style='background: pink;')
      | {{ currentMarkerDetails.title }}

    p(style='background: #ccc;')
      | {{ currentMarkerDetails.thumb }}

    div(v-lazy-container="{ selector: 'img' }")
      img.thumb(
        data-loading='/thumb/fallback/440x250_fallback_magenta.png',
        data-src='/thumb/fallback/440x250_fallback_yellow.png',
        :title='currentMarkerDetails.title'
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
    // input from PARENTS
    props: [
      'currentMarkerDetails'
    ],
    data () {
      return {
        // empty
      }
    }
  }
</script>
