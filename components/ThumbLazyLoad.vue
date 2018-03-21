<template lang="pug">
    img.thumb(
      v-if='infoThumbLazyLoad.thumb'
      :src='infoThumbLazyLoad.thumb'
      :alt='infoThumbLazyLoad.title'
    )
    //- fallback
    img.thumb(
      v-else='infoThumbLazyLoad.thumb'
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
