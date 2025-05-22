<template>
    <div class="b-page-detail">
        <div class="container">
            <h1>
                {{ pageTitle }}
            </h1>

            <AtomsRichText
                v-if="pageDescription"
                :rich-text="pageDescription"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import type { TypePageCollection } from '@/types/TypePageCollection'
import GQL_QUERY_PAGE_BY_URL_REFERENCE from '@/graphql/page'

const route = useRoute()

const runtimeConfig = useRuntimeConfig()

const gql_query_vars = {
    limit: runtimeConfig.public.limitQueryGql,
    urlReference: route.params.id,
}

const { data } = await useAsyncQuery<TypePageCollection>(
    GQL_QUERY_PAGE_BY_URL_REFERENCE,
    gql_query_vars
)

const page = data.value?.pageCollection?.items[0]

// If there's no data/page, throw an error to trigger the error page
if (!page) {
    throw createError({ statusCode: 404, message: 'Page not found' })
}

const pageTitle = computed(() => {
    return page?.title
})

const pageDescription = computed(() => {
    if (page?.description) {
        return documentToHtmlString(page?.description.json)
    }
    return false
})

const pageMetaTitle = computed(() => {
    return `${page?.title} | ${runtimeConfig.public.headTitleString}`
})

const urlDynamicUrl = runtimeConfig.public.appMainUrl

useHead({
    title: pageMetaTitle,
    meta: [
        {
            // FB + Linkedin
            property: 'og:title',
            content: pageMetaTitle,
        },

        {
            property: 'og:url',
            content: `${urlDynamicUrl}${route.fullPath}`,
        },

        {
            property: 'og:image:alt',
            content: pageMetaTitle,
        },

        {
            name: 'twitter:title',
            content: pageMetaTitle,
        },

        {
            name: 'twitter:image:alt',
            content: pageMetaTitle,
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: `${urlDynamicUrl}${route.fullPath}`,
        },
    ],
})
</script>

<style lang="sass">
.b-page-detail
    position: relative
    min-height: 100%
    padding: $space_04 $space_00
</style>
