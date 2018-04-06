<template lang="pug">
  .cippa
    img(src='~/assets/img/thumbs/fallback/fallback.png')
    img(src='~/assets/img/thumbs/places/place_001.png')   
</template>


<script>
  export default {
    layout: 'testing',
    head () {
      // Set Meta Tags for this Page
      return {
        title: 'TEST ME',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `About | Zitronenstrasse | A mapping project to collect and share romantic spots in Berlin.`
          }
        ]
      }
    }
  }
</script>
