<template lang="pug">
  footer.footer
    .container
      .row.align-items-center
        .col-10.col-sm-7.col-md-8.col-left
          p.text
            | Zitronenstrasse
            |
            | {{ dateYear }}
            |
            | |
            |
            | v{{ appVersion }}

          p.text
            nuxt-link.item-link(
              to='/privacy-policy'
              title='Privacy Policy'
            )
              | Privacy Policy
            |
            | |
            |
            | A project by
            |
            a.item-link(
              href='http://www.valeriosillari.com/'
              title='Valerio Sillari'
              target='_blank'
            )
              | Valerio Sillari

        .col-sm-5.col-md-4.col-right
          ul.item-icons
            //- Facebook
            li.item-icon
              a.item-social(
                href='https://www.facebook.com/zitronenstrasse/'
                title='Zitronenstrasse on Facebook'
                target='_blank'
              )
                font-awesome-icon(
                  class='icon-svg'
                  :icon="['fab', 'facebook-f']"
                )

            //- Twitter
            li.item-icon
              a.item-social(
                href='https://twitter.com/zitronenstrasse'
                title='Zitronenstrasse on Twitter'
                target='_blank'
              )
                font-awesome-icon(
                  class='icon-svg'
                  :icon="['fab', 'twitter']"
                )
            //- Spotify
            li.item-icon
              a.item-social(
                href='https://open.spotify.com/user/stellavalerio/playlist/4J2AU9XfvfJOgc0MBE1WlX?si=xoXk0YnDRWGlmgtR99qXrw'
                title='Zitronenstrasse Playlist on Spotify'
                target='_blank'
              )
                font-awesome-icon(
                  class='icon-svg'
                  :icon="['fab', 'spotify']"
                )
            //- Github
            li.item-icon
              a.item-social(
                href='https://github.com/valeriosillari/zitronenstrasse'
                title='Zitronenstrasse on Github'
                target='_blank'
              )
                font-awesome-icon(
                  class='icon-svg'
                  :icon="['fab', 'github']"
                )
</template>

<script>
import packageJson from '../package.json'

export default {
    data() {
        return {
            dateYear: new Date().getFullYear(),
            appVersion: packageJson.version,
        }
    },
}
</script>

<style lang="sass">
//todo: set later navi classes and styles via sass. now just dark one
.footer
  font-size: 14px
  padding: 30px 0
  color: $color_footer_text
  background: $color_footer_bg
  border-top: 1px solid $color_footer_border

.text
  margin-bottom: .025rem

.col-right
  margin-top: 15px

.item-link
  color: $color_footer_link

// <ul>
.item-icons
  display: block
  list-style: none
  margin: 0
  padding: 0

// <li>
.item-icon
  display: inline-block
  padding: 0 0 0 12px

  &:first-child
    padding: 0

// <a>
.item-social
  display: flex
  justify-content: center
  align-items: center
  width: 32px
  height: 32px

// svg icon (font awesome)
.icon-svg
  font-size: 30px
  color: $color_footer_icon

  &:hover
    color: $color_footer_link_hvr

+breakpoint($breakpoint_sm)
  .col-right
    margin-top: 0
    text-align: right
</style>
