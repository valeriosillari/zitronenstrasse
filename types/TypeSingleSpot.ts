export type TypeSingleSpotData = {
    id: number
    title: string
    imageCredits?: string
    image?: {
        title?: string
        url: string
    }
    addressStreet: string
    urlWebsite?: string
    urlFacebook?: string
    urlInstagram?: string
}

export type TypeSingleSpot = {
    singleSpot: TypeSingleSpotData
}
