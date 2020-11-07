<template>
  <section class="section">
    <div class="container">
      <h1>
        {{ story.content.title }}
      </h1>

      <!-- TODO: later set componet for richtext and also components all sub elements -->
      <div
        v-for="(richTextItem, index) in story.content.description.content"
        :key="`item-${index}`"
      >
        <h2 v-if="richTextItem.type === 'heading'">
          {{ richTextItem.content[0].text }}
        </h2>

        <p v-if="richTextItem.type === 'paragraph'">
          {{ richTextItem.content[0].text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${context.params.slug}`, {
        // Check if we are in the editor mode
        version:
          context.query._storyblok || context.isDev ? 'draft' : 'published',
      })
      .then((res) => {
        console.log(res.data.story.content.description.content)

        return res.data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data,
        })
      })
  },
  data() {
    return { story: { content: {} } }
  },
}
</script>
