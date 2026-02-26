import { provideApolloClient } from '@vue/apollo-composable'

import GQL_QUERY_SINGLE_SPOT_BY_ID from '@/graphql/singleSpot'

import type { TypeSingleSpot } from '@Types/TypeSingleSpot'

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

            async updateSingleSpotSelectedState(singleSpotSysId: string) {
                const nuxtApp = useNuxtApp()

                // default Apollo client
                const apolloClient = nuxtApp.$apollo.defaultClient

                const data = await provideApolloClient(apolloClient)(
                    async () => {
                        const { data } =
                            await apolloClient.query<TypeSingleSpot>({
                                query: GQL_QUERY_SINGLE_SPOT_BY_ID,
                                variables: {
                                    id: singleSpotSysId,
                                },
                            })

                        return data
                    }
                )

                this.currentSpotData = data
                this.isSpotShown = true
            },
        },
    }
)
