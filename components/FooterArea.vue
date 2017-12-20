<template lang="pug">
  .footer
    .container
      .row
        .col-10.col-sm-8.col-left
          p.text
            | Zitronen Strasse | {{ dateYear }} | A project by
            | &nbsp;
            a.item-link(href='http://www.valeriosillari.com/', title='Valerio Sillari', target='_blank')
              | Valerio Sillari
        .col-sm-4.col-right
          | here area icons
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

  .item-link
    color: $color_footer_link
    &:hover,
    &:focus
      color: $color_footer_link_hvr

  .col-right
    background: pink

  // SM: tablet
  @media screen and (min-width: 576px)

    .col-right
      text-align: right
      background: red

</style>
