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
        |
        span.text-accent
          | we’d love to hear your romantic thoughts!

      P
        | Write us an
        |
        a.link-text(href='mailto:hello@zitronenstrasse.com')
          | Email
        |
        | or follow us on
        |
        a.link-text(href='https://www.facebook.com/zitronenstrasse/', title='Zitronenstrasse on Facebook', target='_blank')
          | Facebook
        |
        | or
        |
        a.link-text(href='https://twitter.com/zitronenstrasse' title='Zitronenstrasse on Twitter', target='_blank')
          | Twitter
</template>


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
            content: `Contact | Zitronenstrasse | ${process.env.metaHeadDescription}`
          }
        ]
      }
    }
  }
</script>
