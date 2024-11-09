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
import GQL_QUERY_PAGE_BY_URL_REFERENCE from '../graphql/page'

// TODO: all this types seems too much. to check again
type TypePageCollectionItemRichTextContentMarks = {
    type: string
}

type TypePageCollectionItemRichTextContent = {
    data: object
    nodeType: string
    value: string
    marks: TypePageCollectionItemRichTextContentMarks[]
}

type TypePageCollectionItemRichTextContentList = {
    data: object
    nodeType: string
    content: TypePageCollectionItemRichTextContent[]
}

type TypePageCollectionItemRichText = {
    nodeType: string
    data: object
    content: TypePageCollectionItemRichTextContentList[]
}

type TypePageCollectionItems = {
    title: string
    description: {
        json?: TypePageCollectionItemRichText[]
    }
}

type TypePageCollection = {
    pageCollection: {
        items: TypePageCollectionItems[]
    }
}

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

const pageTitle = computed(() => {
    return page?.title
})

console.log(page)

const pageDescription = computed(() => {
    // TODO:  we have to check all types for JSON rich text api response
    // @ts-expect-error: Should expect complex JSON
    return documentToHtmlString(page?.description?.json)
})

useHead({
    title: `${page?.title} | ${runtimeConfig.public.headTitleString}`,
})
</script>

<style lang="sass">
.b-page-detail
    position: relative
    min-height: 100%
    padding: $space_04 $space_00
</style>
