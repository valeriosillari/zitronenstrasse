import type { TypeSingleSpot } from '../types/TypeSingleSpot'
import GQL_QUERY_SINGLE_SPOT_BY_ID from '../graphql/singleSpot'

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
        state: () => ({
            currentSpotData: null as TypeSingleSpot | null,
        }),

        actions: {
            resetSpotData() {
                alert('RESET')
                this.currentSpotData = null
            },

            async updateSingleSpotSelectedState(singleSpotSysId: string) {
                // reset | enable UI "fade" effect
                this.resetSpotData()

                // remove component itself when fade completed (vue IF logic)
                console.log('======== this.currentSpotData | AFTER ==========')
                console.log(this.currentSpotData)

                apiCallResponse(singleSpotSysId).then((singleSpotData) => {
                    console.log(
                        '======== this.currentSpotData | THEN done =========='
                    )
                    console.log(singleSpotData)
                    console.log(typeof singleSpotData)

                    this.currentSpotData = singleSpotData
                })
            },
        },
    }
)
