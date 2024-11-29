// TODO: all this types for DESCRIPTION seems too much. to check again

export type TypePageCollectionItemRichTextContentMarks = {
    type: string
}

export type TypePageCollectionItemRichTextContent = {
    data: object
    nodeType: string
    value: string
    marks: TypePageCollectionItemRichTextContentMarks[]
}

export type TypePageCollectionItemRichTextContentList = {
    data: object
    nodeType: string
    content: TypePageCollectionItemRichTextContent[]
}

export type TypePageCollectionItemRichText = {
    nodeType: string
    data: object
    content: TypePageCollectionItemRichTextContentList[]
}

export type TypePageCollectionItem = {
    sys: {
        id: string
    }
    title: string
    urlReference: string
    description: {
        json?: TypePageCollectionItemRichText[]
    }
}

export type TypePageCollection = {
    pageCollection: {
        total: number
        items: TypePageCollectionItem[]
    }
}
