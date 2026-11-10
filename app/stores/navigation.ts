export const useNavigationStore = defineStore('navigationStore', {
    // arrow function recommended for full type inference
    state: () => ({
        isNavOpen: false,
    }),

    actions: {
        toggleNavState() {
            this.isNavOpen = !this.isNavOpen
        },

        closeNavState() {
            this.isNavOpen = false
        },
    },
})
