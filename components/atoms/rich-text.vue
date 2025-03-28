<template>
    <div
        v-if="sanitizedRichText"
        class="b-rich-text"
        v-html="sanitizedRichText"
    />
</template>

<script lang="ts" setup>
// import { JSDOM } from 'jsdom'
// import DOMPurify from 'dompurify'

const props = defineProps({
    richText: {
        type: String,
        required: true,
    },
})

const sanitizedRichText = ref<string>('')

// sanitize DOM html received, to prevent malicious code and injections
// const sanitizedRichText = computed(() => DOMPurify.sanitize(richText))

if (import.meta.server) {
    // On the server, we use jsdom to create a virtual window.
    const { JSDOM } = await import('jsdom')
    const jsdomWindow = new JSDOM('').window
    // Import DOMPurify and initialize it with the virtual window.
    const createDOMPurify = (await import('dompurify')).default
    const DOMPurify = createDOMPurify(jsdomWindow)
    sanitizedRichText.value = DOMPurify.sanitize(props.richText)
} else {
    // On the client, import DOMPurify normally.
    const DOMPurify = (await import('dompurify')).default
    sanitizedRichText.value = DOMPurify.sanitize(props.richText)
}
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
