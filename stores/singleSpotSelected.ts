interface Interface_SingleSpot {
    title: string
    id: number
    image?: {
        title: string
        url: string
    }
    imageCredits?: string
    addressStreet: string
    urlWebsite?: string
    urlFacebook?: string
    urlInstagram?: string
}

const dataInitState = {
    title: '',
    id: 0,
    image: {
        title: '',
        url: '',
    },
    imageCredits: '',
    addressStreet: '',
    urlWebsite: '',
    urlFacebook: '',
    urlInstagram: '',
}

export const useSingleSpotSelectedStore = defineStore(
    'singleSpotSelectedStore',
    {
        // arrow function recommended for full type inference
        state: () => ({
            currentSpot: dataInitState,
        }),

        actions: {
            updateSingleSpotSelectedState(data: Interface_SingleSpot) {
                this.currentSpot = data
            },

            resetSidebarState() {
                this.currentSpot = dataInitState
            },
        },
    }
)
