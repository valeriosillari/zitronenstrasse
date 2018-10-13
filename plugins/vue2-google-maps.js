import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // todo: set here APKI key
    key: 'YOUR_API_TOKEN',
    libraries: 'places'
  }
})
