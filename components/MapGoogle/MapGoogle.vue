<template lang="pug">
  GmapMap(
    ref='mapRef'
    :center='center'
    :zoom='zoom'
    :options='options'
    style="width: 800px; height: 400px"
  )
</template>


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
