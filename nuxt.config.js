const dotenv = require('dotenv').config({path: './env_variables/env_keys'})
const webpack = require('webpack')

// set GOOGLE MAP API KEY access keys
const mapApiKey = process.env.GOOGLE_MAP_API_KEY

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Zitronenstrasse | Romantic Spots in Berlin.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Zitronenstrasse | Romantic Spots in Berlin.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        // TODO: try to call it via plugin for vue JS? just the library?
        // call google map javascript API
        src: `https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&v=3&libraries=places`
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#00ff00',
    height: '10px'
  },

  /*
  ** Global CSS
  */
  css: [
    'assets/stylesheets/global.sass'
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'jquery',
      'bootstrap',
    ],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        // needed for bootstrap transitions
        Popper: ['popper.js', 'default'],
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
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
  ** Customize the Vue Plugins
  */
  plugins: [
    '~/plugins/vue_analytics'
  ]
}
