export const useSingleSpotSelectedStore = defineStore(
    'singleSpotSelectedStore',
    {
        // arrow function recommended for full type inference
        state: () => ({
            currentSpotData: {},
        }),

        actions: {
            updateSingleSpotSelectedState(singleSpotSysId: string) {
                console.log(
                    '============ STORE SPOT | singleSpotSysId ========='
                )
                console.log(singleSpotSysId)

                // this.currentSpotId = data

                this.currentSpotData = {
                    id: 1,
                    title: 'cippa',
                    imageCredits: 'xsdgsd',
                    image: {
                        title: 'sdgsd',
                        url: '',
                    },
                    addressStreet: 'street',
                    urlWebsite: 'https://urlWebsite.com',
                    urlFacebook: 'https://urlFacebook.com',
                    urlInstagram: 'https://urlInstagram.com',
                }
            },
        },
    }
)

// import type { TypeSingleSpot } from '../../types/TypeSingleSpot'
// import GQL_QUERY_SINGLE_SPOT_BY_ID from '../../graphql/singleSpot'

const currentSpotData = ref({
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
})

// const getDataSingleSpot = async (idString: string) => {
//     console.log('>>>> FUNCION getDataSingleSpot')

//     const { data } = await useAsyncQuery<TypeSingleSpot>(
//         GQL_QUERY_SINGLE_SPOT_BY_ID,
//         {
//             id: idString,
//         }
//     )

//     console.log('>>>> data reposne HERE OK <<<<<<')

//     currentSpotData.value = data.value?.singleSpot

//     return data

//     // return false
// }
