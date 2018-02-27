<template lang="pug">
  .map-main-wrapper
    .google-map#google-map
</template>




<style lang="sass">
  .map-main-wrapper
    position: relative
    height: calc(100% - 66px)

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

    // link for website and/or fb
    .link
      color: $color_info_winfow_link
      float: left
      margin-right: 5px
      &:hover
        color: $color_info_winfow_link_hvr
        text-decoration: underline

  // remove google cc
  // and remove some weird grey box set on right side from google
  .gm-style-cc
    display: none
</style>




<script>
  import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'
  import placesList from '~/components/MapGoogle/_places_list.js'

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
      // !!! we need this google constant
      const google = window.google

      // TODO: check if we need it.
      // vue listening if STOP marker loop
      // if we go to anotehr rout/map, we check and block loop logic.
      // avoiding google map query limit ...
      // this.isLoopMarkerGoingOn()

      // for infowindow: just one is opened at time.
      let activeInfoWindow

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

        const setSingleMarker = (indexNumber, placeID) => {
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(placeID.position.lat, placeID.position.lng),
            map: map,
            title: placeID.title,
            // set icon custom style
            icon: customMarker
          })

          // fallback for text: just empty string
          let linkTextWebsite = ''
          let linkTextFb = ''

          // set link website if exists
          if (placeID.website) {
            linkTextWebsite = `
              <a href='${placeID.website}' class='link pull-left link-website' alt='Link to official Website for ${placeID.title}' target="_blank">
                Website
              </a>
            `
          }

          // set link FB page if exists
          if (placeID.fbPage) {
            linkTextFb = `
              <a href='${placeID.fbPage}' class='link pull-left link-fb' alt='Link to official Facebook Page for ${placeID.title}' target="_blank">
                Facebook Page
              </a>
            `
          }

          const currentInfoWindow = new google.maps.InfoWindow({
            // here set logic for info window for each item
            // https://developers.google.com/maps/documentation/javascript/infowindows
            content: `
              <div class="info-window-wrapper">
                <p class='text title'>${placeID.title}</p>
                <p class='text address'>${placeID.address}</p>
                ${linkTextWebsite}
                ${linkTextFb}
              </div>
            `
          })

          // open infowindow with inside info
          google.maps.event.addListener(marker, 'click', () => {
            // close info window of previous opened marker : reset
            activeInfoWindow && activeInfoWindow.close()
            // open current clicked one
            currentInfoWindow.open(map, marker)
            // // set the current one as opened one
            activeInfoWindow = currentInfoWindow
          })
          return marker
        // ./ end setSingleMarker
        }

        // Loop our LIST array and set marker on map
        for (const [indexNumber, placeID] of placesList.entries()) {
          // let itemNumber = indexNumber + 1
          // https://stackoverflow.com/questions/8909652/adding-click-event-listeners-in-loop
          // TODO: set here logic for move around pages later ...
          // setTimeout(() => {
          setSingleMarker(indexNumber, placeID)
          // // close timer for each marker
          // }, itemNumber * 150)
        }
      // ./ end init
      }

      // ========================== START inits ==========================
      // google.maps.event.addDomListener(window, 'ready', addMarkers(initMapCanvas()))
      initMap()

    // end mounted
    }
  }
</script>
