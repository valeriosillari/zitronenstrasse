<template>
    <div class="b-no-js-fallback">
        <div class="no-js-fallback-content">
            <span class="no-js-fallback-title">
                Your browser got JavaScript disabled.
            </span>

            <span class="no-js-fallback-text">
                Javascript is quite necessary to use this website correctly and
                having a nice experience.
            </span>

            <span class="no-js-fallback-text">
                Please enable it or get more info

                <NuxtLink
                    title="No Javascript information"
                    to="https://www.enable-javascript.com/"
                    target="_blank"
                >
                    No Javascript information
                </NuxtLink>
                .
            </span>
        </div>
    </div>
</template>

<style lang="sass">
.b-no-js-fallback
    background-color: $color_no_js_bg
    color: $color_no_js_text
    position: relative
    top: 0
    left: 0
    width: 100%
    z-index: $z_index_01
    text-align: center
    display: none

    // padding on wrapper. otherwise on root element "get space" and breaks design
    .no-js-fallback-content
        padding: $space_03

    .no-js-fallback-title
        @include font-size($h5-font-size)
        display: block

    // logic to be shown/hidden with JS enable or disabled
    .no-js &
        display: block
        animation-name: animationFadeInFallback
        // time you wait before show message | magic number
        animation-duration: 8s
</style>
