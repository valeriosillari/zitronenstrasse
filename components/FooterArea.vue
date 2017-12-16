<template lang="pug">
  .footer
    .container
      | Footer here
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="sass">
  // todo: set later navi classes and styles via sass. now just dark one
  .footer
    min-height: 200px
    color: $color_footer_text
    background: $color_footer_bg
    border-top: 1px solid $color_footer_border
</style>
