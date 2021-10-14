<template>
    <section class="section">
        <div class="container">
            <h1>
                {{ content.title }}
            </h1>

            <AtomRichText :text="content.description" />
        </div>
    </section>
</template>

<script>
// TODO: update as unique var for all applicaction
const INDEX_SLUG = 'homepage'

export default {
    transition: {
        beforeLeave() {
            if (this.$store.state.navigation.isOpen) {
                this.$store.commit('navigation/toggleOpenState')
            }
        },
    },

    asyncData(context) {
        // if slug is 'homepage', DO NOT create page but throw an error. this page is used as nuxt INDEX page.
        if (context.params.slug === INDEX_SLUG) {
            // basic inspiration to force getting an error page
            // https://github.com/nuxt/nuxt.js/issues/2022
            context.error({
                statusCode: 404,
                message: 'homepage slug as no page!',
            })
            return
        }

        // Load the JSON from the API
        return context.app.$storyapi
            .get(`cdn/stories/${context.params.slug}`, {
                // Check if we are in the editor mode
                version:
                    context.query._storyblok || context.isDev
                        ? 'draft'
                        : 'published',
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
            ? `${this.content.metaTitle} | ${this.$config.metaHeadData.titleShort}`
            : this.$config.metaHeadData.titleShort

        const metaDescription = this.content.metaDescription
            ? `${this.content.metaDescription} | ${this.$config.metaHeadData.description}`
            : this.$config.metaHeadData.description

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

    mounted() {
        // trick for removing nav overlay if coming on page from error page (by navigation link/logic)
        if (this.$store.state.navigation.isOpen) {
            this.$store.commit('navigation/toggleOpenState')
        }
    },
}
</script>
