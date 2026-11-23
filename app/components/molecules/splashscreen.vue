<!--
    Inspiration:
    https://javascript.plainenglish.io/show-a-loading-spinner-in-nuxt-js-7a5ad0537ebf
-->

<template>
    <div
        v-if="isSplashscreenActive"
        :class="['b-splashscreen', isSplashscreenFading ? 'is-fading-out' : '']"
    />
</template>

<script setup lang="ts">
// TODO: not use ref, set a reactive?
const isSplashscreenFading = ref(false)
const isSplashscreenActive = ref(true)
// custom value, used on JS (fade timeout) and also on css (they work together on timing)
const fadeTimeMilliseconds = ref(1500)
const fadeTimeVarCss = ref(`${fadeTimeMilliseconds.value / 1000}s`)

const removeFadeOut = (speed: number) => {
    isSplashscreenFading.value = true

    // remove component itself when fade completed (vue IF logic)
    setTimeout(() => {
        isSplashscreenActive.value = false
    }, speed)
}

onMounted(() => {
    removeFadeOut(fadeTimeMilliseconds.value)
})
</script>

<style lang="sass">
.b-splashscreen
    background: $color_splashscreen_bg
    width: 100vw
    height: 100vh
    position: fixed
    z-index: $z_index_04
    top: 0
    opacity: 1

    &.is-fading-out
        transition: opacity v-bind(fadeTimeVarCss) ease
        opacity: 0

    // remove splashscreen after several seconds if browser has no JS enabled
    .no-js &
        animation: cssAnimationHideElement 0s ease-in $timing_hide_no_js forwards
        animation-fill-mode: forwards

@keyframes animation-splashscreen
    0%
        // -webkit-transform: scale(0)
        transform: scale(0)

    100%
        // -webkit-transform: scale(1);
        transform: scale(1)
        opacity: 0

@keyframes cssAnimationHideElement
    to
        width: 0
        height: 0
        overflow: hidden
</style>
