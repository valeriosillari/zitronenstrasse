<template lang="pug">
  .layout-wrap

    //- navbar
    Navbar

    //- main area
    .container
      section.section.section-error(style='min-height: 1200px;')

        div.icon-compass

        h1.error-code
          | {{ error.statusCode }}

        h2.error-message
          | {{ error.message }}

        p(v-if='error.statusCode === 404')
          nuxt-link.tem-link.error-link(to="/")
            | Back to the home page

    //- footer
    FooterArea
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import FooterArea from '~/components/FooterArea.vue'

  export default {
    components: {
      Navbar,
      FooterArea
    },
    name: 'nuxt-error',
    props: ['error'],
    head () {
      return {
        title: this.error.message || 'An error occured'
      }
    }
  }
</script>

<style lang="sass">
  
  .error-message
    @extend .h4
    color: $color_dark_05

  .section-error
    text-align: center

  .icon-compass
    width: 260px
    height: 260px
    margin: 30px auto
    background: red
</style>style>