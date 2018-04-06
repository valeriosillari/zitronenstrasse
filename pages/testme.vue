<template lang="pug">
  section.section.section-text
    .container
      h1
        | Test
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
