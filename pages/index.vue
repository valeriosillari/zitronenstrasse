<template>
    <div v-frag>
        <component
            :is="blok.component"
            v-for="blok in content.blocks"
            :key="blok._uid"
            :blok="blok"
            role="main"
        />
    </div>
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
        // trick for removing nav overlay if coming on page from error page (by navigation link/logic)
        if (this.$store.state.navigation.isOpen) {
            this.$store.commit('navigation/toggleOpenState')
        }
    },
}
</script>
