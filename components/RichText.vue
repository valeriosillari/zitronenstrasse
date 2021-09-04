<template>
    <div class="b-rich-text">
        <div v-html="richtext"></div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: Object,
            default() {
                return {}
            },
        },
    },

    computed: {
        // https://www.storyblok.com/faq/how-to-render-richtext-nuxt
        richtext() {
            return this.$storyapi.richTextResolver.render(this.text)
        },
    },
}
</script>

<style lang="sass">
// TODO: now we edit tags. later check how to add classes from storyblok
.b-rich-text
  b
    color: $color_text_accent
    font-weight: 400

  a
    text-decoration: underline
    &:hover
      text-decoration: underline

  h2
    margin-top: 60px

  h3
    @include font-size($h4-font-size)
    margin-top: 30px
</style>
