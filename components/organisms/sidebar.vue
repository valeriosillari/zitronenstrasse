<template>
    <aside class="b-sidebar">
        <AtomsButton
            :class-names="'is-btn-sidebar-close'"
            @click-btn="handleCloseSidebar"
        />

        <MoleculesPlaceDetails />
    </aside>
</template>

<script setup lang="ts">
const sidebarStore = useSidebarStore()

const handleCloseSidebar = () => {
    sidebarStore.closeSidebarState()
}
</script>

<style lang="sass">
.b-sidebar
    padding: $space_03
    position: relative

    // TODO: set as button component modifier?
    .btn-close
        position: absolute
        width: $space_04
        height: $space_04
        overflow: hidden
        background: $color_transparent
        border: $space_00
        top: $space_03
        right: $space_03

        &::before,
        &::after
            content: ''
            position: absolute
            height: 1px
            width: 100%
            top: 50%
            left: 0
            background: $color_icon

        &::before
            transform: rotate(45deg)

        &::after
            transform: rotate(-45deg)

        &:hover
            &::before,
            &::after
                background: $color_icon_hvr
</style>
