<template>
  <section class="section">
    <div class="container">
      <h1>
        {{ content.title }}
      </h1>

      <RichText :text="content.description" />
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
        return res.data.story
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data,
        })
      })
  },
}
</script>
