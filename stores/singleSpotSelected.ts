export const useSingleSpotSelectedStore = defineStore(
    'singleSpotSelectedStore',
    {
        // arrow function recommended for full type inference
        state: () => ({
            // "0" as ID
            currentSpotId: 0,
        }),

        actions: {
            updateSingleSpotSelectedState(data: number) {
                this.currentSpotId = data
            },

            resetSidebarState() {
                this.currentSpotId = 0
            },
        },
    }
)
