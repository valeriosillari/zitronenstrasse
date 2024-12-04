export type TypeSingleSpotData = {
    id: number
    sys: {
        id: string
    }
    title: string
    imageCredits?: string
    image?: {
        title?: string
        url: string
    }
    addressStreet: string
    address: {
        lat: number
        lon: number
    }
    urlWebsite?: string
    urlFacebook?: string
    urlInstagram?: string
}

export type TypeSingleSpot = {
    singleSpot: TypeSingleSpotData
}

export type TypeSingleSpotCollection = {
    singleSpotCollection: {
        items: TypeSingleSpotData[]
    }
}
