import GQL_QUERY_SINGLE_SPOT_BY_ID from '@/graphql/singleSpot'
import type {
    TypeSingleSpotByIdQuery,
    TypeSingleSpotDetails,
} from '@Types/TypeSingleSpot'

type SpotSelectionStatus = 'idle' | 'loading' | 'success' | 'error'

export const useSingleSpotSelectedStore = defineStore(
    'singleSpotSelectedStore',
    () => {
        const apolloClient = useNuxtApp().$apollo.defaultClient

        const currentSpotData = ref<TypeSingleSpotDetails | null>(null)
        const selectedSpotSysId = ref<string | null>(null)
        const status = ref<SpotSelectionStatus>('idle')
        const errorMessage = ref<string | null>(null)

        // Keep this outside reactive state; it only guards overlapping requests.
        let requestId = 0

        const resetSelection = () => {
            requestId += 1
            currentSpotData.value = null
            selectedSpotSysId.value = null
            status.value = 'idle'
            errorMessage.value = null
        }

        const selectSpot = async (singleSpotSysId: string) => {
            if (
                selectedSpotSysId.value === singleSpotSysId &&
                (status.value === 'loading' || status.value === 'success')
            ) {
                return
            }

            const currentRequestId = ++requestId
            selectedSpotSysId.value = singleSpotSysId
            currentSpotData.value = null
            status.value = 'loading'
            errorMessage.value = null

            try {
                const { data } =
                    await apolloClient.query<TypeSingleSpotByIdQuery>({
                        query: GQL_QUERY_SINGLE_SPOT_BY_ID,
                        variables: {
                            id: singleSpotSysId,
                        },
                    })

                if (currentRequestId !== requestId) return

                if (!data.singleSpot) {
                    throw new Error('The selected place was not found.')
                }

                currentSpotData.value = data.singleSpot
                status.value = 'success'
            } catch {
                if (currentRequestId !== requestId) return

                status.value = 'error'
                errorMessage.value =
                    'Could not load this place. Select its marker to try again.'
            }
        }

        return {
            currentSpotData,
            selectedSpotSysId,
            status,
            errorMessage,
            resetSelection,
            selectSpot,
        }
    }
)
