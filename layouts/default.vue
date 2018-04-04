<template lang="pug">
  .layout-wrapper
    //- navbar
    Navbar
    //- nuxt tag
    nuxt
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
    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('🍋 🍋 🍋 - 001')
    }
  }
</script>
