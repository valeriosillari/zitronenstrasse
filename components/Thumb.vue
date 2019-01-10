<template lang="pug">
  .thumb-area
    img.thumb(
      :alt='currentMarkerDetails.title'
      :src='currentMarkerDetails.thumb'
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
