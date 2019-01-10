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
        :currentMarkerDetails='currentMarkerDetails',
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
  import Sidebar from '~/components/Sidebar.vue'

  export default {
    components: {
      Sidebar
    },     
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
        // created object with all info for details
        currentMarkerDetails: {
          type: Object,
          default: () => ({
            title: {
              type: String,
              default: false,
            },
            address: {
              type: String,
              default: false,
            },
            thumb: {
              type: String,
              default: `~/assets/img/places/000_place_fallback.jpg`,
            },
            thumbCredits: {
              type: String,
              default: false,
            },
            website: {
              type: String,
              default: false,
            },
            fbPage: {
              type: String,
              default: false,
            },
            position: {
              lng: {
                type: Number,
                default: false,
              },
              lng: {
                type: Number,
                default: false,
              }
            },
          })
        }
      }
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {


      console.log('============== MOUTED ================')
      console.log(this.currentMarkerDetails.thumb)


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

              console.log('============== CLCIK ================')

              // update info for current marker object
              this.$set(this.currentMarkerDetails, 'title', placeID.title)
              this.$set(this.currentMarkerDetails, 'thumb', require(`~/assets/img/places/${placeID.thumb}`))
              this.$set(this.currentMarkerDetails, 'thumbCredits', placeID.thumbCredits)
              this.$set(this.currentMarkerDetails, 'address', placeID.address)
              this.$set(this.currentMarkerDetails, 'position', placeID.position)
              this.$set(this.currentMarkerDetails, 'website', placeID.website)
              this.$set(this.currentMarkerDetails, 'fbPage', placeID.fbPage)

              // marker animation
              this.markerAnimation(marker)

              // open sidebar + PAN MOVE
              this.isSidebarOpen(window.innerWidth)
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
        // ./ end init
        }

        initLogic()
      // ./ end map created
      })
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

      markerAnimation (currentMarker) {
        // todo: set better with NO timeout?
        // start bounce
        setTimeout(() => {
          currentMarker.setAnimation(window.google.maps.Animation.BOUNCE)
        }, 400)
        // end bounce
        setTimeout(() => {
          currentMarker.setAnimation(null)
        }, 1150)
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
    }
  }
</script>
