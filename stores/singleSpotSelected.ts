export const useSingleSpotSelectedStore = defineStore(
    'singleSpotSelectedStore',
    {
        // arrow function recommended for full type inference
        state: () => ({
            currentSpot: null,
        }),

        actions: {
            updateSingleSpotSelectedState(data) {
                this.currentSpot = data
            },

            resetSidebarState() {
                this.currentSpot = null
            },
        },
    }
)
