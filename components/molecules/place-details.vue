<template>
    <section v-if="currentSpotData && isSpotShown" class="b-place-details">
        <h2 class="place-details-heading">{{ currentSpotData.title }}</h2>

        <div class="place-details-thumb-area">
            <div class="place-details-thumb-image-inner">
                <picture class="place-details-thumb-image">
                    <source
                        :srcset="imageWebPUrl"
                        type="image/webp"
                        :alt="imageTitle"
                        loading="lazy"
                    />
                    <NuxtImg :src="imageUrl" :alt="imageTitle" loading="lazy" />
                </picture>
            </div>

            <div
                v-if="currentSpotData.imageCredits"
                class="place-details-thumb-credits"
            >
                <span>Credits:&nbsp;</span>
                <span>{{ currentSpotData.imageCredits }}</span>
            </div>
        </div>

        <div class="place-details-line">
            <span class="place-details-lin-text">Address:</span>
            <span class="place-details-address">{{
                currentSpotData.addressStreet
            }}</span>
        </div>

        <div
            v-if="
                currentSpotData.urlWebsite ||
                currentSpotData.urlFacebook ||
                currentSpotData.urlInstagram
            "
            class="place-details-line"
        >
            <span class="place-details-line-text">Links:</span>
            <ul class="list-unstyled">
                <li v-if="currentSpotData.urlWebsite">
                    <NuxtLink :to="currentSpotData.urlWebsite" target="_blank">
                        Official Website
                    </NuxtLink>
                </li>
                <li v-if="currentSpotData.urlFacebook">
                    <NuxtLink :to="currentSpotData.urlFacebook" target="_blank">
                        Facebook
                    </NuxtLink>
                </li>
                <li v-if="currentSpotData.urlInstagram">
                    <NuxtLink
                        :to="currentSpotData.urlInstagram"
                        target="_blank"
                    >
                        Instagram
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </section>

    <AtomsLoaderSpinner v-else />
</template>

<script setup lang="ts">
import type { TypeSingleSpotData } from '@/types/TypeSingleSpot'

const currentSpotData = ref<TypeSingleSpotData | null>(null)

const isSpotShown = computed(() => {
    return singleSpotSelectedStore.isSpotShown
})

const singleSpotSelectedStore = useSingleSpotSelectedStore()

const imageUrl = computed(() => {
    if (!currentSpotData.value || !currentSpotData.value.image) {
        return '/image/place_image_fallback.jpg'
    }

    return currentSpotData.value.image.url
})

const imageWebPUrl = computed(() => {
    if (!currentSpotData.value || !currentSpotData.value.image) {
        return '/image/place_image_fallback.jpg'
    }

    console.log('======= currentSpotData.value.image ========')
    console.log(currentSpotData.value.image)
    console.log(currentSpotData.value.image.webpUrl)

    return currentSpotData.value.image.webpUrl
})

const imageTitle = computed(() => {
    // no data at all (typescript fallback)
    if (!currentSpotData.value) {
        return ''
    }

    // no image title set >> title of spot as fallback
    if (!currentSpotData.value.image || !currentSpotData.value.image.title) {
        return currentSpotData.value.title
    }

    return currentSpotData.value.image.title
})

watch(
    () => singleSpotSelectedStore.currentSpotData,
    () => {
        if (singleSpotSelectedStore.currentSpotData) {
            currentSpotData.value =
                singleSpotSelectedStore.currentSpotData.singleSpot
        }
    }
)
</script>

<style lang="sass">
.b-place-details
    color: $color_place_details_text
    line-height: 1.5
    animation: animationFadeIn 2s
    padding: $space_03

    .place-details-heading
        @include font-size($h5-font-size)
        margin-right: 35px // 30px close icon + space

    .place-details-thumb-area
        display: flex
        flex-direction: column
        margin-top: 15px

        // image aspect ratio padding trick
        // https://css-tricks.com/aspect-ratio-boxes/
        .place-details-thumb-image-inner
            height: 0
            overflow: hidden
            position: relative
            background: $color_dark_01
            // numbers from size original image
            padding-top: calc(250px / 440px * 100%)

            .place-details-thumb-image
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%

        .place-details-thumb-credits
            font-size: .65rem
            margin-bottom: 0
            color: $color_place_details_credits

    .place-details-line
        margin-top: 15px

        // span
        .place-details-lin-text
            @include font-size($small-font-size)
            display: block
            color: $color_place_details_info
</style>
