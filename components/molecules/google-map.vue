<template>
    <GoogleMap
        ref="mapRef"
        :class="['b-google-map', { 'is-map-loaded': isMapLoaded }]"
        :api-key="runtimeConfig.public.googleMapKey"
        :map-id="runtimeConfig.public.googleMapStyleMapId"
        :center="mapCenter"
        :background-color="mapBgColor"
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
            <img
                :id="`marker-id-${singlePlace.id}`"
                :alt="singlePlace.title"
                class="map-marker"
                src="/assets/svg/markerStyled.svg"
            />
        </CustomMarker>
    </GoogleMap>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GoogleMap, CustomMarker } from 'vue3-google-map'
import type {
    TypeSingleSpotData,
    TypeSingleSpotCollection,
} from '@/types/TypeSingleSpot'
import GQL_QUERY_SINGLE_SPOT_COLLECTION from '@/graphql/singleSpotCollection'

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

// TODO: set as var global?
// as page body bg
const mapBgColor = '#2B2B2B'

const { data } = await useAsyncQuery<TypeSingleSpotCollection>(
    GQL_QUERY_SINGLE_SPOT_COLLECTION,
    {
        // max
        limit: 100,
    }
)

const placesList = data.value?.singleSpotCollection?.items

// function for PAN movement that also consider some window movement (to balance center with off canvas)
const centerMapToCurrentPlace = (lat: number, lng: number) => {
    if (mapRef.value?.map) {
        const googleMap = mapRef.value.map as google.maps.Map
        // Perform operations with `googleMap`

        // FIRST: center map to marker
        googleMap.panTo({
            lat,
            lng,
        })

        // magic trick
        // THEN: arrange map position again to "balance" map off canvas area
        // 200 is the magic number
        googleMap.panBy(-200, 0)
    }
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

// TODO: here try to decouple logic, too much stuff
// at click get marker/place ID (from CMS)
const clickMarkerHandler = (singlePlace: TypeSingleSpotData) => {
    // if click on same marker (and sidebar OPENED with already current place) >> do nothing
    if (
        sidebarStore.isSidebarOpen &&
        currentSpotData.value &&
        currentSpotData.value.singleSpot.id === singlePlace.id
    ) {
        return false
    }

    // check if we need to open sidebar (open it or not - already opened)
    if (!sidebarStore.isSidebarOpen) {
        sidebarStore.openSidebarState()
    }

    // pass spotID to store | to start API call (query GraphQL) and get spot data
    singleSpotSelectedStore
        .updateSingleSpotSelectedState(singlePlace.sys.id)
        // TODO: set as sepaarate function?
        // 3) MOVE / PAN map to new marker at center
        .then(() => {
            // set pan and center NOT mobile screen (sidebar take all screen, pan not necessary)
            if (window.innerWidth >= 576) {
                centerMapToCurrentPlace(
                    singlePlace.address.lat,
                    singlePlace.address.lon
                )

                setTimeout(() => {
                    currentMarkerAnimation(singlePlace.id)
                }, 500)
            }
        })
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
