<template>
    <div class="b-rich-text" v-bind="{ innerHTML: sanitizedHtml }" />
</template>

<script lang="ts" setup>
import sanitizeHtml from 'sanitize-html'

const props = defineProps({
    richText: {
        type: String,
        required: true,
    },
})

const sanitizedHtml = computed(() =>
    sanitizeHtml(props.richText, {
        allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
        allowedAttributes: {
            a: ['href'],
            img: ['src', 'alt', 'loading'],
        },
        allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    })
)
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
