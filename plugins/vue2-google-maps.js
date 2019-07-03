import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // our key for API set in google
    // update: removed from here. we have to set new key from JUNE 2018
    key: process.env.googleMapApiKey,
    // set version. list of versions here:
    // https://developers.google.com/maps/documentation/javascript/releases
    version: '3.35',
    // This is required if you use the Autocomplete plugin
    // libraries: 'places'
  },
})
