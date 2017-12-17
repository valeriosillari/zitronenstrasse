<template>
  <div
    class="navigation"
    v-bind:class="{ isNavOpen: isNavOpen }"
  >

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
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li>
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

  .btn-menu
    position: relative
    float: right
    height: $button_navigation_height
    width: $button_navigation_width
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
      height: 70%
      top: 50%
      transform: translateY(-50%)
      font-size: 90px
      text-align: center

    ul
      list-style: none
      padding: 0
      margin: 0 auto
      display: inline-block
      position: relative
      height: 100%

    li
      display: block
      height: 30%
      height: calc(100% / 3)
      min-height: 50px
      position: relative
      opacity: 0

    a
      display: block
      position: relative
      line-height: 1.5
      color: $color_navigation_overlay_text
      overflow: hidden
      &:after
        content: ''
        position: absolute
        bottom: 0
        left: 50%
        width: 0%
        transform: translateX(-50%)
        height: 3px
        background: $color_navigation_overlay_text_hvr
        transition: .4s
      &:hover,
      &:focus
        color: $color_navigation_overlay_text_hvr
        text-decoration: none
        &:after
          width: 100%


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

      li
        animation: fadeInRight .5s ease forwards
        animation-delay: .35s

        &:nth-of-type(2)
          animation-delay: .4s

        &:nth-of-type(3)
          animation-delay: .45s

        &:nth-of-type(4)
          animation-delay: .50s
</style>
