<template lang="pug">
.no-js-fallback
    .content
        p.h6
            | Ops! 😮 😮 😮
        p
            | Looks like you have Javascript disabled.
        p
            | You can also continue watching the website without Javascript, but you will lose a lot of fun ...
        p
            | To enable JS follow the info
            |
            a(
                href='https://enable-javascript.com/',
                target='_blank',
                title='Enable Javascript'
            )
                | here
</template>

<style lang="sass">

@keyframes fadein
  0%
    opacity: 0
  66%
    opacity: 0
  100%
    opacity: 1

@keyframes cssAnimation
  to
    height: auto


.no-js-fallback
  align-items: center
  justify-content: center

  background: $color_fallback_bg
  border-bottom: 1px solid $color_fallback_border
  color: $color_fallback_text
  // fade in animation
  // animation: 5s ease 0s normal forwards 1 fadein

  // position: absolute
  // z-index: 100000
  // top: 0
  // width: 100%

  height: 0
  overflow: hidden

  animation: cssAnimation 0s ease-in 5s forwards


  // content area: centered by flexbox
  .content
    padding: 10px 15px
    font-size: 0.75rem
    line-height: .9rem

.js
  .no-js-fallback
    display: none
</style>
