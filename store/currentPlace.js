// Nuxt + Vue Store
// https://nuxtjs.org/guide/vuex-store/

export const state = () => ({
  currentItem: false
})

export const mutations = {
  updateCurrentPlace (state, newUpdatePlace) {

    // set store object with new update data (an object)
    state.currentItem = newUpdatePlace

    console.log('============== STORE Update (mutation) ================')
    console.log(state.currentItem.title)

  },
}
