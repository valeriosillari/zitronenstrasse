export const useSidebarStore = defineStore('sidebarStore', {
    // arrow function recommended for full type inference
    state: () => ({
        isSidebarOpen: true,
    }),

    actions: {
        openSidebarState() {
            this.isSidebarOpen = true
        },

        closeSidebarState() {
            this.isSidebarOpen = false
        },

        resetSidebarState() {
            if (this.isSidebarOpen) {
                // TODO: set time here as CONFIG VALUE, set also on CSS. one value everywhere
                setTimeout(() => {
                    this.isSidebarOpen = false
                }, 350)
            }
        },
    },
})
