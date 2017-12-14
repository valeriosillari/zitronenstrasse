<template>
  <gmap-map
    class="google-map"
    :center='mapCentering'
    :zoom='zoomOption'
    :options='options'
  >

    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
    >
    </gmap-marker>

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
        },
        markers: [{
          position: {
            lat: 52.482845,
            lng: 13.438589
          }
        }, {
          position: {
            lat: 52.478430,
            lng: 13.439651
          }
        }]
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
