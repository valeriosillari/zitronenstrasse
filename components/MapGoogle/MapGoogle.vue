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

<style lang="sass">
  .google-map
    position: absolute
    width: 100%
    height: 100%

  // map bg whn loading
  .gm-style
    background: $color_map_bg

  // content of each map info InfoWindow
  .gm-style-iw
    color: $color_info_winfow_text

    .text
      margin-bottom: .25rem

    .title
      font-size: 18px
      font-weight: 500
      color: $color_info_winfow_title
    // option for color of opening
    .open-time
      color: $color_open_undefined
    .is-open-now
      color: $color_open_yes
      font-weight: 500
    .is-open-not
      color: $color_open_no

  // remove google cc
  // and remove some weird grey box set on right side from google
  .gm-style-cc
    display: none

  // // remove goggle map logo
  // a[href^="http://maps.google.com/maps"],
  // a[href^="https://maps.google.com/maps"],
  // a[href^="https://www.google.com/maps"]
  //     display: none !important
  // .gmnoprint:not(.gm-bundled-control)
  //   display: none
  // .gm-bundled-control .gmnoprint
  //   display: block
</style>
