<template lang="pug">
  .map-main-wrapper
    .google-map#google-map
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="sass">
  .map-main-wrapper
    width: 100%
    min-height: 100%

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
