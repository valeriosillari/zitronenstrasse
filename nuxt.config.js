const dotenv = require('dotenv').config({path: './env_variables/env_keys'})
const webpack = require('webpack')

// set GOOGLE keys via dotenv
const googleMapApiKey = process.env.GOOGLE_MAP_API_KEY || ''
const googleAnalyticsKey = process.env.GOOGLE_ANALYTICS_KEY || ''
const googleVerificationOwnerKey = process.env.GOOGLE_VERIFICATION_OWNER_KEY || ''

// main title
const headTitle = 'Zitronenstrasse | Romantic Spots in Berlin.'

// used in head description in all the pages
const headDescription = 'A mapping project to collect and share romantic spots in Berlin.'

// the URL set as variables: for redirect DNS
const thisAppMainUrl = 'http://www.zitronenstrasse.com'

// og for FB and Linkedin
const ogUrl = thisAppMainUrl
const ogTitle = headTitle
const ogDescription = headDescription
const ogType = 'website'
const ogImage = `${thisAppMainUrl}/favicons/zitronenstrasse_og_image.png`
const ogImageWidth = '1200'
const ogImageHeight = '630'

module.exports = {
  /*
  ** ENV vars to spread in all the app.
  ** https://nuxtjs.org/api/configuration-env
  */
  env: {
    metaHeadDescription: headDescription,
    googleMapApiKey: googleMapApiKey
  },

  /*
  ** Headers of the page
  ** https://github.com/declandewet/vue-meta#recognized-metainfo-properties
  */
  head: {
    title: headTitle,

    // this htmlAttrs removed for using correctly Modernizr no-js/js class
    // NOT ADD any class attribute here !!!
    // htmlAttrs: {
    //   class: 'XXX'
    // },

    // this bodyAttrs you need
    // bodyAttrs: {
    //   // if you set this attribute in a component, that option will overwrite here the config file
    //   class: 'extra-body-class'
    // },

    meta: [
      {
        ['http-equiv']: 'x-ua-compatible',
        content: 'ie=edge'
      },
      {
        charset: 'utf-8'
      },
      // viewport set on mobile
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: headDescription
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Valerio Sillari'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Zitronenstrasse, Zitrone, Strasse, Berlin, Zitrone Berlin, Zitronen Berlin, Map, Mapping, Frontend, Vue, Nuxt, Romantic, Spots, Romantic Spots Berlin'
      },
      // OG options for open graph: Fb and Linkedin
      {
        hid: `og:title`,
        property: 'og:title',
        content: ogTitle
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: ogDescription
      },
      {
        hid: `og:type`,
        property: 'og:type',
        content: ogType
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: ogUrl
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: ogImage
      },
      {
        hid: `og:image:width`,
        property: 'og:image:width',
        content: ogImageWidth
      },
      {
        hid: `og:image:height`,
        property: 'og:image:height',
        content: ogImageHeight
      },
      // Twitter card
      {
        hid: `twitter:card`,
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: `twitter:site`,
        property: 'twitter:site',
        content: '@zitronenstrasse'
      },
      {
        hid: `twitter:creator`,
        property: 'twitter:creator',
        content: 'Valerio Sillari'
      },
      {
        hid: `twitter:title`,
        property: 'twitter:title',
        content: ogTitle
      },
      {
        hid: `twitter:description`,
        property: 'twitter:description',
        content: ogDescription
      },
      {
        hid: `twitter:image`,
        property: 'twitter:image',
        content: ogImage
      },
      {
        hid: `twitter:image:alt`,
        property: 'twitter:image:alt',
        content: ogTitle
      },
      // meta for google verificagion
      // alternative mode, NOT HTML file added in the root
      // https://support.google.com/webmasters/answer/35179?hl=en
      // check "HTML tag" option
      {
        name: 'google-site-verification',
        content: googleVerificationOwnerKey
      },
    ],
    link: [
      // favicon
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicons/favicon.ico'
      },
      // apple-touch-icon
      {
        rel: 'apple-touch-icon',
        href: 'favicons/apple_touch_icon.png'
      },
      // link canonical
      {
        rel: 'canonical',
        href: thisAppMainUrl
      },
      // site manifest
      {
        rel: 'manifest',
        href: 'favicons/site.webmanifest'
      }
      // CSS font as external resources from Google Fonts
      // {
      //   rel: 'stylesheet',
      //   // set css at end of body:
      //   // https://github.com/nuxt/nuxt.js/issues/241
      //   // body: true
      // }
    ],

    script: [
      {
        // js external here
      }
    ]
  },

  /*
  ** Site Map Options
  */
  sitemap: {
    path: '/sitemap.xml',
    hostname: ogUrl,
    cacheTime: 1000 * 60 * 15,
    // Enable me when using nuxt generate
    generate: false,
    exclude: [
      // empty
    ],
    routes: [
      { url: '/', changefreq: 'daily' },
      { url: '/about', changefreq: 'daily' },
      { url: '/contact', changefreq: 'daily' },
      { url: '/privacy-policy', changefreq: 'daily' }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      // for google map on IE11
      'babel-polyfill'
    ],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        // here ...
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      config.module.rules.forEach((rule) => {
        // add to ALL vue modules the sass file 'global'
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass[2].options.data = '@import "./assets/stylesheets/global"'
        }
      })

      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      // for vue2-google-maps
      if (!ctx.isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#ffd400',
    height: '5px'
  },

  /*
  ** Customize the Vue Plugins
  */
  plugins: [
    '~/plugins/modernizr-plugin',
    '~/plugins/vue-cookie-law',
    '~/plugins/vue2-google-maps'
  ],

  /*
  ** Customize modules. now for google analytics
  */
  modules: [
    // Simple usage
    // https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics', {
        id: googleAnalyticsKey
      }
    ],
    '@nuxtjs/sitemap',
    '@nuxtjs/font-awesome'
  ]
}
