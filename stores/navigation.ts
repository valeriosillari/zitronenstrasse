export const useNavigationStore = defineStore('navigationStore', {
    // arrow function recommended for full type inference
    state: () => ({
        isNavOpen: false,
    }),

    actions: {
        toggleNavState() {
            this.isNavOpen = !this.isNavOpen
        },

        resetNavState() {
            if (this.isNavOpen) {
                setTimeout(() => {
                    this.isNavOpen = false
                }, 350)
            }
        },
    },
})
