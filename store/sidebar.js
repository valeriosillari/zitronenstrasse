// Nuxt + Vue Store
// https://nuxtjs.org/guide/vuex-store/

// set default store object at app start
export const state = () => ({
  isOpen: false
})

export const mutations = {
  isSidebarOpen (state, newUpdateState) {
    // set store object with new update data (an object)
    state.isOpen = newUpdateState
  },
}
