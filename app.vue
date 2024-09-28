<template>
    <OrganismsHeader />

    <div role="main" class="main-container">
        <NuxtPage />
    </div>

    <OrganismsFooter />
</template>

<script lang="ts" setup>
const navigationStore = useNavigationStore()
const route = useRoute()

useHead({
    bodyAttrs: {
        class: computed(() => {
            if (navigationStore.isNavOpen) return 'is-navigation-open-body'
            return ''
        }),
    },
})

// at route change
watch(
    () => route.fullPath,
    () => {
        navigationStore.resetNavState()
    }
)

onMounted(() => {
    console.log('🚀')
})
</script>

<style lang="sass">
// main page container
.main-container
    min-height: $map_height

// page transitions
.page-enter-active,
.page-leave-active
    transition: all 0.5s

.page-enter-from,
.page-leave-to
    opacity: 0
    filter: blur(1rem)
</style>
