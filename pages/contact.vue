<template lang="pug">
  section.section.section-top
    .container

      h1
        | Contact

      p
        | Do you want to tell us something?

      P
        | Maybe a new romantic place you know and want to share?

      P
        | Write us a
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
    &:hover
      text-decoration: underline
</style>
