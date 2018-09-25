<template lang="pug">
  .footer
    .container
      .row.align-items-center
        .col-10.col-sm-8.col-left
          p.text
            | Zitronenstrasse
            |
            | {{ dateYear }}
            |
            | |
            |
            nuxt-link.item-link(to='/privacy-policy', title='Privacy Policy')
              | Privacy Policy
            |
            | |
            |
            | A project by
            |
            a.item-link(href='http://www.valeriosillari.com/', title='Valerio Sillari', target='_blank')
              | Valerio Sillari

        .col-sm-4.col-right

          ul.item-icons
            //- Facebook
            li.item-icon
              a.fa.fa-facebook.item-social(href='https://www.facebook.com/zitronenstrasse/', title='Zitronenstrasse on Facebook', target='_blank')
            //- Twitter
            li.item-icon
              a.fa.fa-twitter.item-social(href='https://twitter.com/zitronenstrasse' title='Zitronenstrasse on Twitter', target='_blank')
            //- Spotify
            li.item-icon
              a.fa.fa-spotify.item-social(href='https://open.spotify.com/user/stellavalerio/playlist/4J2AU9XfvfJOgc0MBE1WlX?si=xoXk0YnDRWGlmgtR99qXrw' title='Zitronenstrasse Playlist on Spotify', target='_blank')
            //- Github
            li.item-icon
              a.fa.fa-github.item-social(href='https://github.com/valeriosillari/zitronenstrasse' title='Zitronenstrasse on Github', target='_blank')
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
  .item-social
    display: block
    position: relative
    font-size: 32px
    line-height: 1
    color: $color_footer_icon

  // color status
  .item-social,
  .item-link
    &:hover,
    &:focus
      color: $color_footer_link_hvr

  // =============================== SM viewport ===============================
  +breakpoint($breakpoint_sm)

    .col-right
      margin-top: 0
      text-align: right

</style>
