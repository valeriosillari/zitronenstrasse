// Nuxt + Vue Store
// https://nuxtjs.org/guide/vuex-store/

// set default store object at app start
export const state = () => ({
  item: false
})

export const mutations = {
  updateCurrentPlace (state, newUpdatePlace) {
    // set store object with new update data (an object)
    state.item = newUpdatePlace
  },
}
