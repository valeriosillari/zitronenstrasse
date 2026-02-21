import { defineEventHandler, proxyRequest } from 'h3'

export default defineEventHandler(async (event) => {
    const upstream = useRuntimeConfig(event).apiUrlFullOriginal
    return proxyRequest(event, upstream)
})
