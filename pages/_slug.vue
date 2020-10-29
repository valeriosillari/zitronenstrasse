<template>
  <section>
    <h1>
      {{ story.name }}
    </h1>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    // Check if we are in the editor mode
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${context.params.slug}`, {
        version,
      })
      .then((res) => {
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
