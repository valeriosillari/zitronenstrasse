<template>
    <section v-if="currentSpotData" class="b-place-details">
        <h2 class="place-details-heading">{{ currentSpotData.title }}</h2>

        <div class="place-details-thumb-area">
            <NuxtImg
                class="place-details-thumb-image"
                :alt="currentSpotData.image.title"
                :src="currentSpotData.image.url"
            />

            <div class="place-details-thumb-credits">
                <span>Credits:&nbsp;</span>
                <span>{{ currentSpotData.imageCredits }}</span>
            </div>
        </div>

        <div class="place-details-line">
            <span class="place-details-lin-text">Address:</span>
            <span class="place-details-address">address here</span>
        </div>

        <div class="place-details-line">
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
            </ul>
        </div>
    </section>

    <section v-else class="">Loading</section>
</template>

<script setup lang="ts">
const singleSpotSelectedStore = useSingleSpotSelectedStore()
// data from store
const currentSpotData = computed(() => singleSpotSelectedStore.currentSpot)
</script>

<style lang="sass">
.b-place-details
    color: $color_place_details_text
    line-height: 1.5
    animation: animationFadeIn 2s

    .place-details-heading
        @include font-size($h5-font-size)
        margin-right: 35px // 30px close icon + space

    .place-details-thumb-area
        display: flex
        flex-direction: column
        margin-top: 15px

        .place-details-thumb-image
            +img-fluid

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
