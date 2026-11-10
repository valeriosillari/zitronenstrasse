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
import GQL_QUERY_PAGE_BY_URL_REFERENCE from '@/graphql/page'
import type { TypePageByReferenceQuery } from '@Types/TypePageCollection'

const route = useRoute()

const runtimeConfig = useRuntimeConfig()

const gql_query_vars = reactive({
    limit: runtimeConfig.public.limitQueryGql,
    urlReference: String(route.params.id ?? ''),
})

watch(
    () => route.params.id,
    (urlReference) => {
        gql_query_vars.urlReference = String(urlReference ?? '')
    }
)

const { data, status } = await useAsyncQuery<TypePageByReferenceQuery>(
    GQL_QUERY_PAGE_BY_URL_REFERENCE,
    gql_query_vars
)

const page = computed(() => data.value?.pageCollection?.items[0])

// If there's no data/page, throw an error to trigger the error page
if (!page.value) {
    throw createError({ statusCode: 404, message: 'Page not found' })
}

// The same dynamic page component is reused when navigating between page IDs.
watch(status, (queryStatus) => {
    if (queryStatus === 'success' && !page.value) {
        showError(createError({ statusCode: 404, message: 'Page not found' }))
    }
})

const pageTitle = computed(() => {
    return page.value?.title
})

const pageDescription = computed(() => {
    if (page.value?.description) {
        return documentToHtmlString(page.value.description.json)
    }
    return false
})

const pageMetaTitle = computed(() => {
    return `${page.value?.title} | ${runtimeConfig.public.headTitleString}`
})

const urlDynamicUrl = computed(
    () => `${runtimeConfig.public.appMainUrl}${route.fullPath}`
)

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
            content: urlDynamicUrl,
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
            href: urlDynamicUrl,
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
