<template>
    <div class="b-page-slug">
        <div class="container">
            <h1 v-if="content.title">
                {{ content.title }}
            </h1>

            <AtomRichText
                v-if="content.description"
                :text="content.description"
            />
        </div>
    </div>
</template>

<script>
import transitionTime from '../assets/javascripts/utilities/transitionTime'

const timeTransitionCalculation = (transitionTime / 2) * 1.2

console.log(`===== ${timeTransitionCalculation} =====`)

export default {
    transition: {
        beforeLeave() {
            if (this.$store.state.navigation.isOpen) {
                setTimeout(() => {
                    this.$store.commit('navigation/toggleOpenState')
                    // little more of page transition time (now 500ms)
                }, timeTransitionCalculation)
            }
        },
    },

    asyncData(context) {
        // if slug is 'homepage', DO NOT create page but throw an error. this page is used as nuxt INDEX page.
        // logic only for PROD. on DEV you can see the page, so you can play with it on storyblok interface (preview)
        if (
            !context.isDev &&
            context.params.slug ===
                context.store.state.storyblok.stringNameForHomePage
        ) {
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

<style lang="sass">
.b-page-slug
    position: relative
    min-height: 100%
    // padding top for fixed header alignment
    padding: 60px 0
</style>
