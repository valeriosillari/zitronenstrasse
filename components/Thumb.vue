<template lang="pug">
  .thumb-area
    img.thumb(
      v-if='currentMarkerDetails.thumb'
      :alt='currentMarkerDetails.title'
      :src="'/thumbs/places/' + currentMarkerDetails.thumb"
    )
    //- fallback
    img.thumb(
      v-else='currentMarkerDetails.thumb'
      :alt='currentMarkerDetails.title'
      src='/thumbs/fallback/place_fallback.jpg'
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
    props: {
      currentMarkerDetails: {
        type: Object,
        required: true,
      }
    }
  }
</script>
