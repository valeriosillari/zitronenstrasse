<template>
  <div class="b-rich-text">
    <div v-html="richtext"></div>
  </div>
</template>

<script>
export default {
  // props: ['text'],
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
.b-rich-text
  b
    color: $color_text_accent
    font-weight: 400

  // extend default one
  a
    text-decoration: underline
    &:hover
      text-decoration: underline
</style>
