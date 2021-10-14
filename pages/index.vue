<template>
    <section style="border: 5px solid #0f0">
        <h1>START | INDEX</h1>

        <h1>
            {{ content.title }}
        </h1>

        <component
            :is="blok.component"
            v-for="blok in content.blocks"
            :key="blok._uid"
            :blok="blok"
        />

        <h1>END | INDEX</h1>
    </section>
</template>

<script>
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
        console.log('====== context ========')
        console.log(context.params)

        // Load the JSON from the API
        return context.app.$storyapi
            .get(`cdn/stories/${INDEX_SLUG}`, {
                // Check if we are in the editor mode
                version: 'draft',
                // context.query._storyblok || context.isDev
                //     ? 'draft'
                //     : 'published',
            })
            .then((res) => {
                console.log('========= ALL SLUGS ==============')
                console.log(res.data.story)

                return res.data.story
            })
            .catch((res) => {
                context.error({
                    statusCode: res.response.status,
                    message: res.response.data,
                })
            })
    },

    mounted() {
        console.log('======= MOUNTED =======')
        // trick for removing nav overlay if coming on page from error page (by navigation link/logic)
        if (this.$store.state.navigation.isOpen) {
            this.$store.commit('navigation/toggleOpenState')
        }
    },
}
</script>
