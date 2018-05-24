<template lang="pug">
  section.section.section-text
    .container
      h1
        | Privacy Policy

      p
        | This site uses cookies – small text files that are placed on your machine to help the site provide a better user experience.

      p
        | In general, cookies are used to retain user preferences, store information for things like shopping carts, and provide anonymised tracking data to third party applications like Google Analytics. As a rule, cookies will make your browsing experience better.

      p
        | However, you may prefer to disable cookies on this site and on others.

      p
        | The most effective way to do this is to disable cookies in your browser. We suggest consulting the "Help Section" of your browser or taking a look at the
        |
        a.link-text(href='https://www.aboutcookies.org/', target='_blank')
          | About Cookies Website
        |
        | which offers guidance for all modern browsers
</template>


<script>
  export default {
    head () {
      // Set Meta Tags for this Page
      return {
        title: 'Privacy Policy | Zitronenstrasse',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `Privacy Policy | Zitronenstrasse | ${process.env.metaHeadDescription}`
          }
        ]
      }
    }
  }
</script>
