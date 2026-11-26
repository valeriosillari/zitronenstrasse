<template>
    <div class="b-rich-text" v-html="safeRichText" />
</template>

<script lang="ts" setup>
import sanitizeHtml from 'sanitize-html'

const props = defineProps<{
    richText: string
}>()

const safeRichText = computed(() => sanitizeHtml(props.richText))
</script>

<style lang="sass">
.b-rich-text
    b
        color: $color_text_accent
        font-weight: 400

    h2
        margin-top: $space_04

    h3
        @include font-size($h4-font-size)
        margin-top: $space_03
</style>
