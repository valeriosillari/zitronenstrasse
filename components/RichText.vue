<template>
  <div>
    <div v-for="(richTextItem, index) in richText" :key="`item-${index}`">
      <h2 v-if="richTextItem.type === 'heading'">
        {{ richTextItem.content[0].text }}
      </h2>

      <p v-if="richTextItem.type === 'paragraph'">
        {{ richTextItem.content[0].text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    richText: {
      type: Array,
      required: true,
    },
  },

  // mounted: WHEN ALL code on server is already loaded!
  //   mounted() {
  //     console.log('================')
  //     console.log(this.richText)
  //   },
}
</script>
