<template lang="pug">
  .no-js-fallback
    .content
      p.h2
        | Ops!
      p
        | Looks like you have Javascript disabled. 😮 😮 😮
      p
        | To enable it follow
        | &nbsp;
        a(href='https://enable-javascript.com/', target='_blank', title='Enable Javascript')
          | this link
      p
        | You can also continue watching the website without Javascript, but you will lose a lot of fun ...
      //- set here BTN close with css logic only (checkbox)
</template>


<style lang="sass">

  @keyframes fadein
    0%
      opacity: 0
    66%
      opacity: 0
    100%
      opacity: 1

  .no-js-fallback
    display: none

  .no-js
    .no-js-fallback
      display: flex
      align-items: center
      justify-content: center
      position: fixed
      z-index: 100000
      top: 0
      bottom: 0
      width: 100%
      background: $color_fallback_bg

      // fade in animation
      animation: 3s ease 0s normal forwards 1 fadein

      // content area: centered by flexbox
      .content
        max-width: 90%
        color: $color_fallback_text
        +breakpoint($breakpoint_sm)
          max-width: 50%
</style>
