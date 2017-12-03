<template lang="pug">
  .layout-wrap
    //- navbar
    Navbar
    //- nuxt tag
    nuxt
    //- footer
    Footer
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
