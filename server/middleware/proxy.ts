import CONFIG from '@/config/config'

const graphqlEndpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_GQL_SPACE}?access_token=${process.env.CONTENTFUL_GQL_TOKEN}`

export default defineEventHandler(async (event) => {
    if (!event.node.req.url?.startsWith(CONFIG.apiUrl)) return

    const url = graphqlEndpoint + event.node.req.url.replace(CONFIG.apiUrl, '')

    console.log('========== URL ==========')
    console.log(url)

    const headers = Object.fromEntries(
        Object.entries(getRequestHeaders(event)).map(([key, value]) => [
            key,
            Array.isArray(value) ? value.join(', ') : value || '',
        ])
    )

    // Just method POST and GET are allowed
    const method = (event.node.req.method?.toUpperCase() ?? 'POST') as
        | 'GET'
        | 'POST'

    console.log('========== headers ==========')
    console.log(headers)

    console.log('========== method ==========')
    console.log(method)

    return await $fetch(url, {
        method,
        headers,
        body: method !== 'GET' ? await readBody(event) : undefined,
    })
})
