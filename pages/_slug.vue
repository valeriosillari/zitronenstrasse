<template>
  <section class="section">
    <div class="container">
      <h1>
        {{ story.content.title }}
      </h1>

      <RichText :rich-text="story.content.description.content" />
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
