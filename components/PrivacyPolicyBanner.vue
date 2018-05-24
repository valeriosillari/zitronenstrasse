<template>
  <no-ssr>
    <div>
      <cookie-law theme="dark-lime">
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
