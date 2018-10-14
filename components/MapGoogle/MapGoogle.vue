<template lang="pug">
  .map-test
    | herererre
</template>

<style lang="sass">
  .map-test
    background: red
    color: white
    min-height: 400px
</style>

<script>
  export default {
    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('MOUNTED map component')
    }
  }
</script>
