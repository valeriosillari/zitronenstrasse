export type TypePageCollectionItem = {
    sys: {
        id: string
    }
    title: string
    urlReference: string
}

export type TypePageCollection = {
    pageCollection: {
        total: number
        items: TypePageCollectionItem[]
    }
}
