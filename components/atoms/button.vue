<template>
    <button
        type="button"
        :class="['b-btn', props.classNames]"
        :title="buttonTitle"
        @click="handleClick"
    >
        {{ text }}
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
</style>
