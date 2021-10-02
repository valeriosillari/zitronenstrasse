<template lang="pug">
.overlay(:class='{ "is-overlay-show": isNavOpen }')
    nav.overlay-menu
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

.overlay
    background: green
    bottom: -100%
    width: 100%
    overflow: hidden
    transition: all .35s ease-in-out
    display: flex
    align-items: center
    justify-content: center
    height: 0
    position: absolute
    z-index: 10


    &.is-overlay-show
        background: #0f0
        bottom: 0
        // 100% - header height?
        height: 100%

    .overlay-menu
        position: relative
        font-size: 80px
        text-align: center

    // UL
    .items
        list-style: none
        padding: 0
        margin: 0 auto
        display: inline-block
        position: relative

    // LI
    .item
        display: block
        // height: calc(100% / var(--navigation-item-number))
        position: relative
        display: flex
        align-items: center
        justify-content: center
</style>
