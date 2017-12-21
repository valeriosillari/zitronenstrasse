const dotenv = require('dotenv').config({path: './env_variables/env_keys'})
const webpack = require('webpack')

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
        // todo
      }
    ]
  },

  // ENV : set here bby dot env, spread from here in all application
  env: {
    googleMapApiKey:  process.env.GOOGLE_MAP_API_KEY || ''
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
    color: 'gold',
    height: '5px'
  },

  /*
  ** Customize the Vue Plugins
  */
  plugins: [
    '~/plugins/vue_analytics',
    '~/plugins/vue-google-maps'
  ]
}
