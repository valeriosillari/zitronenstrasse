export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event)

    // get original API endpoint, with secrets
    const originalUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_GQL_SPACE}?access_token=${process.env.CONTENTFUL_GQL_TOKEN}`

    // proxy the url, set a new "protected one"
    const finalProxyUrl = proxyRequest(event, originalUrl)

    // proxy: use it
    return finalProxyUrl
})
