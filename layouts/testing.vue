<template lang="pug">
  .layout-wrapper
    //- nuxt tag
    nuxt
</template>

<script>
  export default {
    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('TESTING - 001')
    }
  }
</script>
