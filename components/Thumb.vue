<template lang="pug">
  .thumb-area

    //- you need IF for load page. So no errors
    img.thumb(
      v-if='currentThumb.thumbPath'
      :alt='currentThumb.title'
      :src="`/places/${currentThumb.thumbPath}`"
    )

    p.credits(
      v-if='currentThumb.credits'
    )
      | Credits: {{ currentThumb.credits }}
</template>


<script>
  export default {
    props: {
      // created object with all info for details
      currentThumb: {
        type: Object,
        required: true,
      }
    },
  }
</script>


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
