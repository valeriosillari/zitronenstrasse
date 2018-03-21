<template lang="pug">
    div.line(v-if='infoThumbLazyLoad.thumb')
      img.thumb(
        :src='infoThumbLazyLoad.thumb'
        :alt='infoThumbLazyLoad.title'
      )
    //- fallback
    div.line(v-else='infoThumbLazyLoad.thumb')
      img.thumb(
        src='/thumb/fallback/440x250_fallback_magenta.png'
        :alt='infoThumbLazyLoad.title'
      )
</template>


<script>
  export default {
    // input from PARENTS
    props: [
      'infoThumbLazyLoad'
    ]
  }
</script>
