<template lang="pug">
    img.thumb(
      v-if='infoThumbLazyLoad.thumb'
      :src='infoThumbLazyLoad.thumb'
      :alt='infoThumbLazyLoad.title'
    )
    //- fallback
    img.thumb(
      v-else='infoThumbLazyLoad.thumb'
      src='/thumbs/fallback/place_fallback.jpg'
      :alt='infoThumbLazyLoad.title'
    )
</template>


<style lang="sass">
  .thumb
    +img-fluid
    margin-bottom: 20px
</style>


<script>
  export default {
    // input from PARENTS
    props: [
      'infoThumbLazyLoad'
    ]
  }
</script>
