import { defineEventHandler, proxyRequest } from 'h3'

export default defineEventHandler(async (event) => {
    // Your “real” upstream GraphQL endpoint (server-only)
    const upstream = useRuntimeConfig(event).secondAppGraphql

    // Proxies method, headers, and body to upstream
    return proxyRequest(event, upstream)
})
