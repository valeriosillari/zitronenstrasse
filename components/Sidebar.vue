<template lang="pug">
  aside.sidebar
    //- btn area
    .clearfix
      button.btn-close(@click='actionSidebarClose')

    h2.title
      | {{ currentPlace.title }}

    //- Thumb Place
    //- todo: pass better object, creatded not in markup
    Thumb(
      :currentThumb='{title: currentPlace.title, thumbPath: currentPlace.thumb, credits: currentPlace.thumbCredits }'
    )

    p.address(v-if='currentPlace.address')
      span.info
        | Address:
      | {{ currentPlace.address }}

    //- links area
    span.info(v-if='(currentPlace.website) || (currentPlace.fbPage)')
      | Links:

    .action-area
      p.line(v-if='currentPlace.website')
        a.link.link-website(
          :href='currentPlace.website',
          :title="currentPlace.title + ' | Official Website'",
          target='_blank'
        )
          | Official Website

      p.line(v-if='currentPlace.fbPage')
        a.link.link-facebook(
          :href='currentPlace.fbPage',
          :title="currentPlace.title + ' | Facebook Page'",
          target='_blank'
        )
          | Facebook Page
</template>

<script>
import Thumb from '~/components/Thumb.vue'

export default {
  components: {
    Thumb,
  },

  props: {
    currentPlace: {
      type: Object,
      required: true,
    },
  },

  methods: {
    actionSidebarClose() {
      // todo: set via store
      this.$emit('isSidebarButtonClose')
    },
  },
}
</script>

<style lang="sass">
// class for sidebar ELEMENT, inside a FIXED wrapper
.sidebar
  line-height: 1.5
  padding: 20px
  color: $color_sidebar_text

.title
  // TODO
  // @extend .h5

// span
.info
  // TODO
  // @extend .small
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
    // todo: set variable
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
