const defaultValue = ''

export const useSingleSpotSelectedStore = defineStore(
    'singleSpotSelectedStore',
    {
        // arrow function recommended for full type inference
        state: () => ({
            // "0" as ID
            currentSpotId: defaultValue,
        }),

        actions: {
            updateSingleSpotSelectedState(data: string) {
                this.currentSpotId = data
            },

            // TODO: check me again
            resetSidebarState() {
                this.currentSpotId = defaultValue
            },
        },
    }
)
