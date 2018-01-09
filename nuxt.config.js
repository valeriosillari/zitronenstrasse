const dotenv = require('dotenv').config({path: './env_variables/env_keys'})
const webpack = require('webpack')

// set GOOGLE MAP API KEY access keys
const mapApiKey = process.env.GOOGLE_MAP_API_KEY || ''

const headTitle = 'Zitronenstrasse | Romantic Spots in Berlin.'
const headDescription = 'Zitronenstrasse | Romantic Spots in Berlin.'

// og for FB and Linkedin
const ogTitle = headTitle
const ogDescription = headDescription
const ogType = 'website'
const ogImage = '/zitronenstrasse_og_image_001.png'
// TODO: the URL set as variables check for redirect DNS
const ogUrl = 'https://zitronenstrasse.herokuapp.com/'


module.exports = {
  /*
  ** ENV vars to spread in all the app.
  ** https://nuxtjs.org/api/configuration-env
  */
  env: {
    // empty
  },

  /*
  ** Headers of the page
  */
  head: {
    title: headTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
      	hid: 'description',
      	name: 'description',
      	content: headDescription
      },
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
      }
    ],
    link: [
      // favicon
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        // call google map javascript API
        src: `https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&v=3&libraries=places`, async: true, defer: true
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      // here ...
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
    // TODO
  ],

  /*
  ** Customize modules. now for google analytics
  */
  modules: [
    // Simple usage
    // https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics', {
        id: 'UA-110867603-1'
      }
    ]
  ]
}
