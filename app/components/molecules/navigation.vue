<template>
    <nav :class="['b-navigation', naviActiveClass]">
        <ul class="navigation-list">
            <li
                v-for="link in footerLinks"
                :key="link.title"
                class="navigation-item"
            >
                <NuxtLink
                    class="navigation-link"
                    :title="link.title"
                    :to="link.urlReference"
                >
                    {{ link.title }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import HOME_LINK from '@/config/homeLink'
import type { TypePageCollection } from '@/types/TypePageCollection'
import GQL_QUERY_PAGE_COLLECTION from '@/graphql/pageCollection'

const runtimeConfig = useRuntimeConfig()

const navigationStore = useNavigationStore()

// btn switch class at value change
const naviActiveClass = computed(() => ({
    'is-overlay-show': navigationStore.isNavOpen,
}))

const query_collection_vars = {
    limit: runtimeConfig.public.limitQueryGql,
    urlReferenceIn: ['about', 'contacts'],
}

const { data } = await useAsyncQuery<TypePageCollection>(
    GQL_QUERY_PAGE_COLLECTION,
    query_collection_vars
)

const footerLinks = [
    // home
    {
        urlReference: HOME_LINK.url,
        title: HOME_LINK.text,
    },
]

const responseDataLinksArray = data.value?.pageCollection?.items

if (responseDataLinksArray) {
    responseDataLinksArray.forEach((singleLink) => {
        footerLinks.push(singleLink)
    })
}

// list by API + 1 extra for Home "added statically"
const navigationItemNumber = ref(
    responseDataLinksArray ? responseDataLinksArray.length + 1 : null
)
</script>

<style lang="sass">
// keyframe move to a general file
@keyframes fadeInRight
    0%
        opacity: 0
        left: 20%
    100%
        opacity: 1
        left: 0

.b-navigation
    background: $color_navigation_overlay_bg
    bottom: -100%
    left: $space_00
    right: $space_00
    width: 100%
    overflow: hidden
    transition: all .45s ease-in-out
    display: flex
    align-items: center
    justify-content: center
    // trick, not shown at default state
    height: $space_00
    position: fixed
    z-index: $z_index_01

    // UL
    .navigation-list
        list-style: none
        padding: $space_00
        margin: $space_00 auto
        display: inline-block
        position: relative
        text-align: center
        height: 100%

        // LI
        .navigation-item
            display: block
            height: calc(100% / v-bind(navigationItemNumber))
            position: relative
            opacity: 0
            display: flex
            align-items: center
            justify-content: center

            // <a> tag
            .navigation-link
                overflow: hidden
                color: $color_navigation_overlay_text
                font-family: $font_family_secondary
                font-size: 6rem
                // TODO: set rem or px?
                line-height: 1.2
                text-decoration: none

                // for hover effect, inspired by hover.css  package ("underline-from-center")
                display: inline-block
                box-shadow: 0 0 1px transparent
                position: relative
                text-decoration: none
                transform: perspective(1px) translateZ(0)
                vertical-align: middle
                // for hover effect
                &::before
                    background: $color_navigation_overlay_border
                    bottom: 0
                    content: ''
                    height: 4px
                    left: 51%
                    position: absolute
                    right: 51%
                    transition-duration: .3s
                    transition-property: left, right
                    transition-timing-function: ease-out
                    z-index: -1

                &:hover,
                &:focus
                    color: $color_navigation_overlay_text_hvr

                    &::before
                        left: 0
                        right: 0

                &.router-link-exact-active
                    color: $color_navigation_overlay_link_exact_active
                    pointer-events: none


    &.is-overlay-show
        // 100% - header height
        height: $map_height
        bottom: $space_00

        .navigation-list
            .navigation-item
                animation: fadeInRight .5s ease forwards
                animation-delay: .35s

                &:nth-of-type(2)
                    animation-delay: .4s
                &:nth-of-type(3)
                    animation-delay: .45s
                &:nth-of-type(4)
                    animation-delay: .5s

    +breakpoint($breakpoint_sm)
        // UL
        .navigation-list
            // LI
            .navigation-item
                // <a> tag
                .navigation-link
                    font-size: 11rem
                    // TODO: set rem or px?
                    line-height: 1
</style>
