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
// TODO: remove types import, set in config file
import type { TypePageCollection } from '../types/TypePageCollection'

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
