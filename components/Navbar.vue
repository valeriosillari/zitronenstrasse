<template>
  <div
    class="navigation"
    v-bind:class="{ isNavOpen: isNavOpen }"
  >

    <nuxt-link
      class="logo-link"
      to="/"
    >
      <svg
        class="logo"
        enable-background="new 0 0 70 70"
        version="1.1"
        viewBox="0 0 70 70"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000 svg"
      >
        <path class="logo-path-01" d="M35,0c7.1,0,14.3,3.2,19.4,8.4c5.2,5.8,8.4,12.3,8.4,20.1s-3.2,16.2-8.4,21.4L35,70L15.6,49.9  c-5.2-5.2-8.4-13-8.4-21.4c0-7.8,2.6-14.3,8.4-20.1C20.7,3.2,27.9,0,35,0z"/>
        <path class="logo-path-02" d="m19.9 54.4l15.1 15.6 15.2-15.7c-2-3.8-5.5-6.8-9.6-8.2v-8.1h2.6v-2h-6.2l-0.7-27.6c-0.5-0.1-1-0.2-1.6-0.2-0.3 0-0.6 0-0.9 0.1l-0.8 27.8h-6.1v2h2.6v8.1c-4.1 1.3-7.6 4.3-9.6 8.2z"/>
      </svg>
    </nuxt-link>

    <div
      class="btn-menu"
      v-on:click="isNavOpen = !isNavOpen"
    >
      <span class="btn-menu-line top"></span>
      <span class="btn-menu-line middle"></span>
      <span class="btn-menu-line bottom"></span>
    </div>

    <div class="overlay">
      <nav class="overlay-menu">
        <ul class="items">

          <li
            class="item"
            v-on:click="isNavOpen = !isNavOpen"
          >
            <nuxt-link
              class="item-link"
              to="/"
            >
              Home
            </nuxt-link>
          </li>

          <li
            class="item"
            v-on:click="isNavOpen = !isNavOpen"
          >
            <nuxt-link
              class="item-link"
              to="/about"
            >
              About
            </nuxt-link>
          </li>

          <li
            class="item"
            v-on:click="isNavOpen = !isNavOpen"
          >
            <nuxt-link
              class="item-link"
              to="/contact"
            >
              Contact
            </nuxt-link>
          </li>

        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        isNavOpen: false
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
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 100
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
    transition: opacity .35s, visibility .35s, height .35s
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
      line-height: 1.2
      color: $color_navigation_overlay_text
      overflow: hidden
      +underline-from-center()
      &:hover,
      &:focus
        color: $color_navigation_overlay_text_hvr


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
          animation-delay: .50s
</style>
