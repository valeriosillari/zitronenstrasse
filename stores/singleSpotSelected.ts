import type { TypeSingleSpot } from '../types/TypeSingleSpot'
import GQL_QUERY_SINGLE_SPOT_BY_ID from '../graphql/singleSpot'

// TODO: move in or take it out? can be moved to separate file as service?
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
                apiCallResponse(singleSpotSysId).then((singleSpotData) => {
                    this.currentSpotData = singleSpotData
                })
            },
        },
    }
)
