<template lang="pug">
OrganismPageCore(:content='content', role='main')
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
        // Load the JSON from the API
        return context.app.$storyapi
            .get(
                `cdn/stories/${context.store.state.storyblok.stringNameForHomePage}`,
                {
                    // Check if we are in the editor mode
                    version:
                        context.query._storyblok || context.isDev
                            ? 'draft'
                            : 'published',
                }
            )
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
