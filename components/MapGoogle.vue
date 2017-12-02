<template lang="pug">
  .google-map-wrapper
    .google-map#map-id
</template>

<script>
  export default {
    data: () => {
      const MapGoogle = {
        // empty object
      }
      return MapGoogle
    },
    // mounted: WHEN ALL code on server is already loaded!
    mounted: () => {
      // based on:
      // https://stackoverflow.com/questions/29723134/google-map-add-marker-using-place-id
      // https://stackoverflow.com/questions/16985867/adding-an-onclick-event-to-google-map-marker
      const google = window.google
      const initialize = () => {
        let map
        let activeInfoWindow
        const divWrapperItemID = 'map-id'
        // set map view option
        const mapOptions = {
          zoom: 14,
          center: new google.maps.LatLng(52.482841, 13.4252209),
          // map options
          options: {
            disableDefaultUI: true,
            attributionControl: false
          }
        }
        // attach map to the div element, passing all the option above
        map = new google.maps.Map(document.getElementById(divWrapperItemID), mapOptions)

        // set list of places
        const placeIdArray = [
          // tier
          'ChIJOSWgYaVPqEcR63RnoNfgsDg',
          // b-lage
          'ChIJAV_YIZ5PqEcRKxI0jRwb58I',
          // Geschwister Nothaft Café
          'ChIJX2MutgxPqEcR2nvgHiQ0ojE',
          // Herr Lindemann
          'ChIJd-_qBqBPqEcRhdYalX3ASNI'
        ]

        for (let placeID of placeIdArray) {
          new google.maps.places.PlacesService(map).getDetails({
            placeId: placeID
          }, (result, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.log(status)
              return
            }
            let marker = new google.maps.Marker({
              map: map,
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

      google.maps.event.addDomListener(window, 'load', initialize)
    }
  }
</script>

<style lang="sass" scoped>
  .google-map-wrapper
    width: 100%
    min-height: 100%
  .google-map
    background: gray
    position: absolute
    width: 100%
    height: 100%
</style>
