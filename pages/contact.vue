<template lang="pug">
  section.section.section-text
    .container

      h1
        | Contact

      p.text-accent
        | Do you want to tell us something?

      P
        | Maybe a new romantic place you know and want to share?

      p
        | A comment about the project?

      p
        | A bug in the website?

      p
        | Or do you just want to spread your love for Zitronenstrasse?

      p
        | Whatever it is your message,
        | &nbsp;
        span.text-accent
          | we’d love to hear your romantic thoughts!

      P
        | Write us an
        | &nbsp;
        a.link-contact(href='mailto:hello@zitronenstrasse.com')
          | Email
        | &nbsp;
        | or follow us on
        | &nbsp;
        a.link-social(href='https://www.facebook.com/zitronenstrasse/', title='Zitronenstrasse on Facebook', target='_blank')
          | Facebook
        | &nbsp;
        | or
        | &nbsp;
        a.link-social(href='https://twitter.com/zitronenstrasse' title='Zitronenstrasse on Twitter', target='_blank')
          | Twitter
</template>


<style lang="sass">
  .link-contact,
  .link-social
    text-decoration: underline
    &:hover
      text-decoration: underline
</style>


<script>
  export default {
    head () {
      // Set Meta Tags for this Page
      return {
        title: 'Contact | Zitronenstrasse',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `Contact | Zitronenstrasse | A mapping project to collect and share romantic spots in Berlin.`
          }
        ]
      }
    }
  }
</script>
