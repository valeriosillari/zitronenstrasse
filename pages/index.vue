<template lang="pug">
MapGoogle
</template>

<script>
export default {
    mounted() {
        if (this.$store.state.navigation.isOpen) {
            this.$store.commit('navigation/toggleOpenState')
        }
    },
}
</script>
