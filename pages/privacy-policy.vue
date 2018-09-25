<template lang="pug">
  section.section.section-text
    .container
      h1
        | Privacy Policy


      p
        | Here all the info about how we may collect personal data (PD) and non-personal data (NPD) from our users.

      ul.items
        li.item
          | Effective Date: May 24, 2018
        li.item
          | Notice Version: 1.01, Updated September 21st, 2018



      h2.sub-title
        | Data Controller Contact Information

      p
        | Valerio Sillari

      p
        | Owner contact email:
        |
        a.link-text(href='mailto:hello@zitronenstrasse.com')
          | hello@zitronenstrasse.com



      h2.sub-title
        | Types of Data collected

      p
        | Among the types of Personal Data that we collect, by ourself or through third parties, there are: Cookies.

      p
        | Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.

      p
        | Personal Data may be freely provided by the User, or, in case of Cookies, collected automatically when using the website.


      h2.sub-title
        | The rights of Users

      p
        | User may exercise certain rights regarding Data processed by the Owner.

      p
        | In particular, Users have the right to do the following:

      ul.items
        li.item
          | Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.
        li.item
          | Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.
        li.item
          | Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.
        li.item
          | Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.
        li.item
          | Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.
        li.item
          | Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.
        li.item
          | Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof.
        li.item
          | Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.



      h2.sub-title
        | How to exercise these rights

      p
        | Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. 



      h2.sub-title
        | We Collect Your Personal Data in the Following Ways


      h3.sub-section
        | Cookies

      p
        | When you enter and use our website and agree to accept cookies, some of these cookies may contain your Personal Data.

      p
        | Cookies are small text files that are placed on your machine to help the site provide a better user experience. In general, cookies are used to retain user preferences, store information for things like shopping carts, and provide anonymised tracking data to third party applications like Google Analytics.

      p
        | As a rule, cookies will make your browsing experience better.

      p
        | However, you may prefer to disable cookies on this site and on others. The most effective way to do this is to disable cookies in your browser. We suggest consulting the Help section of your browser or taking a look at the
        |
        a.link-text(href='https://www.aboutcookies.org/')
          | About Cookies website
        |
        | which offers guidance for all modern browsers



      h3.sub-section
        | Google Analytics

      p
        | Our website uses Google Analytics to collect information about the use of our website.

      p
        | Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of the website, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. This integration of Google Analytics anonymizes your IP address. It works by shortening Users' IP addresses within member states of the European Union or in other contracting states to the Agreement on the European Economic Area. Only in exceptional cases will the complete IP address be sent to a Google server and shortened within the US.

      p
        | Personal Data collected: Cookies and Usage Data.

      p
        | Place of processing: United States
        | -
        |
        a.link-text(href='https://policies.google.com/privacy?hl=en')
          | Privacy Policy
        |
        | –
        |
        a.link-text(href='https://tools.google.com/dlpage/gaoptout?hl=en')
          | Opt Out.
        |
        | Privacy Shield participant.

      h2.sub-title
        | Sharing Informations with affiliates and other third parties

      p
        | We do not sell or rent your Personal Data or Non-Personal Data to third parties for marketing purposes.



      h2.sub-title
        | Revoking your consent for using your personal data

      p
        | You have the right to revoke your consent for us to use your Personal Data at any time.

      p
        | If you want to revoke your consent for us to use your Personal Data, send us an email with your request  directed to the Owner through the contact details provided in this document. 



      h2.sub-title
        | Questions about our privacy policy

      p
        | If you have any questions about our privacy notice, please contact us using the information at the top of this privacy notice.

      nuxt-link.error-link(to='/', title='Back to the home page')
        | Back to the home page
</template>


<style lang="sass">
  .sub-title
    @extend .h3
    margin-top: 60px

  .sub-section
    @extend .h5
    margin-top: 30px
</style>


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
