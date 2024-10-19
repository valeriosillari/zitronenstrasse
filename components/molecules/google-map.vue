<template>
    <GoogleMap
        ref="mapRef"
        class="b-google-map"
        :api-key="config.public.googleMapKey"
        :map-id="config.public.googleMapStyleMapId"
        :center="mapCenter"
        :background-color="mapBgColor"
        :zoom="mapZoom"
        language="EN"
        :clickable-icons="false"
        :street-view-control="false"
        :fullscreen-control="false"
        :map-type-control="false"
    >
        <AdvancedMarker
            v-for="singlePlace in placesList"
            :key="singlePlace.id"
            :pin-options="pinOptions"
            :options="{
                position: {
                    lat: singlePlace.address.lat,
                    lng: singlePlace.address.lon,
                },
            }"
            @click="clickMarkerHandler(singlePlace)"
        />
    </GoogleMap>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'
import GQL_QUERY_SINGLE_SPOT_COLLECTION from '../../graphql/singleSpotCollection'
import GQL_QUERY_SINGLE_SPOT_BY_ID from '../../graphql/singleSpot'

// import { GoogleMap, Marker } from 'vue3-google-map'
const config = useRuntimeConfig()

const mapRef = ref(null)

const sidebarStore = useSidebarStore()
const singleSpotSelectedStore = useSingleSpotSelectedStore()

const currentSpotData = computed(() => singleSpotSelectedStore.currentSpot)

const mapCenter = {
    lat: 52.48383,
    lng: 13.4395546,
}

const mapZoom = 14

// as page body bg
const mapBgColor = '#2B2B2B'

const pinOptions = { background: '#0f0' }

const { data } = await useAsyncQuery(GQL_QUERY_SINGLE_SPOT_COLLECTION, {
    limit: 10,
})

const placesList = data.value.singleSpotCollection.items

// function for PAN movement that also consider some window movement (to balance center with off canvas)
const centerMapToCurrentPlace = (singlePlace: object) => {
    // fiest center map to marker
    mapRef.value.map.panTo({
        lat: singlePlace.address.lat,
        lng: singlePlace.address.lon,
    })

    // magic trick
    // then arrange map position again to "balance" map off canvas area
    // 200 is the magic number
    mapRef.value.map.panBy(-200, 0)
}

// TODO: here try to decouple logic, too much stuff
// a click get marker/place ID (from CMS)
const clickMarkerHandler = (singlePlace: object) => {
    // if click on same marker (and sidebar OPENED with already current place) >> do nothing
    if (
        sidebarStore.isSidebarOpen &&
        currentSpotData.value &&
        currentSpotData.value.id === singlePlace.id
    ) {
        return false
    }

    // reset data on sidebar
    singleSpotSelectedStore.resetSidebarState()

    // ================
    // 1. first check if we need sidebar (open it or already opened)
    if (!sidebarStore.isSidebarOpen) {
        sidebarStore.openSidebarState()
    }

    // ================
    // 2) update data into the sidebar
    // TODO: can be query done on PINIA action?
    // got data, we have to return it
    const getDataSingleSpot = async (idString: string) => {
        const { data } = await useAsyncQuery(GQL_QUERY_SINGLE_SPOT_BY_ID, {
            id: idString,
        })
        return data
    }

    getDataSingleSpot(singlePlace.sys.id)
        .then((singleSpotData: object) => {
            // pass data to store
            singleSpotSelectedStore.updateSingleSpotSelectedState(
                singleSpotData.value.singleSpot
            )
        })
        // 3) MOVE / PAN map to new marker at center
        .then(() => {
            // set pan and center NOT mobile screen (sidebar take all screen, pan not necessary)
            if (window.innerWidth >= 576) {
                centerMapToCurrentPlace(singlePlace)
            }
        })
}
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
</style>
