<template>
    <div class="b-social-link-list">
        <NuxtLink
            v-for="link in socialLinks"
            :key="link.name"
            :title="link.name"
            :to="link.url"
            target="_blank"
            class="social-link-item"
        >
            <font-awesome-icon
                :icon="['fab', link.icon]"
                class="social-link-icon"
            />
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

// https://dev.to/ceceliacreates/using-fontawesome-icons-with-nuxt-3-50cd
const socialLinks = [
    {
        name: `${runtimeConfig.public.projectName} on Facebook`,
        url: 'https://www.facebook.com/zitronenstrasse/',
        icon: 'facebook-f',
    },
    {
        name: `${runtimeConfig.public.projectName} Playlist on Spotify`,
        url: 'https://open.spotify.com/user/stellavalerio/playlist/4J2AU9XfvfJOgc0MBE1WlX?si=xoXk0YnDRWGlmgtR99qXrw',
        icon: 'spotify',
    },
    {
        name: `${runtimeConfig.public.projectName} on Github`,
        url: 'https://github.com/valeriosillari/zitronenstrasse',
        icon: 'github',
    },
]
</script>

<style lang="sass">
.b-social-link-list
    display: flex
    align-items: center

    // link component
    .social-link-item
        margin: $space_02 $space_01 $space_02
        color: $color_social_icon

        &:hover
            color: $color_social_icon_hvr

        &:first-child
            margin-left: $space_00

        // svg
        .social-link-icon
            width: $social_icon_size
            height: $social_icon_size

    +breakpoint($breakpoint_sm)
        justify-content: flex-end
</style>
