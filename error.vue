<template>
    <div role="main" class="error-container">
        <div class="container">
            <!-- css bg as svg | compass -->
            <span class="svg-icon-compass" />

            <h1>{{ title }}</h1>

            <AtomsButton
                class-names="btn"
                text="Back to Homepage"
                @click-btn="handleError"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import HOME_LINK from '@/config/homeLink'

const runtimeConfig = useRuntimeConfig()

const props = defineProps({
    title: {
        type: String,
        default: 'Page not found.',
    },
})
const { title } = props

const handleError = () => {
    clearError({
        // home
        redirect: HOME_LINK.url,
    })
}

useHead({
    title: `Ops! Error Page | ${runtimeConfig.public.headTitleString}`,
})
</script>

<style lang="sass">
// main page container
.error-container
    margin: 40px auto
    text-align: center

.svg-icon-compass
    display: block
    width: 260px
    height: 260px
    margin: 30px auto
    background-image: url('assets/svg/compass.svg')
</style>
