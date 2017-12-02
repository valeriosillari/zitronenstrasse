<template lang="pug">
  .layout-wrap
    //- navbar
    navbar
    //- nuxt tag
    nuxt
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>
