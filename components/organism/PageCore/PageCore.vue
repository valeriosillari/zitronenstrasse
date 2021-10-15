<template>
    <div v-frag>
        <h1 v-if="content.title">
            {{ content.title }}
        </h1>

        <AtomRichText v-if="content.description" :text="content.description" />

        <component
            :is="blok.component"
            v-for="blok in content.blocks"
            :key="blok._uid"
            :blok="blok.component"
        />
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true,
        },
    },

    mounted() {
        console.log('========= LOADED PAGE CORE ==========')
    },
}
</script>
