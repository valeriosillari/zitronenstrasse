<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top

    nuxt-link.navbar-brand(to='/')
      | Home Nav Bar

    button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
      span.navbar-toggler-icon

    #navbarSupportedContent.collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item
          nuxt-link.nav-link(to='/about')
            | About
        li.nav-item
          nuxt-link.nav-link(to='/contact')
            | Contact
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
