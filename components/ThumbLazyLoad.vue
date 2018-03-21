<!-- this component actually is not with lazy load yet, we work on it ... -->

<template lang="pug">
  .thumb-area
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

    span.credits(
      v-if='infoThumbLazyLoad.thumbCredits'
    )
      | Credits: {{ infoThumbLazyLoad.thumbCredits }}
</template>


<style lang="sass">
  .thumb-area
    margin: 20px auto

  .thumb
    +img-fluid

  .credits
    font-size: .65rem
    color: $color_sidebar_credits
</style>


<script>
  export default {
    // input from PARENTS
    props: [
      'infoThumbLazyLoad'
    ]
  }
</script>
