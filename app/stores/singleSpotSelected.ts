import type { TypeSingleSpot } from '@/types/TypeSingleSpot'
import GQL_QUERY_SINGLE_SPOT_BY_ID from '@/graphql/singleSpot'

const apolloClient = useApolloClient()

const apiCallResponse = async (singleSpotSysId: string) => {
    const { data } = await apolloClient.client.query<TypeSingleSpot>({
        query: GQL_QUERY_SINGLE_SPOT_BY_ID,
        variables: {
            id: singleSpotSysId,
        },
    })

    return data
}

export const useSingleSpotSelectedStore = defineStore(
    'singleSpotSelectedStore',
    {
        // arrow function recommended for full type inference
        state: () => ({
            currentSpotData: null as TypeSingleSpot | null,
            isSpotShown: false,
        }),

        actions: {
            resetSpotShowState() {
                this.isSpotShown = false
                this.currentSpotData = null
            },

            updateSingleSpotSelectedState(singleSpotSysId: string) {
                apiCallResponse(singleSpotSysId).then((singleSpotData) => {
                    this.currentSpotData = singleSpotData
                    this.isSpotShown = true
                })
            },
        },
    }
)
