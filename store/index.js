// How to set vue store for dummy data
// https://blog.prototypr.io/nuxt-prototyping-storing-design-tokens-dummy-data-globally-adf97ab47eeb

import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
          currentPlace: {
            title: 'STore Title Defaul 11',
            address: false,
            thumb: '000_place_fallback.jpg',
            thumbCredits: false,
            website: false,
            fbPage: false,
            position: {
              lat: false,
              lng: false,
            },
          }
        }
    })
}
export default createStore