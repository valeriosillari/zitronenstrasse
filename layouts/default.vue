<template lang="pug">
.layout-wrapper(:style='cssTransitionVars')
    MoleculeNoJsFallback

    OrganismHeader

    OrganismNavigationOverlay

    nuxt(role='main')

    OrganismFooter

    MoleculePrivacyPolicyBanner
</template>

<script>
import transitionTime from '../assets/javascripts/utilities/transitionTime'

export default {
    computed: {
        cssTransitionVars() {
            return {
                '--timeTransition': `.${transitionTime}s`,
            }
        },
    },
}
</script>

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

body
  &.is-navigation-open-body
    overflow: hidden

// need it for map area spacing and footer
.layout-wrapper
  height: $map_height

a
  color: $color_link
  &:hover,
  &:focus
    color: $color_link_hvr

// ============
// page transition (vue transition)
.page-transition-enter-active,
.page-transition-leave-active
  transition: opacity var(--timeTransition)

.page-transition-enter,
.page-transition-leave-to
  opacity: 0
</style>
