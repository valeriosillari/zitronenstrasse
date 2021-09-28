export const state = () => ({
    isOpen: false,
})

export const mutations = {
    toggleOpenState(state) {
        state.isOpen = !state.isOpen
    },
}
