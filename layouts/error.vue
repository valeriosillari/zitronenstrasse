<template lang="pug">
//- main area
section.section.section-error
    .container
        //- div with css bg as svg | compass
        .svg-icon-compass

        h1.error-code
            | {{ error.statusCode }}

        //- here text textplain otherwise issue with storyblok. to re-check
        h2.error-message
            | This page could not be found

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
        // Set Meta Tags for this Page
        return {
            title: `Error Page | ${this.$config.metaHeadData.titleShort}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Error Page | ${this.$config.metaHeadData.description}`,
                },
            ],
        }
    },
}
</script>

<style lang="sass">
.error-message
  @include font-size($h4-font-size)
  color: $color_error_page_subtitle

.section-error
  text-align: center
  min-height: 100%

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
