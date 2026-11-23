<template>
    <div :class="['b-map-off-canvas-structure', isSidebarActiveClass]">
        <div class="map-wrapper">
            <LazyMoleculesGoogleMap />
        </div>

        <div class="sidebar-wrapper">
            <LazyOrganismsSidebar />
        </div>
    </div>
</template>

<script setup lang="ts">
const sidebarStore = useSidebarStore()

// btn switch class at value change
const isSidebarActiveClass = computed(() => ({
    'is-sidebar-open': sidebarStore.isSidebarOpen,
}))
</script>

<style lang="sass">

.b-map-off-canvas-structure
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0

    .map-wrapper
        height: 100vh
        position: relative
        left: 0

    .sidebar-wrapper
        position: fixed
        z-index: 1000
        top: 0
        right: -$sidebar_width_xs
        height: 100%
        width: 100%
        background: $color_sidebar_bg
        // overflow-X mandatory to avoid scrollbar at page change
        // https://www.w3schools.com/howto/howto_js_off-canvas.asp
        overflow-x: hidden

    // transitions (animation)
    .map-wrapper,
    .sidebar-wrapper
        transition: $animation_sidebar_off_canvas

    // extra class added via JS when sidebar is shown (to wrapper element of real map)
    &.is-sidebar-open
        .map-wrapper
            left: -$sidebar_width_xs

        .sidebar-wrapper
            right: 0

    +breakpoint($breakpoint_sm)
        .sidebar-wrapper
            width: $sidebar_width_sm
            right: -$sidebar_width_sm

        &.is-sidebar-open
            .map-wrapper
                left: -$sidebar_width_sm

    +breakpoint($breakpoint_md)
        .sidebar-wrapper
            width: $sidebar_width_md
            right: -$sidebar_width_md

        &.is-sidebar-open
            .map-wrapper
                left: -$sidebar_width_md
</style>
