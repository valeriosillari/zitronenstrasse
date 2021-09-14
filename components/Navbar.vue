<template lang="pug">
nav.navigation(role='navigation', v-bind:class='{ "is-nav-open": isNavOpen }')
    nuxt-link.logo-link(to='/', title='Home')
        .logo

    .btn-menu(v-on:click='isNavOpen = !isNavOpen')
        span.btn-menu-line.top
        span.btn-menu-line.middle
        span.btn-menu-line.bottom

    .overlay
        nav.overlay-menu
            ul.items
                //- css var logi to pass dynamic vars from vue to css
                //- https://www.telerik.com/blogs/passing-variables-to-css-on-a-vue-component
                li.item(v-for='(item, index) in naviItems', :style='cssVars')
                    nuxt-link.item-link(
                        v-on:click.native='removeNavOverlay()',
                        :title='item.title',
                        :to='item.link'
                    )
                        | {{ item.title }}
</template>

<script>
export default {
    data() {
        return {
            isNavOpen: false,
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
        cssVars() {
            return {
                '--navigation-item-number': this.naviItems.length,
            }
        },
    },

    methods: {
        removeNavOverlay() {
            setTimeout(() => {
                this.isNavOpen = !this.isNavOpen
            }, 350)
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
@keyframes fadeInRight
  0%
    opacity: 0
    left: 20%

  100%
    opacity: 1
    left: 0

.navigation
  position: relative
  z-index: 100
  // fixed height!
  // related to the map height trick
  height: $navi_min_height
  +paddingBoxDefaut()
  background: $color_navigation_bg
  border-bottom: 1px solid $color_navigation_border

.logo
  height: 45px
  width: 45px
  float: left
  background-image: url('~assets/svg/logo.svg')

.btn-menu
  position: relative
  float: right
  height: $button_navigation_height
  width: $button_navigation_width
  margin-top: 8px
  cursor: pointer
  transition: opacity .25s ease-in-out
  .btn-menu-line
    background: $color_navigation_btn
    border: none
    height: 5px
    width: 100%
    position: absolute
    top: 0
    left: 0
    transition:  all .35s ease-in-out
    cursor: pointer

    &:nth-of-type(2)
      top: 11px

    &:nth-of-type(3)
      top: 22px

  &:hover
    .btn-menu-line
      background: $color_navigation_btn_hvr

.overlay
  position: fixed
  background: $color_navigation_overlay_bg
  top: 0
  left: 0
  width: 100%
  height: 0%
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
    +breakpoint($breakpoint_sm)
      font-size: 11rem
      line-height: 1
    &:hover,
    &:focus
      color: $color_navigation_overlay_text_hvr

// nav is open! set EXTRA BODY class
.is-navigation-open-body
  overflow: hidden

// nav is open! see overlay
.is-nav-open

  .btn-menu
    z-index: 200
    .btn-menu-line
      background: $color_ico_close
    .top
      transform: translateY(11px) translateX(0) rotate(45deg)
    .middle
      opacity: 0
    .bottom
      transform: translateY(-11px) translateX(0) rotate(-45deg)
    &:hover
      .btn-menu-line
        background: $color_ico_close_hvr

  .overlay
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

// === no JS logic | modernizr ===
// not show menu button
.no-js
  .btn-menu
    display: none
</style>
