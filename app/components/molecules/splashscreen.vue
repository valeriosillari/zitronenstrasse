<!--
    Inspiration:
    https://javascript.plainenglish.io/show-a-loading-spinner-in-nuxt-js-7a5ad0537ebf
-->

<template>
    <Transition name="splashscreen">
        <div v-if="isSplashscreenActive" class="b-splashscreen" />
    </Transition>
</template>

<script setup lang="ts">
const isSplashscreenActive = ref(true)

onMounted(() => {
    isSplashscreenActive.value = false
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

    // remove splashscreen after several seconds if browser has no JS enabled
    .no-js &
        animation: cssAnimationHideElement 0s ease-in $timing_hide_no_js forwards
        animation-fill-mode: forwards


.splashscreen-leave-active
    transition: opacity $animation_splashscreen_fade ease

.splashscreen-leave-to
    opacity: 0

@keyframes cssAnimationHideElement
    to
        width: 0
        height: 0
        overflow: hidden
</style>
