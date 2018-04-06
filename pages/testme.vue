<template lang="pug">
  .cippa
    img(src='~/assets/basic.png')
    img(src='~/assets/img/sub_image_001.png')
    img(src='~/assets/img/thumbs/sub_thumbs_001.png')
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
