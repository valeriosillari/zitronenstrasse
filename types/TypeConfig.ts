// =======
export type TypeConfig = {
    projectName: string
    authorName: string
    htmlNoJsClass: string
    htmlYesJsClass: string
    title: string
    appMainUrl: string
    authorSiteRoot: string
    apiUrl: string
    description: string
    keywords: string
    localPort: number
    twitterSite: string
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
