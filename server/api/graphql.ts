export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)

    // get original API endpoint, with secrets
    const originalUrl = config.originalEndpointToBeProxied

    // proxy the url, set a new "protected one"
    const finalProxyUrl = proxyRequest(event, originalUrl)

    // proxy: use it
    return finalProxyUrl
})
