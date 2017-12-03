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
            lat: 52.482841,
            lng: 13.4252209
          },
          zoom: 14,
          // map options
          options: {
            // disableDefaultUI: true,
            // attributionControl: false,
            // set custom map styles
            styles: mapStylesDark
          }

        })
        let mapLoaded = this.map
        let activeInfoWindow
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
              // set icon custo style
              // icon: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
              position: result.geometry.location
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
