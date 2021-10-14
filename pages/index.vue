<template>
    <section style="border: 5px solid red">
        <h1>START | INDEX</h1>

        <!-- <h1>
            {{ content.title }}
        </h1> -->

        <!-- <AtomRichText :text="content.description" /> -->

        <!-- <component
            v-for="blok in content.blocks"
            :key="blok._uid"
            :blok="blok"
            :is="blok.component"
        /> -->

        <h1>END | INDEX</h1>
    </section>
</template>

<script>
export default {
    transition: {
        beforeLeave() {
            if (this.$store.state.navigation.isOpen) {
                this.$store.commit('navigation/toggleOpenState')
            }
        },
    },

    asyncData(context) {
        console.log('====== context ========')
        console.log(context.params)
        // // Load the JSON from the API
        // return context.app.$storyapi
        //     .get(`cdn/stories/${context.params.slug}`, {
        //         // Check if we are in the editor mode
        //         version: 'draft',
        //         // context.query._storyblok || context.isDev
        //         //     ? 'draft'
        //         //     : 'published',
        //     })
        //     .then((res) => {
        //         console.log('========= ALL SLUGS ==============')
        //         console.log(res.data.story)

        //         return res.data.story
        //     })
        //     .catch((res) => {
        //         context.error({
        //             statusCode: res.response.status,
        //             message: res.response.data,
        //         })
        //     })
    },

    // head() {
    //     const metaTitle = this.content.metaTitle
    //         ? `${this.content.metaTitle} | ${this.$config.metaHeadData.titleShort}`
    //         : this.$config.metaHeadData.titleShort

    //     const metaDescription = this.content.metaDescription
    //         ? `${this.content.metaDescription} | ${this.$config.metaHeadData.description}`
    //         : this.$config.metaHeadData.description

    //     // Set Meta Tags for the Page (with fallback)
    //     return {
    //         title: metaTitle,

    //         meta: [
    //             {
    //                 hid: 'description',
    //                 name: 'description',
    //                 content: metaDescription,
    //             },

    //             // OG options for open graph: Fb and Linkedin
    //             {
    //                 hid: `og:title`,
    //                 property: 'og:title',
    //                 content: metaTitle,
    //             },

    //             {
    //                 hid: `og:description`,
    //                 property: 'og:description',
    //                 content: metaDescription,
    //             },

    //             // Twitter card
    //             {
    //                 hid: `twitter:title`,
    //                 property: 'twitter:title',
    //                 content: metaTitle,
    //             },
    //             {
    //                 hid: `twitter:description`,
    //                 property: 'twitter:description',
    //                 content: metaDescription,
    //             },

    //             {
    //                 hid: `twitter:image:alt`,
    //                 property: 'twitter:image:alt',
    //                 content: metaTitle,
    //             },
    //         ],
    //     }
    // },

    mounted() {
        console.log('======= MOUNTED =======')
        // trick for removing nav overlay if coming on page from error page (by navigation link/logic)
        if (this.$store.state.navigation.isOpen) {
            this.$store.commit('navigation/toggleOpenState')
        }
    },
}
</script>
