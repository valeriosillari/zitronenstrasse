import type { Document } from '@contentful/rich-text-types'

export type TypePageLink = {
    sys: {
        id: string
    }
    title: string
    urlReference: string
}

export type TypePageDetails = {
    title: string
    urlReference: string
    description?: {
        json: Document
    } | null
}

export type TypePageCollection = {
    pageCollection: {
        total: number
        items: TypePageLink[]
    }
}

export type TypePageByReferenceQuery = {
    pageCollection: {
        items: TypePageDetails[]
    }
}
