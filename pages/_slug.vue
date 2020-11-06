<template>
  <section>
    <h1>PAGE TITLEis: {{ story.content.title }}</h1>
    <h2>PAGE HEADLINEis: {{ story.content.headline }}</h2>

    <!-- TODO: later set componet for richtext and also components all sub elements -->
    <div
      v-for="(richTextItem, index) in story.content.description.content"
      :key="`item-${index}`"
    >
      <div v-if="richTextItem.type === 'heading'">
        {{ richTextItem.content[0].text }}
      </div>

      <div v-if="richTextItem.type === 'paragraph'">
        {{ richTextItem.content[0].text }}
      </div>
    </div>

    <NuxtLink to="/">Home back</NuxtLink>
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
