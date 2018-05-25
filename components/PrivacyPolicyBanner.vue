<template lang="pug">
  //- small trick for SSR (document not found) using SSR tag.
  //- info here:
  //- https://github.com/apertureless/vue-cookie-law/issues/19 | indifisher commented on 23 Apr
  no-ssr
    cookie-law(theme='lemon-theme' buttonText='I agree')
      div(slot='message')
        | This site uses some cookies in order to count visits. By clicking the 'I agree' button you give your consent.
        | More info here about Privacy Policy
        |
        nuxt-link.link-text(to='/privacy-policy' title='Privacy Policy Info')
          | here
        |.
</template>


<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    components: { CookieLaw }
  }
</script>


<style lang="sass">
  .Cookie--lemon-theme
    padding: 20px 15px
    background: $color_banner_bg
    .Cookie__content
      color: $color_banner_content_text

    .Cookie__button
      padding: 10px 45px
      border: 1px solid $color_banner_btn_border
      color: $color_banner_btn_txt
      &:hover
        border: 1px solid $color_banner_btn_border_hvr
        color: $color_banner_btn_txt_hvr
</style>
