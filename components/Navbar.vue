<template lang="pug">
  //- Multi-Line Array Literal
  //- https://github.com/pugjs/pug/issues/502
  //- answer by: ForbesLindesay commented on 23 Apr 2014
  -
    var naviItems = [
      {
        title: 'Home',
        link: '/'
      },
      {
        title: 'About',
        link: '/about'
      },
      {
        title: 'Contact',
        link: '/contact'        
      }
    ];

  nav.navigation(v-bind:class='{ isNavOpen: isNavOpen }')

    nuxt-link.logo-link(to='/', title='Home')
      //- todo: here set logo as assets
      svg.logo(
      class="logo"
      enable-background="new 0 0 70 70"
      version="1.1"
      viewBox="0 0 70 70"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000 svg"
      )
        path.logo-path-01(d="M35,0c7.1,0,14.3,3.2,19.4,8.4c5.2,5.8,8.4,12.3,8.4,20.1s-3.2,16.2-8.4,21.4L35,70L15.6,49.9  c-5.2-5.2-8.4-13-8.4-21.4c0-7.8,2.6-14.3,8.4-20.1C20.7,3.2,27.9,0,35,0z")
        path.logo-path-02(d="m19.9 54.4l15.1 15.6 15.2-15.7c-2-3.8-5.5-6.8-9.6-8.2v-8.1h2.6v-2h-6.2l-0.7-27.6c-0.5-0.1-1-0.2-1.6-0.2-0.3 0-0.6 0-0.9 0.1l-0.8 27.8h-6.1v2h2.6v8.1c-4.1 1.3-7.6 4.3-9.6 8.2z")

    .btn-menu(v-on:click='isNavOpen = !isNavOpen')    
      span.btn-menu-line.top
      span.btn-menu-line.middle
      span.btn-menu-line.bottom

    .overlay
      nav.overlay-menu
        ul.items
          each item in naviItems

            li.item
              nuxt-link.item-link(
                v-on:click.native='navBarHandler(isNavOpen)'
                title=item.title
                to=item.link
              )
                =item.title


           
</template>

<script>
  export default {
    data () {
      return {
        isNavOpen: false
      }
    },
    methods: {
      toggleBodyClassAtNavOpen: function (isNavOpen) {
        this.isNavOpen = !isNavOpen
        return this.isNavOpen
      },
      // at click trigger here more events
      navBarHandler: function (isNavOpen) {
        setTimeout(() => {
          this.toggleBodyClassAtNavOpen(isNavOpen)
        }, 300)
      }
    },
    head () {
      return {
        // like this it OVERRIDE the logic in vue config. we have to ADD just one class!!!
        bodyAttrs: {
          class: this.isNavOpen ? 'isNavigationOpenBody' : ''
        }
      }
    }
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

  .logo-path-01
    fill: $color_logo_01

  .logo-path-02
    fill: $color_logo_02

  .btn-menu
    position: relative
    float: right
    height: $button_navigation_height
    width: $button_navigation_width
    margin-top: 8px
    cursor: pointer
    transition: opacity .25s ease
    .btn-menu-line
      background: $color_navigation_btn
      border: none
      height: 5px
      width: 100%
      position: absolute
      top: 0
      left: 0
      transition:  all .35s ease
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
      height: calc(100% / 3)
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
  .isNavigationOpenBody
    overflow: hidden

  // nav is open! see overlay
  .isNavOpen

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
