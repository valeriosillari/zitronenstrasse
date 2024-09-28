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
            console.log('route is changed')
            if (this.isNavOpen) {
                setTimeout(() => {
                    this.isNavOpen = false
                    console.log('nav is resetted')
                }, 350)
            }
        },
    },
})
