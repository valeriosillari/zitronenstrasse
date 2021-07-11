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
// - check css on all pages (error page also)
// - check meta tags for pages
// - check place as item from storyblok
// - check how many TOKEN / option  you need on SToryblok. 1 is enough ?
// - check vercel secrets logic again
// - add "BACK HOME" at end of privacy page

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

  head() {
    const metaTitle = this.content.metaTitle
      ? `${this.content.metaTitle} | Zitronenstrasse`
      : 'Zitronenstrasse'

    const metaDescription = this.content.metaDescription
      ? `${this.content.metaDescription} | ${this.$config.metaHeadDescription}`
      : `${this.$config.metaHeadDescription}`

    // Set Meta Tags for the Page (with fallback)
    return {
      title: metaTitle,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: metaDescription,
        },

        // OG options for open graph: Fb and Linkedin
        {
          hid: `og:title`,
          property: 'og:title',
          content: metaTitle,
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: metaDescription,
        },

        // Twitter card
        {
          hid: `twitter:title`,
          property: 'twitter:title',
          content: metaTitle,
        },
        {
          hid: `twitter:description`,
          property: 'twitter:description',
          content: metaDescription,
        },

        {
          hid: `twitter:image:alt`,
          property: 'twitter:image:alt',
          content: metaTitle,
        },
      ],
    }
  },
}
</script>
