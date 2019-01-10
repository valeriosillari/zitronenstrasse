// store nuxt documentation first
// https://nuxtjs.org/guide/vuex-store/

// How to set vue store for dummy data
// https://blog.prototypr.io/nuxt-prototyping-storing-design-tokens-dummy-data-globally-adf97ab47eeb

export const state = () => ({
  test: 0,
  // currentPlace: {
  //   title: 'STore Title Defaul 11',
  //   address: false,
  //   thumb: '000_place_fallback.jpg',
  //   thumbCredits: false,
  //   website: false,
  //   fbPage: false,
  //   position: {
  //     lat: false,
  //     lng: false,
  //   },
  // }
})

export const mutations = {
  updateCurrentItem (state) {
    state.test++
  }
}
