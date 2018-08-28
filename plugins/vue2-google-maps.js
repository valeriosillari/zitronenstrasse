import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // our key for API set in google
    // update: removed from here. we have to set new key from JUNE 2018
    key: process.env.googleMapApiKey,
    version: '3.29',
    // This is required if you use the Autocomplete plugin
    libraries: 'places'
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
