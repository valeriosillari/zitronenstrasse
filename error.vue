<template>
    <div role="main" class="error-container">
        <div class="container">
            <!-- css bg as svg | compass -->
            <span class="svg-icon-compass" />

            <h1>{{ title }}</h1>

            <button type="button" class="btn" @click="handleError">
                Back to Homepage
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { HOME_LINK } from '@/config/constants'

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

// bootstrap "like"
.btn
    background: $color_btn_bg
    border: 1px solid $color_btn_border
    color: $color_btn_txt
    line-height: 1.5
    padding: 4px 7.5px

    &:hover
        border: 1px solid $color_btn_border_hvr
        color: $color_btn_txt_hvr
</style>
