<template>
    <!-- TODO: this not as div, but as button -->
    <div :class="['b-btn-menu', btnActiveClass]" @click="handleClickNavigation">
        <span class="btn-menu-line top" />
        <span class="btn-menu-line middle" />
        <span class="btn-menu-line bottom" />
    </div>
</template>

<script setup lang="ts">
const navigationStore = useNavigationStore()

// btn switch class at value change
const btnActiveClass = computed(() => ({
    'is-menu-opened': navigationStore.isNavOpen,
}))

const handleClickNavigation = () => {
    navigationStore.toggleNavState()
}
</script>

<style lang="sass">
.b-btn-menu
    opacity: 0
    pointer-events: none
    position: relative
    float: right
    height: $btn_menu_height
    width: $btn_menu_width
    // magic number
    margin-top: 8px
    cursor: pointer
    transition: opacity .25s ease-in-out

    .btn-menu-line
        background: $color_btn_menu
        border: none
        height: $btn_menu_item_height
        width: 100%
        position: absolute
        top: $space_00
        left: $space_00
        transition:  all .35s ease-in-out
        cursor: pointer

        &.middle
            top: $btn_menu_top_size

        &.bottom
            top: $btn_menu_top_size * 2

    &:hover
        .btn-menu-line
            background: $color_btn_menu_hvr

    &.is-menu-opened
        z-index: $z_index_02

        .btn-menu-line
            &.top
                transform: translateY($btn_menu_top_size) translateX(0) rotate(45deg)
            &.middle
                opacity: 0
            &.bottom
                transform: translateY(-$btn_menu_top_size) translateX(0) rotate(-45deg)
    .js &
        opacity: 1
        animation: animationFadeIn 1s
        pointer-events: auto
</style>
