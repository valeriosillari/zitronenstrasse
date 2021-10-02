<template lang="pug">
MapGoogle
</template>

<script>
export default {
    transition: {
        beforeLeave() {
            if (this.$store.state.navigation.isOpen) {
                this.$store.commit('navigation/toggleOpenState')
            }
        },
    },

    mounted() {
        if (this.$store.state.navigation.isOpen) {
            alert('OPEN | Page slug')
            this.$store.commit('navigation/toggleOpenState')
        }
    },
}
</script>
