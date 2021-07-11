import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // our key for API set in google
    // https://nuxtjs.org/api/configuration-env#automatic-injection-of-environment-variables
    // key: process.env.nuxtEnvGoogleMapKey || '',
    // set version. list of versions here:
    // https://developers.google.com/maps/documentation/javascript/releases
    version: '3.42.7',
    // This is required if you use the Autocomplete plugin
    // libraries: 'places'
  },
})
