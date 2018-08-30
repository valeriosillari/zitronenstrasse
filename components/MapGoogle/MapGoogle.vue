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
  import customMarker from '~/components/MapGoogle/_markerCustomStyles.js'

  export default {
    data () {
      return {
        // map position: set my custom BERLIN map info
        center: {
          lat: 52.48383,
          lng: 13.4395546
        },
        zoom: 14,
        // map options
        options: {
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          // set custom map styles
          styles: mapStylesDark
        },
        // custom styles for the marker
        customMarker: customMarker,
        // markers list as array
        markers: placesList
      }
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('MOUNTED map componnet')
    }
  }
</script>
