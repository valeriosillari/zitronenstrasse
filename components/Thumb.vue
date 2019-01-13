<template lang="pug">
  .thumb-area

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

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('============== Mounted - THUMB ================')
      console.log(process.env.DEPLOY_ENV)
    }

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
