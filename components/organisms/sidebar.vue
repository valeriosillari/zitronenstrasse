<template>
    <aside class="b-sidebar">
        <AtomsButton
            :class-names="'is-btn-sidebar-close'"
            @click-btn="handleCloseSidebar"
        />

        <MoleculesPlaceDetails />
    </aside>
</template>

<script setup lang="ts">
const sidebarStore = useSidebarStore()

const handleCloseSidebar = () => {
    sidebarStore.closeSidebarState()
}
</script>

<style lang="sass">
.b-sidebar
    position: relative
    height: 100vh
</style>
