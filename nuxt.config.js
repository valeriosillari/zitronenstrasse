const webpack = require('webpack')
const dotenv = require('dotenv').config({path: './env_variables/env_keys'})

const headTitle = 'Zitronenstrasse | Romantic Spots in Berlin.'
const headDescription = 'Zitronenstrasse | Romantic Spots in Berlin.'

module.exports = {
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
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '~/plugins/vue-google-maps'
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
