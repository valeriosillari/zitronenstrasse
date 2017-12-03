<template lang="pug">
  .google-map
    | heererere
</template>

<script>
  // import placeIdArray from '~/components/MapGoogle/_placesIdArrays.js'
  // import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'

  export default {
    data: () => {
      const MapGoogle = {
        // empty object
        dummy: 'dummy text'
      }
      return MapGoogle
    }
  }
</script>

<style lang="sass" scoped>
  .google-map
    position: absolute
    width: 100%
    height: 100%
</style>
