<template>
    <NuxtLink
        :class="['b-link-external', props.classnames]"
        :title="props.title"
        :to="props.url"
        :target="isTargetBlank ? '_blank' : null"
    >
        <slot>
            {{ props.text }}
        </slot>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        // another prop as default value
        default: (props) => props.text,
    },

    isTargetBlank: {
        type: Boolean,
        default: true,
    },

    classnames: {
        type: String,
        default: null,
    },
})
</script>
