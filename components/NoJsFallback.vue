<template lang="pug">
  .no-js-fallback
    .content
      | Sorry you got no JS
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
      background: red
      color: white

      // fade in animation
      animation: 3s ease 0s normal forwards 1 fadein

      // content area: centered by flexbox
      .content
        max-width: 50%
</style>
