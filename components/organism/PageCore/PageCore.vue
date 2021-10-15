<template>
    <div v-frag>
        <template v-if="content.component === 'page_index'">
            <component
                :is="blok.component"
                v-for="blok in content.blocks"
                :key="blok._uid"
                :blok="blok.component"
            />
        </template>

        <template v-else>
            <section class="section">
                <div class="container">
                    <h1 v-if="content.title">
                        {{ content.title }}
                    </h1>

                    <AtomRichText
                        v-if="content.description"
                        :text="content.description"
                    />
                </div>
            </section>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true,
        },

        isPageDynamicSlug: {
            type: Boolean,
            default: false,
        },
    },

    mounted() {
        console.log('========= LOADED PAGE CORE ==========')
    },
}
</script>
