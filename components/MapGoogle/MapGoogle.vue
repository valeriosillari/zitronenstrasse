<template lang="pug">
  .map-main-wrapper
    GmapMap(
      ref='mapRef'
      :center='center'
      :zoom='zoom'
      :options='options'
      class='gmap-container'
    )
</template>


<style lang="sass">
  .map-main-wrapper
    position: relative
    // todo: height got some issue ...
    height: $map_height
    height: 630px

  .gmap-container
    position: absolute
    width: 100%
    height: 100%

</style>


<script>
  export default {
    data () {
      return {
        // map
        center: {
          lat: 52.48383,
          lng: 13.4395546
        },
        zoom: 14,
        // map options
        options: {
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false
        }
      }
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('HERERREE')
    }
  }
</script>
