// =======
export type TypeConfig = {
    authorName: string
    htmlNoJsClass: string
    htmlYesJsClass: string
    title: string
    appMainUrl: string
    valeSiteRoot: string
    apiUrl: string
    description: string
    keywords: string
    localPort: number
    appVersion: string
}

// =======
export type TypeMetaDataItem = {
    name?: string
    property?: string
    content: string
}

export type TypeMetaData = TypeMetaDataItem[]

// =======
export type TypeHomeLink = {
    url: string
    text: string
}
