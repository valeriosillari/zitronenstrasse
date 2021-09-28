<template lang="pug">
.overlay(v-bind:class='{ "is-nav-open": isNavOpen }')
    nav.overlay-menu
        ul.items
            //- css var logi to pass dynamic vars from vue to css
            //- https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
            li.item(v-for='(item, index) in naviItems', :style='cssVars')
                //- link to another page + trigger also overlay removal
                nuxt-link.item-link(
                    @click='handleClickNavigation()',
                    :title='item.title',
                    :to='item.link'
                )
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

    // head() {
    //     return {
    //         // OVERRIDE the logic in vue config for body element.
    //         // we have to ADD just one class
    //         bodyAttrs: {
    //             class: this.isNavOpen ? 'is-navigation-open-body' : '',
    //         },
    //     }
    // },
}
</script>

<style lang="sass">
@keyframes fadeInRight
  0%
    opacity: 0
    left: 20%

  100%
    opacity: 1
    left: 0

.overlay
  position: fixed
  // background: $color_navigation_overlay_bg
  background: green
  top: 0
  left: 0
  width: 100%
  height: 0
  opacity: 0
  visibility: hidden
  transition: opacity $animation_navigation_overlay, visibility $animation_navigation_overlay, height $animation_navigation_overlay
  overflow: hidden

  nav
    position: relative
    height: 85%
    top: 50%
    transform: translateY(-50%)
    font-size: 80px
    text-align: center

  // UL
  .items
    list-style: none
    padding: 0
    margin: 0 auto
    display: inline-block
    position: relative
    width: 100%
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

  // // nav is open! set EXTRA BODY class
  // .is-navigation-open-body
  //   overflow: hidden

  // nav is open! see overlay
  &.is-nav-open
    opacity: 1
    visibility: visible
    height: 100%

    .item
      animation: fadeInRight .5s ease forwards
      animation-delay: .35s

      &:nth-of-type(2)
        animation-delay: .4s

      &:nth-of-type(3)
        animation-delay: .45s

      &:nth-of-type(4)
        animation-delay: .5s
</style>
