<template>
    <header class="b-header">
        <NuxtLink
            class="header-main-logo"
            :title="headerLink.title"
            :to="headerLink.url"
        >
            {{ headerLink.title }}
        </NuxtLink>

        <!-- btn + navigation logic (overlay navi) -->
        <AtomsBtnMenu />
        <MoleculesNavigation />
    </header>
</template>

<script setup lang="ts">
const headerLink = {
    title: 'Home',
    url: '/',
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
