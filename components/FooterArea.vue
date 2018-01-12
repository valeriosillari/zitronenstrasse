<template lang="pug">
  .footer
    .container
      .row.align-items-center
        .col-10.col-sm-8.col-left
          p.text
            | Zitronenstrasse | {{ dateYear }} | A project by
            | &nbsp;
            a.item-link(href='http://www.valeriosillari.com/', title='Valerio Sillari', target='_blank')
              | Valerio Sillari

        .col-sm-4.col-right
          ul.item-icons
            //- FB
            li.item-icon
              a.socicon.socicon-facebook(href='https://www.facebook.com/zitronenstrasse/', title='Zitronenstrasse on Facebook', target='_blank')
            //- Twitter
            li.item-icon
              a.socicon.socicon-twitter(href='https://twitter.com/zitronenstrasse' title='Zitronenstrasse on Twitter', target='_blank')
            //- Github
            li.item-icon
              a.socicon.socicon-github(href='https://github.com/valeriosillari/zitronenstrasse' title='Zitronenstrasse on Github', target='_blank')
</template>

<script>
  export default {
    data () {
      return {
        dateYear: new Date().getFullYear()
      }
    }
  }
</script>

<style lang="sass">
  // todo: set later navi classes and styles via sass. now just dark one
  .footer
    font-size: 14px
    padding: 30px 0
    color: $color_footer_text
    background: $color_footer_bg
    border-top: 1px solid $color_footer_border

  .text
    margin-bottom: .05rem

  .col-right
    margin-top: 15px

  .item-link
    color: $color_footer_link

  // UL
  .item-icons
    display: block
    list-style: none
    margin: 0
    padding: 0

  // LI
  .item-icon
    display: inline-block
    padding: 0 0 0 15px
    &:first-child
      padding: 0

  // <a> icon
  .socicon
    display: block
    position: relative
    font-size: 32px
    line-height: 1
    color: $color_footer_icon

  // color status
  .socicon,
  .item-link
    &:hover,
    &:focus
      color: $color_footer_link_hvr

  +breakpoint($breakpoint_sm)

    .col-right
      margin-top: 0
      text-align: right
      background: yellow

</style>
