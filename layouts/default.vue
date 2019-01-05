<template lang="pug">
  .layout-wrapper
    //- navbar
    Navbar
    //- nuxt tag (page core)
    nuxt
    //- footer
    FooterArea
    //- no js fallback
    NoJsFallback
    //- Privacy Policy Banner
    PrivacyPolicyBanner
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import FooterArea from '~/components/FooterArea.vue'
  import NoJsFallback from '~/components/NoJsFallback.vue'
  import PrivacyPolicyBanner from '~/components/PrivacyPolicyBanner.vue'
  export default {
    components: {
      Navbar,
      FooterArea,
      NoJsFallback,
      PrivacyPolicyBanner
    },
    mounted () {
      console.log('🍋 - github pages - 04')
    }
  }
</script>
