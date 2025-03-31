<template>
    <header class="b-header">
        <NuxtLink
            class="header-main-logo"
            :title="headerLink.title"
            :to="headerLink.url"
        >
            {{ headerLink.title }}
        </NuxtLink>

        <!-- btn for navigation logic (overlay) -->
        <AtomsButton
            :class-names="`is-btn-menu ${btnActiveClass}`"
            @click="handleClickNavigation"
        >
            <span class="btn-menu-line top" />
            <span class="btn-menu-line middle" />
            <span class="btn-menu-line bottom" />
        </AtomsButton>

        <!-- navigation (overlay) -->
        <MoleculesNavigation />
    </header>
</template>

<script setup lang="ts">
import HOME_LINK from '@/config/homeLink'

const navigationStore = useNavigationStore()

const headerLink = {
    url: HOME_LINK.url,
    title: HOME_LINK.text,
}

// btn switch class at value change
const btnActiveClass = computed(() => {
    return navigationStore.isNavOpen ? 'is-menu-opened' : ''
})

const handleClickNavigation = () => {
    navigationStore.toggleNavState()
}
</script>

<style lang="sass">
.b-header
    position: relative
    z-index: $z_index_03
    // fixed height!
    // related to the map height trick
    height: $header_min_height
    +paddingBoxDefaut()
    background: $color_header_bg
    border-bottom: 1px solid $color_header_border

    .header-main-logo
        height: 45px
        width: 45px
        float: left
        background-image: url('assets/svg/logo.svg')
        text-indent: -9999px
</style>
