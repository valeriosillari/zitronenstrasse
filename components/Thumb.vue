<template lang="pug">
  .thumb-area

    img.thumb(
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
        // set url path for iages. different one based on deploy env
        thumbPath: `${process.env.deployUrl.router}/places/`
      }
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
