<template lang="pug">
.no-js-fallback
    .content
        p.h6
            | Ops! 😮 😮 😮
        p
            | Looks like you have Javascript disabled.
        p
            | You can also continue watching the website without Javascript.
        p
            | But you will lose a lot of fun ...
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
@keyframes slideFallbackMobile
  0%
    transform: translateY(-100%)
    margin-top: -#{$no_js_fallback_box_alert_height_mobile}

  75%
    transform: translateY(-100%)
    margin-top: -#{$no_js_fallback_box_alert_height_mobile}

  // reset, show box
  100%
    transform: translateY(0)
    margin-top: 0

@keyframes slideFallbackDesktop
  0%
    transform: translateY(-100%)
    margin-top: -#{$no_js_fallback_box_alert_height_desktop}

  75%
    transform: translateY(-100%)
    margin-top: -#{$no_js_fallback_box_alert_height_desktop}

  // reset, show box
  100%
    transform: translateY(0)
    margin-top: 0

.no-js-fallback
  align-items: center
  justify-content: center
  background: $color_fallback_bg
  border-bottom: 1px solid $color_fallback_border
  color: $color_fallback_text
  overflow: hidden
  // animation with slide trick
  animation: $no_js_fallback_delay_time ease 0s normal forwards 1 slideFallbackMobile
  +breakpoint($breakpoint_xs)
    animation: $no_js_fallback_delay_time ease 0s normal forwards 1 slideFallbackDesktop

  // content area: centered by flexbox
  .content
    padding: 10px 15px
    font-size: 0.75rem
    line-height: .9rem

// if you got js enable, no box at all.
.js
  .no-js-fallback
    display: none
</style>
