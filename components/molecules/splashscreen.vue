<!--
    Inspiration:
    https://javascript.plainenglish.io/show-a-loading-spinner-in-nuxt-js-7a5ad0537ebf
-->

<template>
    <div v-if="isSplashscreenActive" ref="root" class="b-splashscreen" />
</template>

<script setup>
const root = ref(null)
const isSplashscreenActive = ref(true)

const removeFadeOut = (el, speed) => {
    const seconds = speed / 1000

    el.style.transition = 'opacity ' + seconds + 's ease'
    el.style.opacity = 0

    // remove component itself when fade completed (vue IF logic)
    setTimeout(() => {
        isSplashscreenActive.value = false
    }, speed)
}

onMounted(() => {
    removeFadeOut(root.value, 1500)
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
