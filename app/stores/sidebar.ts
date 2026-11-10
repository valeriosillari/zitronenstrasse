export const useSidebarStore = defineStore('sidebarStore', {
    // arrow function recommended for full type inference
    state: () => ({
        isSidebarOpen: false,
    }),

    actions: {
        openSidebarState() {
            this.isSidebarOpen = true
        },

        closeSidebarState() {
            this.isSidebarOpen = false
        },
    },
})
