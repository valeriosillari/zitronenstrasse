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
import GQL_QUERY_SINGLE_SPOT_COLLECTION from '../../graphql/singleSpotCollection'

// TODO: set TYPES in separate folder
type TypeSpotsItems = {
    sys: {
        id: string
    }
    id: number
    title: string
    address: {
        lat: number
        lon: number
    }
}

type TypeSingleSpotCollection = {
    singleSpotCollection: {
        items: TypeSpotsItems[]
    }
}

const runtimeConfig = useRuntimeConfig()

const mapRef = ref(null)

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
    // FIRST: center map to marker
    mapRef.value.map.panTo({
        lat,
        lng,
    })

    // magic trick
    // THEN: arrange map position again to "balance" map off canvas area
    // 200 is the magic number
    mapRef.value.map.panBy(-200, 0)
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
// a click get marker/place ID (from CMS)
const clickMarkerHandler = (singlePlace: TypeSpotsItems) => {
    // if click on same marker (and sidebar OPENED with already current place) >> do nothing
    if (
        sidebarStore.isSidebarOpen &&
        currentSpotData.value &&
        currentSpotData.value.singleSpot.id === singlePlace.id
    ) {
        return false
    }

    // TODO: check me again
    // reset data on sidebar
    // singleSpotSelectedStore.resetSidebarState()

    // ================
    // 1. first check if we need sidebar (open it or already opened)
    if (!sidebarStore.isSidebarOpen) {
        sidebarStore.openSidebarState()
    }

    // pass spotID to store | to start API call (query GraphQL) and get spot data
    singleSpotSelectedStore
        .updateSingleSpotSelectedState(singlePlace.sys.id)
        // TODO: set as sepaarte function?
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

onMounted(() => {
    // got map loaded
    if (window.google.maps) {
        // then update value (for markers with fade animation)
        isMapLoaded.value = true
    }
})
</script>

<style lang="sass">
.b-google-map
    position: relative
    height: 100%
    width: 100%

    // remove google cc
    // and remove some weird grey box set on right side from google
    .gm-style-cc
        display: none

    // custom marker / pin
    .map-marker
        width: 25px
        height: 30px
        opacity: 0
        // bouncing animation @click (class added by JS)
        &.is-bouncing
            animation: bounceMarker 1.8s 3

    // class added when map loaded: marker shown at map loaded
    &.is-map-loaded
        .map-marker
            opacity: 1

    // no js fallback | no map (no div loaded unstyled that "crash" page layout)
    .no-js &
        display: none
</style>
