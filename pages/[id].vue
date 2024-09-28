<template>
    <div class="b-page-detail">
        <div class="container">
            <h1>
                {{ page.title }}
            </h1>

            <AtomsRichText :rich-text="documentToHtmlString(descriptionText)" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import GQL_QUERY_PAGE_BY_URL_REFERENCE from '../graphql/page'

const route = useRoute()

const runtimeConfig = useRuntimeConfig()

const gql_query_vars = {
    limit: runtimeConfig.public.limitQueryGql,
    urlReference: route.params.id,
}

const { data } = await useAsyncQuery(
    GQL_QUERY_PAGE_BY_URL_REFERENCE,
    gql_query_vars
)
const page = data._rawValue.pageCollection.items[0]

const descriptionText = page.description.json
</script>

<style lang="sass">
.b-page-detail
    position: relative
    min-height: 100%
    padding: $space_04 $space_00
</style>
