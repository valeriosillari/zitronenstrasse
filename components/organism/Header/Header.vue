<template lang="pug">
header.b-header
    nuxt-link.logo-link(to='/', title='Home')
        .logo

    nuxt-link(to='/yolo', style='margin-left: 10px')
        | YOLO lnk

    nuxt-link(to='/hei', style='margin-left: 10px')
        | Hei lnk

    nuxt-link(to='/about', style='margin-left: 10px')
        | ABOUT lnk

    nuxt-link(to='/contact', style='margin-left: 10px')
        | CONTACT lnk
    //- TODO: separate vue component
    //- btn menu
    .btn-menu(
        @click='handleClickNavigation()',
        :class='{ "is-status-close": isNavOpen }'
    )
        span.btn-menu-line.top
        span.btn-menu-line.middle
        span.btn-menu-line.bottom
</template>

<script>
export default {
    computed: {
        isNavOpen() {
            return this.$store.state.navigation.isOpen
        },
    },

    methods: {
        handleClickNavigation() {
            this.$store.commit('navigation/toggleOpenState')
        },
    },
}
</script>

<style lang="sass">
.b-header
    position: relative
    z-index: 100
    // fixed height!
    // related to the map height trick
    height: $navi_min_height
    +paddingBoxDefaut()
    background: $color_header_bg
    border-bottom: 1px solid $color_header_border

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
        background: $color_header_btn
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
            background: $color_header_btn_hvr

    // nav is open! see overlay
    &.is-status-close
        z-index: 200

        .btn-menu-line
            background: $color_ico_close

            &.top
                transform: translateY(11px) translateX(0) rotate(45deg)
            &.middle
                opacity: 0
            &.bottom
                transform: translateY(-11px) translateX(0) rotate(-45deg)

        &:hover
            .btn-menu-line
                background: $color_ico_close_hvr

// === no JS logic | modernizr ===
// not show menu button
.no-js
  .btn-menu
    display: none
</style>
