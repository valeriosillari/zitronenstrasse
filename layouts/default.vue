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
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import FooterArea from '~/components/FooterArea.vue'
  import NoJsFallback from '~/components/NoJsFallback.vue'
  export default {
    components: {
      Navbar,
      FooterArea,
      NoJsFallback
    },
    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('🍋 🍋 🍋 - test verification owner key')
    }
  }
</script>
