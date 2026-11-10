export type TypeSingleSpotMapItem = {
    id: number
    sys: {
        id: string
    }
    title: string
    address: {
        lat: number
        lon: number
    }
}

export type TypeSingleSpotDetails = {
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

export type TypeSingleSpotByIdQuery = {
    singleSpot: TypeSingleSpotDetails | null
}

export type TypeSingleSpotCollection = {
    singleSpotCollection: {
        total: number
        items: TypeSingleSpotMapItem[]
    }
}
