<template>
  <div class="cippa">

    <h1>
      START
    </h1>

    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
    </GmapMap>

    <h1>
      END
    </h1>

  </div>
</template>




<style lang="sass">
</style>




<script>
  export default {
    components: {
    },

    data () {
      return {
      }
    },

    methods: {
    },

    // mounted: WHEN ALL code on server is already loaded!
    mounted () {
      console.log('map componnet MOUNTED')
    }
  }
</script>
