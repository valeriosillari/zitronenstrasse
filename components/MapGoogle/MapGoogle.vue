<template lang="pug">
  .map-main-wrapper.map-wrapper-sidebar-push
    //- hidden heading for seo.
    //- inside component for design reasons (I'm lazy)
    h1.heading-title
      | Zitronenstrasse

    GmapMap(
      class="gmap-container"
      :center="center"
      :zoom="zoom"
      :options="options"
    )
      gmap-marker(
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
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
  export default {
    data () {
      return {
        zoom: 14,

        // map position: set my custom BERLIN map info
        center: {
          lat: 52.482841,
          lng: 13.4252209
        },

        // map options
        options: {
          disableDefaultUI: true,
          attributionControl: false
        },

        // markers : to test !!!
        // place ID finder:
        // https://developers.google.com/places/place-id
        markers: [
          // Molecule Men
          {
            position: {
              lat: 52.4928835,
              lng: 13.452538
              // place ID
              // ChIJlRNaZ_5OqEcRom1mEqQnRcw
            }
          },

          // Flughafen / Airport Tempelhof
          {
            position: {
              lat: 52.482371,
              lng: 13.422217
              // place ID
              // ChIJmzoVxehPqEcRB6YzEZWqGuM
            }
          }

        ]
      }
    }
  }
</script>
