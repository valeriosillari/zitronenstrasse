import type { TypeSingleSpot } from '../types/TypeSingleSpot'
import GQL_QUERY_SINGLE_SPOT_BY_ID from '../graphql/singleSpot'

const spotInitialState = {
    currentSpotData: {
        id: 0,
        title: '',
        imageCredits: '',
        image: {
            title: '',
            url: '',
        },
        addressStreet: '',
        urlWebsite: '',
        urlFacebook: '',
        urlInstagram: '',
    },
}

const apiCallResponse = async (singleSpotSysId: string) => {
    const { data } = await useAsyncQuery<TypeSingleSpot>(
        GQL_QUERY_SINGLE_SPOT_BY_ID,
        {
            id: singleSpotSysId,
        }
    )

    return data?.value?.singleSpot
}

export const useSingleSpotSelectedStore = defineStore(
    'singleSpotSelectedStore',
    {
        // arrow function recommended for full type inference
        state: () => spotInitialState,

        actions: {
            updateSingleSpotSelectedState(singleSpotSysId: string) {
                // reset | enable UI "fade" effect
                this.currentSpotData = spotInitialState

                this.currentSpotData = apiCallResponse(singleSpotSysId).then(
                    (singleSpotData) => {
                        this.currentSpotData = singleSpotData
                    }
                )
            },
        },
    }
)
