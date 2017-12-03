<template lang="pug">
  .google-map#google-map
</template>

<script>
  // based on:
  // https://medium.com/founders-factory/building-a-custom-google-map-component-with-vue-js-d1c01ddd0b0a
  // https://stackoverflow.com/questions/29723134/google-map-add-marker-using-place-id
  // https://stackoverflow.com/questions/16985867/adding-an-onclick-event-to-google-map-marker

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
    mounted: () => {
      const google = window.google
      const initialize = () => {
        let map
        let activeInfoWindow
        const divWrapperItemID = 'google-map'
        // set map view option
        const mapOptions = {
          zoom: 14,
          center: new google.maps.LatLng(52.482841, 13.4252209),
          // map options
          options: {
            disableDefaultUI: true,
            attributionControl: false,
            // set custom map styles
            styles: mapStylesDark
          }
        }
        // attach map to the div element, passing all the option above
        map = new google.maps.Map(document.getElementById(divWrapperItemID), mapOptions)

        for (let placeID of placeIdArray) {
          new google.maps.places.PlacesService(map).getDetails({
            placeId: placeID
          }, (result, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.log(status)
              return
            }
            // marker
            let marker = new google.maps.Marker({
              map: map,
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
              currentInfoWindow.open(map, marker)
              // set the current one as opened one
              activeInfoWindow = currentInfoWindow
            })
          })
        }
      }
      // TODO: load works at page load, not if you switch pages ...
      google.maps.event.addDomListener(window, 'load', initialize)
    }
  }
</script>

<style lang="sass" scoped>
  .google-map
    position: absolute
    width: 100%
    height: 100%
</style>
