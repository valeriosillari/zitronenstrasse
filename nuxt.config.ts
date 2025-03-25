import CONSTANT from './config/constants'
import metaData from './config/metaData'

export default defineNuxtConfig({
    devtools: { enabled: true },

    devServer: {
        port: CONSTANT.localPort,
    },

    //  "forced" typescript checks | very strict mode
    typescript: {
        typeCheck: true,
    },

    runtimeConfig: {
        public: {
            htmlNoJsClass: CONSTANT.htmlNoJsClass,
            htmlYesJsClass: CONSTANT.htmlYesJsClass,
            limitQueryGql: 5,
            valeSiteRoot: CONSTANT.valeSiteRoot,
            appVersion: CONSTANT.appVersion,
            valeSiteAuthorName: CONSTANT.authorName,
            headTitleString: CONSTANT.title,
            googleMapKey: process.env.GOOGLE_MAP_KEY,
            googleMapStyleMapId: process.env.GOOGLE_MAP_STYLE_MAP_ID,
            NODE_ENV: process.env.NODE_ENV,
        },
    },

    modules: [
        '@nuxtjs/apollo',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxt/image',
        '@nuxtjs/sitemap',
        'nuxt-gtag',
        [
            // https://masanos.com/notes/l37t1_8qf-fv/
            '@nuxtjs/google-fonts',
            {
                families: {
                    Roboto: {
                        wght: [400],
                    },
                    'Saira+Condensed': {
                        wght: [300],
                    },
                },
            },
        ],
    ],

    gtag: {
        id: process.env.GOOGLE_ANALYTICS_KEY,
    },

    apollo: {
        clients: {
            default: {
                // GraphQL endpoint (contentful), proxied on my website
                // note: it needs to be under "www" domain
                httpEndpoint: CONSTANT.apiUrl,
            },
        },
    },

    site: {
        url: CONSTANT.appMainUrl,
        name: CONSTANT.title,
    },

    vite: {
        css: {
            preprocessorOptions: {
                // all global var and mixins and functions
                sass: {
                    additionalData:
                        '@use "~/assets/sass/root_configuration.sass" as *\n',
                },
            },
        },
    },

    build: {
        // Font awesome trick, for fixing hydration
        // https://github.com/nuxt/nuxt/discussions/16014
        transpile: [
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
        ],
    },

    // all pure code (sass, css, scss ...)
    css: ['@/assets/sass/root.sass'],

    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },

        head: {
            htmlAttrs: {
                lang: 'en',
                // // no js class (as Modernizr).
                // // removed later by the application (by utils function on app level)
                class: CONSTANT.htmlNoJsClass,
            },

            title: CONSTANT.title,

            // all HEAD meta data options
            meta: metaData,

            link: [
                // favicon (ico)
                {
                    rel: 'icon',
                    sizes: 'any',
                    href: '/app-icons/favicon.ico',
                },

                // TODO: set correct icon as svg
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/app-icons/icon.svg',
                },

                // apple-touch-icon
                {
                    rel: 'apple-touch-icon',
                    href: '/app-icons/apple_touch_icon.png',
                },

                // site manifest
                {
                    rel: 'manifest',
                    href: '/app-icons/site.webmanifest',
                },

                // link canonical
                {
                    rel: 'canonical',
                    href: CONSTANT.appMainUrl,
                },
            ],

            // // external js
            // script: [
            //     {
            //     },
            // ],
        },
    },

    compatibilityDate: '2025-03-14',
})
