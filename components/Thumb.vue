<template lang="pug">
  .thumb-area

    img.thumb(
      v-if='currentThumb.thumbPath'
      :alt='currentThumb.title'
      :src="`${thumbPath}${currentThumb.thumbPath}`"
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

    data () {
      return {
        // map
        thumbPath: `${process.env.deployUrl.router}/places/`
      }
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('============== Mounted - THUMB ================')
      // console.log(deployUrl)
      console.log(process.env.deployUrl)
      console.log(process.env.deployUrl.router)
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
