<template lang="pug">
  .map-main-wrapper.map-wrapper-sidebar-push(v-bind:class='isSidebarBindClass')
    .google-map#google-map

    //- Sidebar
    .sidebar-animation
      Sidebar(
        :currentMarkerDetails='currentMarkerDetails',
        v-on:isSidebarButtonClose='isSidebarClose()'
      )
</template>




<style lang="sass">
  .map-main-wrapper
    position: relative
    height: $map_height

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

  // Transitions
  .sidebar-animation,
  .map-wrapper-sidebar-push
    -webkit-transition: all .2s ease
    -moz-transition: all .2s ease
    transition: all .2s ease

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

  .google-map
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
</style>




<script>
  import Sidebar from '~/components/Sidebar.vue'
  import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'
  import placesList from '~/components/MapGoogle/_places_list.js'

  export default {
    components: {
      Sidebar
    },

    data () {
      return {
        isScreenBig: false,
        // our core element
        currentMarkerDetails: {
          title: false,
          address: false,
          website: false,
          fbPage: false,
          position: {
            lat: false,
            lng: false
          }
        },
        isSidebarBindClass: {
          // first value is class to attach/bind, second value is status
          'isOpenClass': false
        },
        isMapDragged: false
      }
    },

    methods: {
      // move map (animation) to current marker
      panMovement (movementLatValue) {
        this.map.panToWithOffset(
          new window.google.maps.LatLng(
            this.currentMarkerDetails.position.lat,
            this.currentMarkerDetails.position.lng
          ), movementLatValue, 0
        )
      },

      isSidebarOpen (screen) {
        this.isScreenBig = false
        if (screen >= 576) {
          this.isScreenBig = true
        }
        // reset drag option
        this.isMapDragged = false

        // open sidebar (css animation in milleseconds)
        // when function trigger, set value as TRUE. we change DATA value
        // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
        this.$set(this.isSidebarBindClass, 'isOpenClass', true)

        if (this.isScreenBig) {
          this.panMovement(-200)
        }
      },

      isSidebarClose () {
        // reset drag option
        this.isMapDragged = false

        // TOGGLE CLASS for close sidebar
        // when function trigger, set value as TRUE. we change DATA value
        // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
        this.$set(this.isSidebarBindClass, 'isOpenClass', false)
      }
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      // !!! we need this google constant
      const google = window.google

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
        strokeWeight: 2,
        // for correct alignmnet of custom SVG icon with map point
        anchor: new google.maps.Point(11, 12)
      }

      // follow this tutorial
      // https://wrightshq.com/playground/placing-multiple-markers-on-a-google-map-using-api-3/
      const initMap = () => {
        // init map canvas
        const map = new google.maps.Map(document.getElementById('google-map'), {
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
          }
        })

        // function for PAN movement
        google.maps.Map.prototype.panToWithOffset = function (latlng, offsetX, offsetY) {
          var ov = new google.maps.OverlayView()
          ov.onAdd = function () {
            var proj = this.getProjection()
            var aPoint = proj.fromLatLngToContainerPixel(latlng)
            aPoint.x = aPoint.x + offsetX
            aPoint.y = aPoint.y + offsetY
            map.panTo(proj.fromContainerPixelToLatLng(aPoint))
          }
          ov.draw = function () {}
          ov.setMap(this)
        }

        const setSingleMarker = (indexNumber, placeID) => {
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(placeID.position.lat, placeID.position.lng),
            map: map,
            title: placeID.title,
            // set icon custom style
            icon: customMarker
          })

          // at marker click ...
          google.maps.event.addListener(marker, 'click', () => {
            // update info in sidebar with current marker
            this.currentMarkerDetails.title = placeID.title
            this.currentMarkerDetails.address = placeID.address
            this.currentMarkerDetails.position = placeID.position
            this.currentMarkerDetails.website = placeID.website
            this.currentMarkerDetails.fbPage = placeID.fbPage

            // open sidebar + PAN MOVE
            this.isSidebarOpen(window.innerWidth)

            // todo: set better with NO timeout?
            // START bounce
            setTimeout(() => {
              marker.setAnimation(google.maps.Animation.BOUNCE)
            }, 400)
            // END bounce
            setTimeout(() => {
              marker.setAnimation(null)
            }, 1150)
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

        // TODO: set as function?
        // check if user is dragging the map. we need it later for close option
        google.maps.event.addListener(map, 'dragend', () => {
          this.isMapDragged = true
        })

        return map
      // ./ end init
      }

      initMap()
    // end mounted
    }
  }
</script>
