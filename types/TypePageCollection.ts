import type { Document } from '@contentful/rich-text-types'

export type TypePageCollectionItem = {
    sys: {
        id: string
    }
    title: string
    urlReference: string
    description: {
        json: Document
    }
}

export type TypePageCollection = {
    pageCollection: {
        total: number
        items: TypePageCollectionItem[]
    }
}
