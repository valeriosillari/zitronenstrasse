<template lang="pug">
  .map-main-wrapper.map-wrapper-sidebar-push(v-bind:class='isSidebarBindClass')
    //- hidden heading for seo.
    //- inside component for design reasons (I'm lazy)
    h1.heading-title
      | Zitronenstrasse

    GmapMap(
      ref='mapRef'
      :center='center'
      :zoom='zoom'
      :options='options'
      class='gmap-container'
    )

    //- Sidebar
      .sidebar-animation
        Sidebar(
          v-on:isSidebarButtonClose='isSidebarClose()'
        )
</template>


<style lang="sass">
  .map-main-wrapper
    position: relative
    height: $map_height

  .gmap-container
    position: absolute
    width: 100%
    height: 100%

  // map bg whn loading
  .gm-style
    background: $color_map_bg

  // remove google cc
  // and remove some weird grey box set on right side from google
  .gm-style-cc
    display: none


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

  // === no JS logic | modernizr ===
  // not show map (google)
  .no-js
    .google-map
      display: none

</style>


<script>
  import placesList from '~/static/places_list.js'
  import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'
  import customMarker from '~/components/MapGoogle/_markerCustomStyles.js'
  // import Sidebar from '~/components/Sidebar.vue'

  export default {
    // components: {
    //   Sidebar
    // },

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
          mapTypeControl: false,
          // set custom map styles
          styles: mapStylesDark
        },
        // rest of options
        isScreenBig: false,
        isSidebarBindClass: {
          // first value is class to attach/bind, second value is status
          'isOpenClass': false
        },
        // map drag for marker animation
        isMapDragged: false,
      }
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {


      console.log('============== Mounted - MAP ================')
      console.log( this.$store.state.currentPlace )
      console.log( this.$store.state.currentPlace.thumb )

      // wait having the map created. info and tips from this issue:
      // https://github.com/xkjyeah/vue-google-maps/issues/301
      this.$refs.mapRef.$mapPromise.then((map) => {
        // wait google Plugin set and attached to window object
        const google = window.google
        // need to be here, after google is set
        const initLogic = () => {
          // function for PAN movement
          google.maps.Map.prototype.panToWithOffset = function (latlng, offsetX, offsetY) {
            let ov = new google.maps.OverlayView()
            ov.onAdd = function () {
              let proj = this.getProjection()
              let aPoint = proj.fromLatLngToContainerPixel(latlng)
              aPoint.x = aPoint.x + offsetX
              aPoint.y = aPoint.y + offsetY
              map.panTo(proj.fromContainerPixelToLatLng(aPoint))
            }
            ov.draw = () => {}
            ov.setMap(this)
          }

          // set single marker behavious
          const setSingleMarker = (indexNumber, placeID) => {

            // firts create object with all data for current marker
            let marker = new google.maps.Marker({
              // set current map
              map: map,
              // set icon custom style
              icon: customMarker,
              // set place info              
              title: placeID.title,
              address:  placeID.address,
              thumb: placeID.thumb,
              thumbCredits: placeID.thumbCredits,
              position: new google.maps.LatLng(placeID.position.lat, placeID.position.lng),
              website: placeID.website,
              fbPage: placeID.fbPage,
            })

            // at marker click passed all the current marker info to the store object:
            // so we update globally the info about current item in all components
            google.maps.event.addListener(marker, 'click', () => {
              console.log('============== CLICK ================')
              console.log(marker.title)
              console.log(marker.address)
              console.log(marker.thumb)
              console.log(marker.thumbCredits)
              console.log(marker.position)
              console.log(marker.website)
              console.log(marker.fbPage)
            })

            return marker
          // ./ end setSingleMarker
          }

          // Loop our LIST array and set marker on map
          for (const [indexNumber, placeID] of placesList.entries()) {
            setSingleMarker(indexNumber, placeID)
          }

          // return map so we can used it globally
          this.map = map

        // ./ end init
        }

        initLogic()
      // ./ end map created
      })
    },

    methods: {

      isSidebarClose () {
        // reset drag option
        this.isMapDragged = false

        // TOGGLE CLASS for close sidebar
        // when function trigger, set value as TRUE. we change DATA value
        // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
        this.$set(this.isSidebarBindClass, 'isOpenClass', false)
      }
    }
  }
</script>
