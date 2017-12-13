<template lang="pug">
  .map-main-wrapper
    .google-map#google-map
</template>

<script>
  // based on:
  // https://medium.com/founders-factory/building-a-custom-google-map-component-with-vue-js-d1c01ddd0b0a
  // https://stackoverflow.com/questions/29723134/google-map-add-marker-using-place-id
  // https://stackoverflow.com/questions/16985867/adding-an-onclick-event-to-google-map-marker
  // https://laracasts.com/discuss/channels/vue/google-maps-and-vue-js?page=2

  import placeIdArray from '~/components/MapGoogle/_placesIdArrays.js'
  import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'

  export default {
    data: () => {
      const MapGoogle = {
        // empty object
      }
      return MapGoogle
    },
    // mounted: WHEN ALL code on server is already loaded!
    mounted: function () {
      this.initMap()
    },
    methods: {
      initMap: function () {
        const google = window.google
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
        let mapLoaded = this.map
        let activeInfoWindow
        const customMarker = {
          // path inspiration form this codepen:
          // https://codepen.io/defvayne23/pen/EVYGRw?editors=1010
          // we follow the vg path to amazon and ttaken the path from the original url
          // https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg
          path: 'M 8 2.1 c 1.1 0 2.2 0.5 3 1.3 c 0.8 0.9 1.3 1.9 1.3 3.1 s -0.5 2.5 -1.3 3.3 l -3 3.1 l -3 -3.1 c -0.8 -0.8 -1.3 -2 -1.3 -3.3 c 0 -1.2 0.4 -2.2 1.3 -3.1 c 0.8 -0.8 1.9 -1.3 3 -1.3 Z',
          fillColor: 'yellow',
          strokeColor: 'gold',
          fillOpacity: 1,
          scale: 2.5,
          strokeWeight: 5,
          // for correct alignmnet of custom SVG icon with map point
          anchor: new google.maps.Point(11, 12)
        }
        for (let placeID of placeIdArray) {
          new google.maps.places.PlacesService(mapLoaded).getDetails({
            placeId: placeID
          }, (result, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.log(status)
              return
            }

            // marker
            let marker = new google.maps.Marker({
              map: mapLoaded,
              position: result.geometry.location,
              // set icon custom style
              icon: customMarker
            })
            const currentInfoWindow = new google.maps.InfoWindow({
              content: result.name
            })
            google.maps.event.addListener(marker, 'click', (el) => {
              // close info window of previous opened marker : reset
              activeInfoWindow && activeInfoWindow.close()
              // open current clicked one
              currentInfoWindow.open(mapLoaded, marker)
              // set the current one as opened one
              activeInfoWindow = currentInfoWindow
            })
          })
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .map-main-wrapper
    width: 100%
    min-height: 100%

  .google-map
    position: absolute
    width: 100%
    height: 100%
</style>
