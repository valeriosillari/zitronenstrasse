<template>
  <no-ssr>
    <div>
      <cookie-law theme='lemon-theme' buttonText='I agree'>
        <div slot="message">
          This site uses some cookies in order to count visits. By clicking the 'I agree' button you give your consent.
          More info here about Privacy Policy <router-link to='/privacy-policy' title="Privacy Policy Info">here</router-link>.
        </div>
      </cookie-law>
    </div>
  </no-ssr>
</template>


<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    components: { CookieLaw }
  }
</script>


<style lang="sass">
  .Cookie--lemon-theme
    background: #212121
    padding: 20px 15px
    .Cookie__content
      color: #c1c1c1

    .Cookie__button
      border: 1px solid $color_main
      padding: 10px 45px
      color: $color_white
      &:hover
        border: 1px solid $color_light_01
        color: $color_light_01
</style>
