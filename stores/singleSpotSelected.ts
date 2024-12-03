import type { TypeSingleSpot } from '../types/TypeSingleSpot'
import GQL_QUERY_SINGLE_SPOT_BY_ID from '../graphql/singleSpot'

const apiCallResponse = async (singleSpotSysId: string) => {
    const { data } = await useAsyncQuery<TypeSingleSpot>(
        GQL_QUERY_SINGLE_SPOT_BY_ID,
        {
            id: singleSpotSysId,
        }
    )

    return data?.value
}

export const useSingleSpotSelectedStore = defineStore(
    'singleSpotSelectedStore',
    {
        // arrow function recommended for full type inference
        state: () => ({
            currentSpotData: null as TypeSingleSpot | null,
        }),

        actions: {
            resetSpotData() {
                this.currentSpotData = null
            },

            async updateSingleSpotSelectedState(singleSpotSysId: string) {
                // reset | enable UI "fade" effect
                this.resetSpotData()

                apiCallResponse(singleSpotSysId).then((singleSpotData) => {
                    this.currentSpotData = singleSpotData
                })
            },
        },
    }
)
