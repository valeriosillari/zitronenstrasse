import axios from 'axios'
import pkg from './package'

// main title
const headTitle = 'Zitronenstrasse | Romantic Spots in Berlin.'

// used in head description in all the pages
const headDescription =
  'A mapping project to collect and share romantic spots in Berlin.'

// the URL set as variables: for redirect DNS
// with httpS: in case redirect take care of it
const thisAppMainUrl = 'https://zitronenstrasse.com'

// og for FB and Linkedin
const ogUrl = thisAppMainUrl
const ogTitle = headTitle
const ogDescription = headDescription
const ogType = 'website'
const ogImage = '/favicons/zitronenstrasse_og_image.png'
const ogImageWidth = '1200'
const ogImageHeight = '630'

console.log('================= config | check keys ===================')
console.log(process.env.NUXT_APP_VERCEL_ENV)

export default {
  // TODO: better common logic for ENV Keys
  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/
  publicRuntimeConfig: {
    appVersion: pkg.version,
    vercelEnv: process.env.VUE_APP_VERCEL_ENV,
    metaHeadDescription: headDescription,
  },
  // ENV vars to spread in all the app.
  // https://nuxtjs.org/api/configuration-env
  env: {
    nuxtEnvGoogleMapKey:
      process.env.ENV_ZITRONENSTRASSE_GOOGLE_MAP || 'no-key-map',
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // page transition common name. for css transition
  pageTransition: 'page-transition',

  // Load globally Functions / Variables / Mixins
  styleResources: {
    sass: ['assets/stylesheets/pre_processing/pre_processing.sass'],
  },

  // Global CSS | SASS
  css: [
    // font awesome
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  script: [
    {
      // js external here
    },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-cookie-law', mode: 'client' },
    '~/plugins/fontawesome',
    '~/plugins/vue2-google-maps',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',

    '@nuxtjs/sitemap',

    // for font-face
    'nuxt-webfontloader',

    // for loading sass var/mixin/function globally
    '@nuxtjs/style-resources',

    // Google Analytics
    // https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id:
          process.env.ENV_ZITRONENSTRASSE_GOOGLE_ANALYTICS ||
          'no-key-analytics',
      },
    ],
    [
      'nuxt-modernizr',
      {
        // setClasses: requires to set 'no-js' class in html DOM. For nuxt: into the app.html file
        options: ['setClasses'],
        'feature-detects': [
          // empty now ...
        ],
      },
    ],
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.ENV_ZITRONENSTRASSE_STORYBLOK_API_KEY,
        cacheProvider: 'memory',
      },
    ],
  ],

  // Load fonts from Google via Nuxt Font Package
  // No js = no font loaded
  webfontloader: {
    custom: {
      families: ['Roboto', 'Saira+Condensed'],
      urls: [
        'https://fonts.googleapis.com/css?family=Roboto:400&display=swap',
        'https://fonts.googleapis.com/css?family=Saira+Condensed:300&display=swap',
      ],
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},

    // set logic for loading vue2 google map
    transpile: [/^vue2-google-maps($|\/)/],
  },

  // Site Map Options
  sitemap: {
    path: '/sitemap.xml',
    gzip: true,
    hostname: ogUrl,
    cacheTime: 1000 * 60 * 15,
    exclude: [
      // empty
    ],
    routes: [
      { url: '/', changefreq: 'daily' },
      { url: '/about', changefreq: 'daily' },
      { url: '/contact', changefreq: 'daily' },
      { url: '/privacy-policy', changefreq: 'daily' },
    ],
  },

  /*
   ** Generate configuration
   */
  generate: {
    // set error page for generated static website
    fallback: '404.html',

    // Storyblok dynamic routes: Using Links API
    routes: (callback) => {
      const token = process.env.ENV_ZITRONENSTRASSE_STORYBLOK_API_KEY
      // when deploy, any branch, get only published storyblok content
      const version = 'published'
      const toIgnore = ['home', 'en/settings']
      // other routes that are not in Storyblok with their slug.
      const routes = ['/'] // adds / directly
      let cacheVersion = 0

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then((spaceRes) => {
          // timestamp of latest publish
          cacheVersion = spaceRes.data.space.version

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}&per_page=100`
            )
            .then((res) => {
              Object.keys(res.data.links).forEach((key) => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push('/' + res.data.links[key].slug)
                }
              })

              callback(null, routes)
            })
        })
    },
  },

  // TODO: i need here default values for meta tags? after storyblok changes
  /*
   ** Headers of the page
   ** https://github.com/declandewet/vue-meta#recognized-metainfo-properties
   */
  head: {
    title: headTitle,

    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge',
      },
      {
        charset: 'utf-8',
      },
      // viewport set on mobile
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: headDescription,
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Valerio Sillari',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Zitronenstrasse, Zitrone, Strasse, Berlin, Zitrone Berlin, Zitronen Berlin, Map, Mapping, Frontend, Vue, Nuxt, Romantic, Spots, Romantic Spots Berlin',
      },
      // OG options for open graph: Fb and Linkedin
      {
        hid: `og:title`,
        property: 'og:title',
        content: ogTitle,
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: ogDescription,
      },
      {
        hid: `og:type`,
        property: 'og:type',
        content: ogType,
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: ogUrl,
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: ogImage,
      },
      {
        hid: `og:image:width`,
        property: 'og:image:width',
        content: ogImageWidth,
      },
      {
        hid: `og:image:height`,
        property: 'og:image:height',
        content: ogImageHeight,
      },
      // Twitter card
      {
        hid: `twitter:card`,
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: `twitter:site`,
        property: 'twitter:site',
        content: '@zitronenstrasse',
      },
      {
        hid: `twitter:creator`,
        property: 'twitter:creator',
        content: 'Valerio Sillari',
      },
      {
        hid: `twitter:title`,
        property: 'twitter:title',
        content: ogTitle,
      },
      {
        hid: `twitter:description`,
        property: 'twitter:description',
        content: ogDescription,
      },
      {
        hid: `twitter:image`,
        property: 'twitter:image',
        content: ogImage,
      },
      {
        hid: `twitter:image:alt`,
        property: 'twitter:image:alt',
        content: ogTitle,
      },
      // site manifest
      {
        rel: 'manifest',
        href: '/favicons/site.webmanifest',
      },
    ],
    link: [
      // favicon
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicons/favicon.ico',
      },
      // apple-touch-icon
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple_touch_icon.png',
      },
      // link canonical
      {
        rel: 'canonical',
        href: thisAppMainUrl,
      },
    ],
  },
}
