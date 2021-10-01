<template lang="pug">
.layout-wrapper
    Navbar

    Overlay

    nuxt(role='main')

    Footer

    NoJsFallback

    PrivacyPolicyBanner
</template>

<style lang="sass">

@import '../node_modules/bootstrap/scss/root'
@import '../node_modules/bootstrap/scss/reboot'
@import '../node_modules/bootstrap/scss/type'
// @import '../node_modules/bootstrap/scss/images'
@import '../node_modules/bootstrap/scss/containers'
@import '../node_modules/bootstrap/scss/grid'
// @import '../node_modules/bootstrap/scss/tables'
// @import '../node_modules/bootstrap/scss/forms'
// @import '../node_modules/bootstrap/scss/buttons'
// @import '../node_modules/bootstrap/scss/transitions'
// @import '../node_modules/bootstrap/scss/dropdown'
// @import '../node_modules/bootstrap/scss/button-group'
// @import '../node_modules/bootstrap/scss/nav'
// @import '../node_modules/bootstrap/scss/navbar'
// @import '../node_modules/bootstrap/scss/card'
// @import '../node_modules/bootstrap/scss/accordion'
// @import '../node_modules/bootstrap/scss/breadcrumb'
// @import '../node_modules/bootstrap/scss/pagination'
// @import '../node_modules/bootstrap/scss/badge'
// @import '../node_modules/bootstrap/scss/alert'
// @import '../node_modules/bootstrap/scss/progress'
// @import '../node_modules/bootstrap/scss/list-group'
// @import '../node_modules/bootstrap/scss/close'
// @import '../node_modules/bootstrap/scss/toast'
// @import '../node_modules/bootstrap/scss/modal'
// @import '../node_modules/bootstrap/scss/tooltip'
// @import '../node_modules/bootstrap/scss/popover'
// @import '../node_modules/bootstrap/scss/carousel'
// @import '../node_modules/bootstrap/scss/spinner'
// @import '../node_modules/bootstrap/scss/offcanvas'
// @import '../node_modules/bootstrap/scss/placeholders'
// @import '../node_modules/bootstrap/scss/helpers'
// @import '../node_modules/bootstrap/utilities/api'


// need it for map area spacing and footer
.layout-wrapper
  height: $map_height

a
  color: $color_link
  &:hover,
  &:focus
    color: $color_link_hvr

.section
  min-height: 100%
  // padding top for fixed header alignment
  padding: 60px 0


.is-navigation-open-body
  overflow: hidden

// ============
// page transition (vue transition)
.page-transition-enter
  transform: translateY(40px)
  opacity: 0

.page-transition-enter-active
  transition: all .75s ease-in-out
  // a little bit more than navigation overlay timeout
  transition-delay: .35s

.page-transition-leave,
.page-transition-leave-active,
.page-transition-leave-to
  opacity: 0
</style>
