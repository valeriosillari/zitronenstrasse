<template lang="pug">
    .map-main-wrapper.map-wrapper-sidebar-push(
        v-bind:class="{ 'is-sidebar-open' : $store.state.sidebar.isOpen }"
    )
        //- hidden heading for seo.
        //- inside component for design reasons (I'm lazy)
        h1.hidden-text
            | Zitronenstrasse
        p.hidden-text
            | Zitronenstrasse is a mapping project to collect and share romantic spots in Berlin.
            br
            | Bars, cafes, restaurants, bistros, parks and some little hidden places around the city

        GmapMap(
            ref='mapRef'
            :center='center'
            :zoom='zoom'
            :options='options'
        )

        //- Sidebar
        //- todo: set via store the close logid
        .sidebar-animation
            Sidebar(
                :currentPlace='$store.state.currentPlace.item'
            )
</template>

<style lang="sass">
.map-main-wrapper
  height: 100%

// text for seo
.hidden-text
  display: none

// WRAPPER classes
.map-wrapper-sidebar-push
  overflow-x: hidden
  position: relative
  left: 0

.sidebar-animation
  position: fixed
  top: 0
  z-index: 1000
  height: 100%
  width: 100%
  background: $color_sidebar_bg
  right: -$sidebar_width_xs
  +breakpoint($breakpoint_sm)
    width: $sidebar_width_sm
    right: -$sidebar_width_sm
  +breakpoint($breakpoint_md)
    width: $sidebar_width_md
    right: -$sidebar_width_md

$sidebar_animation: all .35s ease
// Transitions
.sidebar-animation,
.map-wrapper-sidebar-push
  -webkit-transition: $sidebar_animation
  -moz-transition: $sidebar_animation
  transition: $sidebar_animation

// -- OPEN. js add classes

// extra class added via JS when sidebar is shown (WRAPPER/PARENT element)
.is-sidebar-open
  left: -$sidebar_width_xs
  +breakpoint($breakpoint_sm)
    left: -$sidebar_width_sm
  +breakpoint($breakpoint_md)
    left: -$sidebar_width_md
  // extra class added via JS when sidebar is shown (sidebar element)
  .sidebar-animation
    right: 0px

// === no JS logic | modernizr ===
// not show map (google)
.no-js
  .google-map
    display: none


// plugin wrapper overwritten
.vue-map-container
  width: 100%
  height: 100%

// map bg when loading
.gm-style
  background: $color_map_bg

// remove google cc
// and remove some weird grey box set on right side from google
.gm-style-cc
  display: none
</style>

<script>
import placesList from '~/static/places_list.js'
import mapStylesDark from '~/components/MapGoogle/_mapStylesDark.js'
import customMarker from '~/components/MapGoogle/_markerCustomStyles.js'
import Sidebar from '~/components/Sidebar.vue'

export default {
    components: {
        Sidebar,
    },

    data() {
        return {
            // map
            center: {
                lat: 52.48383,
                lng: 13.4395546,
            },
            zoom: 14,
            // map options
            options: {
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControl: false,
                // set custom map styles
                styles: mapStylesDark,
            },
            // rest of options
            isScreenBig: false,
            // map drag for marker animation
            isMapDragged: false,
        }
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted() {
        // wait having the map created. info and tips from this issue:
        // https://github.com/xkjyeah/vue-google-maps/issues/301
        this.$refs.mapRef.$mapPromise.then((map) => {
            // wait google Plugin set and attached to window object
            const google = window.google
            // need to be here, after google is set
            const initLogic = () => {
                // function for PAN movement
                google.maps.Map.prototype.panToWithOffset = function (
                    latlng,
                    offsetX,
                    offsetY
                ) {
                    const ov = new google.maps.OverlayView()
                    ov.onAdd = function () {
                        const proj = this.getProjection()
                        const aPoint = proj.fromLatLngToContainerPixel(latlng)
                        aPoint.x = aPoint.x + offsetX
                        aPoint.y = aPoint.y + offsetY
                        map.panTo(proj.fromContainerPixelToLatLng(aPoint))
                    }
                    ov.draw = () => {}
                    ov.setMap(this)
                }

                // set single marker Loop (at page load)
                const setSingleMarker = (indexNumber, placeID) => {
                    // firts create object with all data for current marker
                    const marker = new google.maps.Marker({
                        // set current map
                        map,
                        // set icon custom style
                        icon: customMarker,
                        // set position
                        position: new google.maps.LatLng(
                            placeID.position.lat,
                            placeID.position.lng
                        ),
                    })

                    // at marker click passed all the current marker info to the store object:
                    // so we update globally the info about current item in all components
                    google.maps.event.addListener(marker, 'click', () => {
                        // set update object to pass to the store
                        const currentPlace = {
                            title: placeID.title,
                            address: placeID.address,
                            thumb: placeID.thumb || '000_place_fallback.jpg',
                            thumbCredits: placeID.thumbCredits,
                            website: placeID.website,
                            fbPage: placeID.fbPage,
                            position: {
                                lat: placeID.position.lat,
                                lng: placeID.position.lng,
                            },
                        }

                        // update store with current place data
                        this.$store.commit(
                            'currentPlace/updateCurrentPlace',
                            currentPlace
                        )

                        // marker animation
                        this.markerAnimation(marker)

                        // open sidebar + pan movement (for centering)
                        this.openSidebar(window.innerWidth)
                    })

                    return marker
                    // ./ end setSingleMarker
                }

                // Loop our LIST array and set marker on map
                for (const [indexNumber, placeID] of placesList.entries()) {
                    setSingleMarker(indexNumber, placeID)
                }

                // return map so we can used it globally
                this.map = map

                // TODO: set as function?
                // check if user is dragging the map. we need it later for close option
                google.maps.event.addListener(map, 'dragend', () => {
                    this.isMapDragged = true
                })

                // ./ end init
            }

            initLogic()

            // ./ end map created
        })
    },

    methods: {
        // move map (animation) to current marker
        panMovement(movementLatValue) {
            this.map.panToWithOffset(
                new window.google.maps.LatLng(
                    // from store
                    this.$store.state.currentPlace.item.position.lat,
                    this.$store.state.currentPlace.item.position.lng
                ),
                movementLatValue,
                0
            )
        },

        markerAnimation(currentMarker) {
            // todo: set better with NO timeout?
            // start bounce
            setTimeout(() => {
                currentMarker.setAnimation(window.google.maps.Animation.BOUNCE)
            }, 400)
            // end bounce
            setTimeout(() => {
                currentMarker.setAnimation(null)
            }, 1150)
        },

        openSidebar(screen) {
            // todo: set if/else on one line
            this.isScreenBig = false
            if (screen >= 576) {
                this.isScreenBig = true
            }

            // reset drag option
            this.isMapDragged = false

            // pan movement if big screen
            if (this.isScreenBig) {
                this.panMovement(-200)
            }

            // update store: sidebar is open
            this.$store.commit('sidebar/isSidebarOpen', true)
        },
    },
}
</script>
