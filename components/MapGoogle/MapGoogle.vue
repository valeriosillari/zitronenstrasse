<template>
  <gmap-map
    class="google-map"
    :center='mapCentering'
    :zoom='zoomOption'
    :options='options'
  >
  </gmap-map>
</template>

<script>
  export default {
    data () {
      return {
        mapCentering: {
          lat: 52.482841,
          lng: 13.4252209
        },
        zoomOption: 14,
        // map options
        options: {
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false
          // set custom map styles
          // styles: mapStylesDark
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .google-map
    position: absolute
    width: 100%
    height: 100%
</style>
