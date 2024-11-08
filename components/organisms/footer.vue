<template>
    <footer class="b-footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-10 col-sm-7 col-md-8 col-left">
                    <p class="footer-text">
                        Zitronenstrasse {{ dateYear }} | v{{ appVersion }}
                    </p>

                    <p class="footer-text">
                        <NuxtLink
                            v-for="link in footerLinks"
                            :key="link.title"
                            class="footer-link"
                            :title="link.title"
                            :to="link.urlReference"
                        >
                            {{ link.title }}
                        </NuxtLink>
                        | A project by
                        <NuxtLink
                            :title="$config.public.valeSiteAuthorName"
                            :to="$config.public.valeSiteRoot"
                            class="footer-link"
                        >
                            {{ $config.public.valeSiteAuthorName }}
                        </NuxtLink>
                    </p>
                </div>

                <div class="col-sm-5 col-md-4 col-right">
                    <MoleculesSocialLinkList />
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import GQL_QUERY_PAGE_COLLECTION from '../../graphql/pageCollection'

import packageJson from '../../package.json'

type TypePageCollectionItem = {
    sys: {
        id: string
    }
    title: string
    urlReference: string
}

type TypePageCollection = {
    pageCollection: {
        total: number
        items: TypePageCollectionItem[]
    }
}

const dateYear = new Date().getFullYear()
const appVersion = packageJson.version

const runtimeConfig = useRuntimeConfig()

const query_collection_vars = {
    limit: runtimeConfig.public.limitQueryGql,
    urlReferenceIn: ['privacy'],
}

const { data } = await useAsyncQuery<TypePageCollection>(
    GQL_QUERY_PAGE_COLLECTION,
    query_collection_vars
)

const footerLinks = data.value?.pageCollection?.items
</script>

<style lang="sass">
.b-footer
    font-size: 14px
    padding: 30px 0
    color: $color_footer_text
    background: $color_footer_bg
    border-top: 1px solid $color_footer_border

    .footer-text
        margin-bottom: 0.025rem

    .footer-link
        color: $color_footer_link

        &:hover,
        &:focus
            color: $color_footer_link_hvr
</style>
