<template>
    <section style="border: 5px solid red">
        <h1>START</h1>

        <component
            v-for="blok in content.blocks"
            :key="blok._uid"
            :blok="blok"
            :is="blok.component"
        />

        <h1>END</h1>
    </section>
</template>

<script>
export default {
    asyncData(context) {
        // Load the JSON from the API
        return context.app.$storyapi
            .get('cdn/stories/homepage', {
                // Check if we are in the editor mode
                version: 'draft',
                // context.query._storyblok || context.isDev
                //     ? 'draft'
                //     : 'published',
            })
            .then((res) => {
                console.log('========= PAGE INDEX ==============')
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
}
</script>
