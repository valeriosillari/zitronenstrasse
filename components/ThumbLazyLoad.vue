<!-- this component actually is not with lazy load yet, we work on it ... -->

<template lang="pug">
  .thumb-area
    img.thumb(
      v-if='currentMarkerDetails.thumb'
      :src='currentMarkerDetails.thumb'
      :alt='currentMarkerDetails.title'
    )
    //- fallback
    img.thumb(
      v-else='currentMarkerDetails.thumb'
      src='/thumbs/fallback/place_fallback.jpg'
      :alt='currentMarkerDetails.title'
    )

    span.credits(
      v-if='currentMarkerDetails.thumbCredits'
    )
      | Credits: {{ currentMarkerDetails.thumbCredits }}
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
      'currentMarkerDetails'
    ]
  }
</script>
