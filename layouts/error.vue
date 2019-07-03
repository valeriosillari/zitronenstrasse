<template lang="pug">

  //- main area
  section.section.section-error
    .container

      //- div with css bg as svg | compass
      .svg-icon-compass

      h1.error-code
        | {{ error.statusCode }}

      h2.error-message
        | {{ error.message }}

      p(v-if='error.statusCode === 404')
        nuxt-link.error-link(to='/', title='Back to the home page')
          | Back to the home page
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
      default: () => ({
        message: String,
      }),
    },
  },
  head() {
    return {
      title: this.error.message || 'An error occured',
    }
  },
}
</script>

<style lang="sass">
.error-message
  // @extend .h4
  color: $color_error_page_subtitle

.section-error
  text-align: center

.svg-icon-compass
  width: 260px
  height: 260px
  margin: 30px auto
  // we set svg as image in css. nuxt is happy, but we lost the fill color options
  // trick for assets loaded on Nuxt 2
  // "~assets/", NOT "~/assets/" : removed slash
  // info: https://github.com/nuxt/nuxt.js/issues/3723
  background-image: url('~assets/svg/compass.svg')
</style>
