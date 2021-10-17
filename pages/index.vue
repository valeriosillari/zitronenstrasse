<template>
    <div class="b-page-index">
        <storyblockComponent
            :is="blok.component"
            v-for="blok in content.blocks"
            :key="blok._uid"
            :blok="blok.component"
        />
    </div>
</template>

<script>
import transitionTime from '../assets/javascripts/utilities/transitionTime'
import stringNameForHomePage from '../assets/javascripts/utilities/storyblok'

const timeTransitionCalculation = (transitionTime / 2) * 1.2

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

    // TODO: on stotry block set real pathe as "/" for page homepage. works on stporyblok interface
    asyncData(context) {
        // Load the JSON from the API
        return context.app.$storyapi
            .get(`cdn/stories/${stringNameForHomePage}`, {
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

    mounted() {
        // trick for removing nav overlay if coming on page from error page (by navigation link/logic)
        if (this.$store.state.navigation.isOpen) {
            this.$store.commit('navigation/toggleOpenState')
        }
    },
}
</script>

<style lang="sass">
.b-page-index
    // padding top for fixed header alignment
    padding: 60px 0
    position: relative
    min-height: 100%
</style>
