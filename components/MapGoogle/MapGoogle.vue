<template lang="pug">
  gmap-map.google-map(
    :center='center',
    :zoom='zoom',
    :options='options'
  )
</template>

<script>
  // import placeIdArray from '~/components/MapGoogle/_placesIdArrays.js'
  import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'

  export default {
    data () {
      const MapGoogle = {
        zoom: 14,

        // map position: set my custom BERLIN map info
        center: {
          lat: 52.482841,
          lng: 13.4252209
        },
        // map options
        options: {
          disableDefaultUI: true,
          attributionControl: false,
          // set custom map styles
          styles: mapStylesDark
        },
        // markers : an array
        markers: [
        ]
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
