<template lang="pug">
  .map-main-wrapper
    .google-map#google-map
</template>




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
</style>




<script>
  import placeIdArray from '~/components/MapGoogle/_placesIdArrays.js'
  import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'

  export default {
    data () {
      return {
        isLoopGoingOn: true
      }
    },

    methods: {
      isLoopMarkerGoingOn () {
        // sniffing option from NAVIGATION
        this.$root.$on('checkPageChangeStatus', filter => {
          if (filter) {
            // change value
            this.isLoopGoingOn = false
          }
        })
      }
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('============================ MOUNTED COMPONENT ============================')

      // vue listening if STOP marker loop
      // if we go to anotehr rout/map, we check and block loop logic.
      // avoiding google map query limit ...
      this.isLoopMarkerGoingOn()

      // !!! we need this google constant
      const google = window.google

      const initMapCanvas = () => {
        // init map
        this.map = new google.maps.Map(document.getElementById('google-map'), {
          center: {
            lat: 52.486757,
            lng: 13.4403271
          },
          zoom: 14,
          // map options
          options: {
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
            // disableDefaultUI: true,
            // attributionControl: false,
            // set custom map styles
            styles: mapStylesDark
          }
        })
        return this.map
      }

      // check if add marker. if YES, run google map logic
      const addSingleMarker = (placeID, indexNumber, isLoopGoingOn) => {
        // RUN add marker ONLY if the vent is ok.
        // we stop this loop at page change :)
        if (isLoopGoingOn) {
          new google.maps.places.PlacesService(this.map).getDetails({
            placeId: placeID
          }, (result, status) => {
            // marker has errors ...
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                console.error(`💩 : OVER_QUERY_LIMIT : ${indexNumber}`)
              } else {
                console.error('💩 : generic placeID error')
              }
              return
            }

            // ========= set marker API data =========
            let marker = new google.maps.Marker({
              map: this.map,
              position: result.geometry.location
            })

            return marker
          })
        }
      }

      const addMarkers = () => {
        for (const [indexNumber, placeID] of placeIdArray.entries()) {
          setTimeout(() => {
            // https://stackoverflow.com/questions/8909652/adding-click-event-listeners-in-loop
            addSingleMarker(placeID, indexNumber, this.isLoopGoingOn)
          // close timer for each marker
          }, (indexNumber + 1) * 425)
        }
      }

      // ========================== START inits ==========================

      // we load JUST map
      initMapCanvas()

      // we start add markers, but as callback FIRST we set the map
      addMarkers()

    // end mounted
    }
  }
</script>
