<template>
    <button
        type="button"
        :class="['b-btn', props.classNames]"
        @click="$emit('clickBtn')"
    />
</template>

<script setup lang="ts">
const props = defineProps({
    classNames: {
        type: String,
        default: null,
    },
})
</script>

<style lang="sass">
.b-btn
    // sidebar close button
    &.is-btn-sidebar-close
        position: absolute
        width: 30px
        height: 30px
        overflow: hidden
        background: $color_transparent
        border: 0
        // padding space for place detail (space 3) + extra space for visual alignment
        top: $space_03 +  $space_01
        right: $space_03

        &::before,
        &::after
            content: ''
            position: absolute
            height: 1px
            width: 100%
            top: 50%
            left: 0
            // margin-top: -1px
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
