<template>
    <button
        type="button"
        :class="['b-btn', props.classNames]"
        :title="buttonTitle"
        @click="handleClick"
    >
        <slot>
            {{ text }}
        </slot>
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['clickBtn'])

const props = defineProps({
    classNames: {
        type: String,
        default: null,
    },

    text: {
        type: String,
        default: '',
    },

    title: {
        type: String,
        default: '',
    },
})

const buttonTitle = computed(() => props.title || props.text)

// Later in your code, you can safely emit the event:
const handleClick = () => {
    console.log('EMIT')
    emit('clickBtn')
}
</script>

<style lang="sass">
.b-btn
    // sidebar close button
    &.is-btn-sidebar-close
        position: absolute
        width: 50px
        height: 50px
        overflow: hidden
        background: $color_transparent
        border: 0
        top: calc($space_03 / 2)
        right: $space_00
        display: flex
        justify-content: center
        align-items: center
        z-index: $z_index_01

        &::before,
        &::after
            content: ''
            position: absolute
            height: 1px
            width: 30px
            background: $color_icon

        &::before
            transform: rotate(45deg)

        &::after
            transform: rotate(-45deg)

        &:hover
            &::before,
            &::after
                background: $color_icon_hvr

    &.is-btn-menu
        opacity: 0
        border: 0
        background: $color_transparent
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
