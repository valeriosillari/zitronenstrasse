<template lang="pug">
  .layout-wrapper
    Navbar

    nuxt

    Footer

    NoJsFallback

    PrivacyPolicyBanner
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import NoJsFallback from '~/components/NoJsFallback.vue'
import PrivacyPolicyBanner from '~/components/PrivacyPolicyBanner.vue'

export default {
  components: {
    Navbar,
    Footer,
    NoJsFallback,
    PrivacyPolicyBanner
  },

  mounted() {
    // empty ...
  }
}
</script>

<style lang="sass">
// need it for map area spacing and footer
html,
body,
#__nuxt,
#__layout,
.layout-wrapper
  height: 100%

a
  color: $color_link
  &:hover,
  &:focus
    color: $color_link_hvr
    text-decoration: none

.link-text
  text-decoration: underline
  &:hover
    text-decoration: underline

.text-accent
  color: $color_text_accent

.section
  min-height: 100%
  // padding top for fixed header alignment
  padding: 60px 0
</style>
