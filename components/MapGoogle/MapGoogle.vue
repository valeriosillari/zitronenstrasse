<template lang="pug">
  .map-main-wrapper.map-wrapper-sidebar-push
    //- hidden heading for seo.
    //- inside component for design reasons (I'm lazy)
    h1.heading-title
      | Zitronenstrasse

    GmapMap(
      class='gmap-container'
      :center='center'
      :zoom='zoom'
      :options='options'
    )
      gmap-marker(
        :key='index'
        v-for='(m, index) in markers'
        :position='m.position'
        :icon='customMarker'
        :clickable='true'
      )
    //- Sidebar
</template>


<style lang="sass">
  .map-main-wrapper
    position: relative
    height: $map_height

  // title for seo
  .heading-title
    display: none

  // WRAPPER classes
  .map-wrapper-sidebar-push
    overflow-x: hidden
    position: relative
    left: 0

  .sidebar-animation
    position: fixed
    top: 0
    z-index: 1000
    height: 100%
    width: 100%
    background: $color_sidebar_bg
    right: -$sidebar_width_xs
    +breakpoint($breakpoint_sm)
      width: $sidebar_width_sm
      right: -$sidebar_width_sm
    +breakpoint($breakpoint_md)
      width: $sidebar_width_md
      right: -$sidebar_width_md

  $sidebar_animation: all .35s ease
  // Transitions
  .sidebar-animation,
  .map-wrapper-sidebar-push
    -webkit-transition: $sidebar_animation
    -moz-transition: $sidebar_animation
    transition: $sidebar_animation

  // -- OPEN. js add classes

  // extra class added via JS when sidebar is shown (WRAPPER/PARENT element)
  .isOpenClass
    left: -$sidebar_width_xs
    +breakpoint($breakpoint_sm)
      left: -$sidebar_width_sm
    +breakpoint($breakpoint_md)
      left: -$sidebar_width_md
    // extra class added via JS when sidebar is shown (sidebar element)
    .sidebar-animation
      right: 0px

  .vue-map-container
    position: absolute
    width: 100%
    height: 100%
    background: pink

  // map bg whn loading
  .gm-style
    background: $color_map_bg

  // remove google cc
  // and remove some weird grey box set on right side from google
  .gm-style-cc
    display: none

  // === no JS logic | modernizr ===
  // not show map (google)
  .no-js
    .google-map
      display: none
</style>




<script>
  // list of places called from static folder: as an API object
  import placesList from '~/static/places_list.js'
  import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'

  // marker custom colors
  // custom color: a little bit darker then the main one. for the marker looks the same
  const markerColorFill = '#eab622'
  const markerColorStroke = '#FFC832'
  // path inspiration from this codepen:
  // https://codepen.io/defvayne23/pen/EVYGRw?editors=1010
  // we follow the svg path to amazon and taken the path from the original url
  // https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg
  const markerPath = 'M 8 2.1 c 1.1 0 2.2 0.5 3 1.3 c 0.8 0.9 1.3 1.9 1.3 3.1 s -0.5 2.5 -1.3 3.3 l -3 3.1 l -3 -3.1 c -0.8 -0.8 -1.3 -2 -1.3 -3.3 c 0 -1.2 0.4 -2.2 1.3 -3.1 c 0.8 -0.8 1.9 -1.3 3 -1.3 Z'
  const customMarker = {
    path: markerPath,
    fillColor: markerColorFill,
    strokeColor: markerColorStroke,
    fillOpacity: 1,
    scale: 2.5,
    strokeWeight: 2
    // for correct alignmnet of custom SVG icon with map point
    // anchor: new google.maps.Point(11, 12)
  }

  export default {
    data () {
      return {
        zoom: 14,

        // map position: set my custom BERLIN map info
        center: {
          lat: 52.48383,
          lng: 13.4395546
        },

        // map options
        options: {
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          // set custom map styles
          styles: mapStylesDark
        },

        customMarker: customMarker,

        // markers : to test !!!
        // place ID finder:
        // https://developers.google.com/places/place-id
        markers: placesList
      }
    }
  }
</script>
