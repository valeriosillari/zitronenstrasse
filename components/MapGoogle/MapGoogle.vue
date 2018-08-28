<template>
 <div class="my-container">
    <GmapMap
      class="gmap-container"
      :center="center"
      :zoom="zoom"
      :options="options"
    >

      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
      >
      </gmap-marker>

    </GmapMap>
  </div>
</template>

<style lang="sass">
  .my-container
    width: 100%
    min-height: 100%

  .gmap-container
    background: red
    // this need to overwite stuff???
    position: absolute !important
    width: 100%
    height: 100%
</style>

<script>
  export default {
    data () {
      return {
        zoom: 14,

        // map position: set my custom BERLIN map info
        center: {
          lat: 52.482841,
          lng: 13.4252209
        },

        // map options
        options: {
          disableDefaultUI: true,
          attributionControl: false
        },

        // markers : to test !!!
        // place ID finder:
        // https://developers.google.com/places/place-id
        markers: [
          // Molecule Men
          {
            position: {
              lat: 52.4928835,
              lng: 13.452538
              // place ID
              // ChIJlRNaZ_5OqEcRom1mEqQnRcw
            }
          },

          // Flughafen / Airport Tempelhof
          {
            position: {
              lat: 52.482371,
              lng: 13.422217
              // place ID
              // ChIJmzoVxehPqEcRB6YzEZWqGuM
            }
          }

        ]
      }
    }
  }
</script>
