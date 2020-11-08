<template>
  <div v-html="richTextMarkup"></div>
</template>

<script>
export default {
  props: {
    richText: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      richTextMarkup: '',
    }
  },

  // TODO: on created we get storyblok data and evaluate and generate correct markup for it
  created() {
    console.log('======== CREATED ========')
    console.log(this.richText)

    if (!this.richText) {
      return
    }

    // we should kinf of "generating" this code with all variations? really? check if there are some plugins/documentrs for avoiding to create all logic manually
    // https://github.com/storyblok/storyblok-nuxt/issues/34
    this.richTextMarkup =
      '<h2>Dummy Title</h2><p>dummy text with <span class="text-accent">span</span> goes here</p>'
  },
}
</script>
