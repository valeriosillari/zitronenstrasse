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
      src='~/assets/img/thumbs/fallback/place_fallback.jpg'
      :alt='currentMarkerDetails.title'
    )

    p.credits(
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
    margin-bottom: 0
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
