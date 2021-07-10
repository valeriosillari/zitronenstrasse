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
// TODO:
// - check meta tags for pages
// - check css on all pages (error page also)
// - check place as item from storyblok
// - check how many TOKEN / option  you need on SToryblok. 1 is enough ?
// - check vercel secrets logic again

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
