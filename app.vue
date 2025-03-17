<template>
    <MoleculesNoJsFallback />

    <MoleculesSplashscreen />

    <OrganismsHeader />

    <div role="main" class="main-container">
        <NuxtPage />
    </div>

    <OrganismsFooter />
</template>

<script lang="ts" setup>
const navigationStore = useNavigationStore()
const route = useRoute()

useHead({
    bodyAttrs: {
        class: computed(() => {
            if (navigationStore.isNavOpen) return 'is-navigation-open-body'
            return ''
        }),
    },
})

// at route change
watch(
    () => route.fullPath,
    () => {
        navigationStore.resetNavState()
    }
)

onMounted(() => {
    // no js logic
    utilsRemoveNoJsClass()

    console.log('🚀')
})
</script>

<style lang="sass">

// ===================
// FONT ICON SVG
@import './node_modules/@fortawesome/fontawesome-svg-core/styles.css'

// ===================
// BOOTSTRAP Layout & components
@import './node_modules/bootstrap/scss/root'
@import './node_modules/bootstrap/scss/reboot'
@import './node_modules/bootstrap/scss/type'
@import './node_modules/bootstrap/scss/images'
@import './node_modules/bootstrap/scss/containers'
@import './node_modules/bootstrap/scss/grid'
// @import './node_modules/bootstrap/scss/tables'
// @import './node_modules/bootstrap/scss/forms'
// @import './node_modules/bootstrap/scss/buttons'
// @import './node_modules/bootstrap/scss/transitions'
// @import './node_modules/bootstrap/scss/dropdown'
// @import './node_modules/bootstrap/scss/button-group'
// @import './node_modules/bootstrap/scss/nav'
// @import './node_modules/bootstrap/scss/navbar'
// @import './node_modules/bootstrap/scss/card'
// @import './node_modules/bootstrap/scss/accordion'
// @import './node_modules/bootstrap/scss/breadcrumb'
// @import './node_modules/bootstrap/scss/pagination'
// @import './node_modules/bootstrap/scss/badge'
// @import './node_modules/bootstrap/scss/alert'
// @import './node_modules/bootstrap/scss/progress'
// @import './node_modules/bootstrap/scss/list-group'
// @import './node_modules/bootstrap/scss/close'
// @import './node_modules/bootstrap/scss/toasts'
// @import './node_modules/bootstrap/scss/modal'
// @import './node_modules/bootstrap/scss/tooltip'
// @import './node_modules/bootstrap/scss/popover'
// @import './node_modules/bootstrap/scss/carousel'
// @import './node_modules/bootstrap/scss/spinners'
// @import './node_modules/bootstrap/scss/offcanvas'
// @import './node_modules/bootstrap/scss/placeholders'

// Helpers
@import './node_modules/bootstrap/scss/helpers'

// Utilities
@import './node_modules/bootstrap/scss/utilities/api'

// ===================
// APP GLOBAL STYLES

@keyframes bounceMarker
    0%, 20%, 50%, 80%, 100%
        transform: translateY(0)

    40%
        transform: translateY(-30px)
    60%
        transform: translateY(-15px)

@keyframes animationFadeInFallback
    0%
        height: 0
        opacity: 0

    99%
        height: 0
        opacity: 0

    100%
        height: 100%
        opacity: 1

@keyframes animationFadeIn
    0%
        opacity: 0
    100%
        opacity: 1


@keyframes animationLoader
    0%
        transform: scale(0)
        opacity: 1

    100%
        transform: scale(1)
        opacity: 0

html
    // fancy scrollbar logic
    +mixins-scrollbar()

body
    &.is-navigation-open-body
        overflow: hidden

// text selection
::-moz-selection
    color: $color_text_selection_text
    background: $color_text_selection_bg
::selection
    color: $color_text_selection_text
    background: $color_text_selection_bg

// main page container
.main-container
    min-height: $map_height

// page transitions
.page-enter-active,
.page-leave-active
    transition: all 0.5s

.page-enter-from,
.page-leave-to
    opacity: 0
    filter: blur(1rem)
</style>
