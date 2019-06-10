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
    console.log('Test deploy netlify 001')
  }
}
</script>
