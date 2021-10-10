<template>
    <div v-editable="blok" class="block-teaser" style="border: 5px solid green">
        {{ blok.headline }}
    </div>
</template>

<script>
export default {
    props: {
        blok: {
            type: Object,
            required: true,
        },
    },
}
</script>
