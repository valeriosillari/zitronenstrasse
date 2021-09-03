import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // our key for API set in google
    // we need it on BUILD process, automatically injected with Nuxt naming convention
    // https://nuxtjs.org/api/configuration-env#automatic-injection-of-environment-variables
    key: process.env.NUXT_ENV_ENV_ZITRONENSTRASSE_GOOGLE_MAP,
    // set version. list of versions here:
    // https://developers.google.com/maps/documentation/javascript/releases
    version: '3.46.3',
    // This is required if you use the Autocomplete plugin
    // libraries: 'places'
  },
})
