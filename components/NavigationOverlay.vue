<template lang="pug">
nav.b-navigation-overlay(:class='{ "is-overlay-show": isNavOpen }')
    ul.items
        //- css var logi to pass dynamic vars from vue to css
        //- https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
        li.item(v-for='(item, index) in naviItems', :style='cssVars')
            //- link to another page + trigger also overlay removal
            nuxt-link.item-link(:title='item.title', :to='item.link')
                | {{ item.title }}
</template>

<script>
export default {
    data() {
        return {
            naviItems: [
                {
                    title: 'Home',
                    link: '/',
                },
                {
                    title: 'About',
                    link: '/about',
                },
                {
                    title: 'Contact',
                    link: '/contact',
                },
            ],
        }
    },

    computed: {
        isNavOpen() {
            return this.$store.state.navigation.isOpen
        },

        cssVars() {
            return {
                '--navigation-item-number': this.naviItems.length,
            }
        },
    },

    methods: {
        handleClickNavigation() {
            this.$store.commit('navigation/toggleOpenState')
        },
    },

    head() {
        return {
            // OVERRIDE the logic in vue config for body element.
            // we have to ADD just one class
            bodyAttrs: {
                class: this.isNavOpen ? 'is-navigation-open-body' : '',
            },
        }
    },
}
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

.b-navigation-overlay
    background: $color_navigation_overlay_bg
    bottom: -100%
    width: 100%
    overflow: hidden
    transition: all .45s ease-in-out
    display: flex
    align-items: center
    justify-content: center
    height: 0
    position: absolute
    z-index: 10

    // UL
    .items
        list-style: none
        padding: 0
        margin: 0 auto
        display: inline-block
        position: relative
        font-size: 80px
        text-align: center
        height: 100%

        // LI
        .item
            display: block
            height: calc(100% / var(--navigation-item-number))
            position: relative
            opacity: 0
            display: flex
            align-items: center
            justify-content: center

            // <a> tag
            .item-link
                display: block
                overflow: hidden
                color: $color_navigation_overlay_text
                +underline-from-center()
                font-family: $font_family_secondary
                font-size: 6rem
                line-height: 1.2
                text-decoration: none
                +breakpoint($breakpoint_sm)
                font-size: 11rem
                line-height: 1

                &:hover,
                &:focus
                    color: $color_navigation_overlay_text_hvr

    &.is-overlay-show
        bottom: 0
        // 100% - header height
        height: calc(100% - #{$navi_min_height})

        .items
            .item
                opacity 1
                animation: fadeInRight .5s ease forwards
                animation-delay: .35s

                &:nth-of-type(2)
                    animation-delay: .4s
                &:nth-of-type(3)
                    animation-delay: .45s
                &:nth-of-type(4)
                    animation-delay: .5s
</style>
