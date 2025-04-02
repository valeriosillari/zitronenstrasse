<template>
    <GoogleMap
        ref="mapRef"
        :class="['b-google-map', { 'is-map-loaded': isMapLoaded }]"
        :api-key="runtimeConfig.public.googleMapKey"
        :map-id="runtimeConfig.public.googleMapStyleMapId"
        :center="mapCenter"
        :zoom="mapZoom"
        language="EN"
        :clickable-icons="false"
        :street-view-control="false"
        :fullscreen-control="false"
        :map-type-control="false"
    >
        <CustomMarker
            v-for="singlePlace in placesList"
            :key="singlePlace.id"
            :options="{
                anchorPoint: 'BOTTOM_CENTER',
                position: {
                    lat: singlePlace.address.lat,
                    lng: singlePlace.address.lon,
                },
            }"
            @click="clickMarkerHandler(singlePlace)"
        >
            <NuxtImg
                :id="`marker-id-${singlePlace.id}`"
                class="map-marker"
                src="/svg/markerStyled.svg"
                loading="lazy"
            />
        </CustomMarker>
    </GoogleMap>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GoogleMap, CustomMarker } from 'vue3-google-map'
import { useWindowSize } from '@vueuse/core'

import type {
    TypeSingleSpotData,
    TypeSingleSpotCollection,
} from '@/types/TypeSingleSpot'

import GQL_QUERY_SINGLE_SPOT_COLLECTION from '@/graphql/singleSpotCollection'

const { width } = useWindowSize()

const runtimeConfig = useRuntimeConfig()

const mapRef = ref<InstanceType<typeof GoogleMap> | null>(null)

const sidebarStore = useSidebarStore()
const singleSpotSelectedStore = useSingleSpotSelectedStore()

const currentSpotData = computed(() => singleSpotSelectedStore.currentSpotData)

const mapCenter = {
    lat: 52.48383,
    lng: 13.4395546,
}

const isMapLoaded = ref(false)

const mapZoom = 14

const { data } = await useAsyncQuery<TypeSingleSpotCollection>(
    GQL_QUERY_SINGLE_SPOT_COLLECTION,
    {
        // max
        limit: 100,
    }
)

const placesList = data.value?.singleSpotCollection?.items

// function for PAN movement that also consider some window movement (to balance center with off canvas)
const centerMapToCurrentPlace = (lat: number, lng: number): void => {
    // Early return if the map reference is not available
    const googleMap = mapRef.value?.map as google.maps.Map | undefined

    if (!googleMap) return

    // Center the map to the specified marker position
    googleMap.panTo({ lat, lng })

    // Adjust the map position to balance off-canvas elements
    googleMap.panBy(-200, 0)
}

const currentMarkerAnimation = (markerId: number) => {
    const bounceClass = 'is-bouncing'
    const previousMarkerBounced = document.getElementsByClassName(bounceClass)
    const currentMarker = document.getElementById(`marker-id-${markerId}`)

    // reset previous class if already added
    for (const item of previousMarkerBounced) {
        item.classList.remove(bounceClass)
    }

    // add class >>> set animation by css
    if (currentMarker) {
        currentMarker.classList.add(bounceClass)
    }
}

const waitForPanEnd = (map: google.maps.Map): Promise<void> => {
    return new Promise((resolve) => {
        // Listen for the 'idle' event which signals that the panning has finished.
        google.maps.event.addListenerOnce(map, 'idle', () => {
            resolve()
        })
    })
}

const moveMapByPan = async (singlePlace: TypeSingleSpotData): Promise<void> => {
    // TODO: check later
    if (mapRef.value?.map) {
        // INNER WIDTH!!!! check me again
        // set pan and center NOT mobile screen (sidebar take all screen, pan not necessary)

        if (width.value >= 576) {
            centerMapToCurrentPlace(
                singlePlace.address.lat,
                singlePlace.address.lon
            )

            await waitForPanEnd(mapRef.value.map)
        }
    }
}

// TODO: here try to decouple logic, too much stuff
// at click get marker/place ID (from CMS)
const clickMarkerHandler = async (singlePlace: TypeSingleSpotData) => {
    // if click on same marker (and sidebar OPENED with already current place) >> do nothing
    if (
        sidebarStore.isSidebarOpen &&
        currentSpotData.value &&
        currentSpotData.value.singleSpot.id === singlePlace.id
    ) {
        return false
    }

    // reset spot data (from previous iteration)
    singleSpotSelectedStore.resetSpotShowState()

    // map movement (PAN) + jumping pin (wait for it on JS for UI animation)
    await moveMapByPan(singlePlace)

    // check if we need to open sidebar (open it or not - already opened)
    // added timeout for UX:
    // when pan is done, wait "a moment" for opening sidebar and "pin jump".
    // to avoid "jumpy effect" and too much animation next to each other
    setTimeout(() => {
        // jump pin
        currentMarkerAnimation(singlePlace.id)

        // open sidebar
        if (!sidebarStore.isSidebarOpen) {
            sidebarStore.openSidebarState()
        }
    }, 200)

    // pass spotID to store | to start API call (query GraphQL) and GET new spot data
    singleSpotSelectedStore.updateSingleSpotSelectedState(singlePlace.sys.id)
}

watch(
    // "mapTilesLoaded" trick: check when all map is set
    // value is coming from vue plugin, using official property from google map "tilesloaded"
    // ref: https://stackoverflow.com/questions/832692/how-can-i-check-whether-google-maps-is-fully-loaded
    () => mapRef.value?.mapTilesLoaded,
    () => {
        if (mapRef.value?.mapTilesLoaded) {
            isMapLoaded.value = true
        }
    }
)
</script>

<style lang="sass">
.b-google-map
    position: relative
    height: 100%
    width: 100%
    opacity: 0
    transition-delay: 250ms
    transition: .5s

    // remove google cc
    // and remove some weird grey box set on right side from google
    .gm-style-cc
        display: none

    // custom marker / pin
    .map-marker
        width: 25px
        height: 30px

        // bouncing animation @click (class added by JS)
        &.is-bouncing
            animation: bounceMarker 1.8s 3

    // class added when map loaded: shown map when all loaded (avoid some visual glitches)
    &.is-map-loaded
        opacity: 1

    // no js fallback | no map (no div loaded unstyled that "crash" page layout)
    .no-js &
        display: none
</style>
