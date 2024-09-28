<template>
    <div class="b-rich-text" v-html="richText" />
</template>

<script lang="ts" setup>
const props = defineProps({
    richText: {
        type: String,
        required: true,
    },
})
const { richText } = props
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
