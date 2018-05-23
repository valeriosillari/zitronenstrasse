<template lang="pug">
  section.section.section-text
    .container
      h1
        | Privacy Policy

      p
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perspiciatis dignissimos, ad? Nostrum vero eligendi quos temporibus, debitis, molestiae odio repellat enim iusto ipsa repellendus, quo eaque earum, hic laudantium!
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
