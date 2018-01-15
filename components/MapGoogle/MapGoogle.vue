<template lang="pug">
  .map-main-wrapper
    .google-map#google-map
</template>

<script>
  import placeIdArray from '~/components/MapGoogle/_placesIdArrays.js'
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

  export default {
    data () {
      // empty object
      return {}
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      // 'this' is the VUE component
      const selfComponent = this
      // add map to page
      selfComponent.initMap()
    },

    methods: {
      addMarker: (google, mapLoaded, placeID, indexNumber) => {
        // timer for avoiding TIMEOUT: 450 looks fine, below errors ...
        const timer = indexNumber * 425

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

        // timeout playing time
        setTimeout(() => {
          new google.maps.places.PlacesService(mapLoaded).getDetails({
            placeId: placeID
          }, (result, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              const marker = new google.maps.Marker({
                map: mapLoaded,
                place: {
                  placeId: placeID,
                  location: result.geometry.location
                },
                // set icon custom style
                icon: customMarker
              })

              // set marker click event
              marker.addListener('click', () => {
                console.log(`marker!!!! ckik >> ${indexNumber}`)
                // infowindow.open(map, marker);
              })

              return marker
            // ============== TODO set fade in logic ==============
            } else if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
              console.error(`💩 : OVER_QUERY_LIMIT : ${indexNumber}`)
            } else {
              console.error('💩 : generic placeID error')
            }
          })
        }, timer)
      },

      initMap () {
        // !!! we need this google constant
        const google = window.google

        // init map
        this.map = new google.maps.Map(document.getElementById('google-map'), {
          center: {
            lat: 52.486757,
            lng: 13.4403271
          },
          zoom: 14,
          options: {
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
            // set custom map styles
            styles: mapStylesDark
          }
        })

        // add markers in the loop with order number
        // https://stackoverflow.com/questions/10179815/how-do-you-get-the-loop-counter-index-using-a-for-in-syntax-in-javascript
        for (const [i, placeID] of placeIdArray.entries()) {
          // TODO: here we have to pass google. coudl we set it more globally?
          this.addMarker(google, this.map, placeID, i + 1)
        }
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
</style>
