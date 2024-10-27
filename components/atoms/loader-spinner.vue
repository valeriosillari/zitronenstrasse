<template>
    <section class="b-loader-spinner">
        <span class="loader" />
    </section>
</template>

<style lang="sass">
// parent need to be position relative and got right height
.b-loader-spinner
    position: absolute
    top: 0
    bottom: 0
    width: 100%
    display: flex
    justify-content: center
    align-items: center

    .loader
        width: $space_loader_spinner
        height: $space_loader_spinner
        background: $color_loader_spinner
        display: inline-block
        border-radius: 50%
        animation: animationLoader 1s ease-in infinite
</style>
