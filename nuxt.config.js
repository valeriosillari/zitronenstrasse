const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'zitronenstrasse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
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

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#e0d853',
    height: '5px'
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
      'bootstrap'
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
    '~/plugins/vue-google-maps'
  ]
}
