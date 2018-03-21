<template lang="pug">
    img(
      :src='infoThumbLazyLoad.thumb'
      :alt='infoThumbLazyLoad.title'
    )
</template>


<style lang="sass">
  .thumb
    transition: opacity 1.5s ease-in-out
  // extra data attribute added via lazy loading
  img[lazy=loading]
    opacity: 0
  img[lazy=loaded]
    opacity: 1
</style>


<script>
  export default {
    // input from PARENTS
    props: [
      'infoThumbLazyLoad'
    ]
  }
</script>
