<template lang="pug">
  aside.sidebar
    //- btn area
    div.clearfix
      button.btn-close(@click='actionSidebarClose')

    h2.title
      | {{ currentMarkerDetails.title }}

    //- lazy load Thumb
    ThumbLazyLoad(:infoThumbLazyLoad='currentMarkerDetails',)

    p.address
      span.info
        | Address:
      | {{ currentMarkerDetails.address }}

    //- links area
    span.info(v-if='(currentMarkerDetails.website) || (currentMarkerDetails.fbPage)')
      | Links:


    .action-area
      p.line(v-if='currentMarkerDetails.website')
        a.link.link-website(
          :href='currentMarkerDetails.website',
          :title="currentMarkerDetails.title + ' | Official Website'",
          target='_blank'
        )
          | Official Website

      p.line(v-if='currentMarkerDetails.fbPage')
        a.link.link-facebook(
          :href='currentMarkerDetails.fbPage',
          :title="currentMarkerDetails.title + ' | Facebook Page'",
          target='_blank'
        )
          | Facebook Page
</template>


<script>
  import ThumbLazyLoad from '~/components/ThumbLazyLoad.vue'
  export default {
    components: {
      ThumbLazyLoad
    },
    // input from PARENTS
    props: [
      'currentMarkerDetails'
    ],
    methods: {
      actionSidebarClose () {
        this.$emit('isSidebarButtonClose')
      }
    }
  }
</script>


<style lang="sass">

  // class for sidebar ELEMENT, inside a FIXED wrapper
  .sidebar
    line-height: 1.5
    padding: 20px
    color: $color_sidebar_text

  .title
    @extend .h5

  // span
  .info
    @extend .small
    display: block
    color: $color_sidebar_info

  .line
    margin-bottom: 0

  // link for website and/or fb
  .link
    color: $color_sidebar_link
    &:hover
      color: $color_sidebar_link_hvr
      text-decoration: underline

  .btn-close
    position: relative
    display: inline-block
    float: right
    width: 30px
    height: 30px
    overflow: hidden
    background: $color_transparent
    border: 0
    cursor: pointer
    &:hover
      &::before,
      &::after
        background: $color_ico_close_hvr

    &::before,
    &::after
      content: ''
      position: absolute
      height: 1px
      width: 100%
      top: 50%
      left: 0
      margin-top: -1px
      background: #8e8d8d

    &::before
      -webkit-transform: rotate(45deg)
      -moz-transform: rotate(45deg)
      -ms-transform: rotate(45deg)
      -o-transform: rotate(45deg)
      transform: rotate(45deg)

    &::after
      -webkit-transform: rotate(-45deg)
      -moz-transform: rotate(-45deg)
      -ms-transform: rotate(-45deg)
      -o-transform: rotate(-45deg)
      transform: rotate(-45deg)

</style>
