import { fileURLToPath } from 'node:url'

import CONFIG from './config/config'
import METADATA from './config/metaData'

export default defineNuxtConfig({
    devtools: { enabled: true },

    devServer: {
        port: CONFIG.localPort,
    },

    //  "forced" typescript checks | very strict mode
    typescript: {
        typeCheck: true,
    },

    runtimeConfig: {
        // server only | value used to set a proxy api endpoint inside the app itself
        originalEndpointToBeProxied: CONFIG.apiUrlFullOriginal,

        // public
        public: {
            projectName: CONFIG.projectName,
            htmlNoJsClass: CONFIG.htmlNoJsClass,
            htmlYesJsClass: CONFIG.htmlYesJsClass,
            limitQueryGql: 5,
            appVersion: CONFIG.appVersion,
            authorSiteRoot: CONFIG.authorSiteRoot,
            appMainUrl: CONFIG.appMainUrl,
            authorName: CONFIG.authorName,
            headTitleString: CONFIG.title,
            googleMapKey: process.env.GOOGLE_MAP_KEY,
            googleMapStyleMapId: process.env.GOOGLE_MAP_STYLE_MAP_ID,
        },
    },

    modules: [
        '@nuxtjs/apollo',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxt/image',
        '@nuxtjs/sitemap',
        '@vueuse/nuxt',
        'nuxt-gtag',
        '@nuxtjs/google-fonts',
    ],

    googleFonts: {
        families: {
            Roboto: {
                wght: [400],
            },
            'Saira+Condensed': {
                wght: [300],
            },
        },
    },

    gtag: {
        id: process.env.GOOGLE_ANALYTICS_KEY,
    },

    apollo: {
        clients: {
            // INFO: 2 endpoints
            // - one for Server : original Contentful | on server so absolute and protected
            // - one for Client: application internal api endpoint, with proxied original url
            default: {
                // SSR | server: MUST be absolute (Node fetch needs absolute URL)
                httpEndpoint: CONFIG.apiUrlFullOriginal,
                // CLIENT | Browser: can be relative at runtime and build
                browserHttpEndpoint: CONFIG.apiUrlRelative,
            },
        },
    },

    site: {
        // url on local + bun will give a warning on bun install. it's all fine.
        url: CONFIG.appMainUrl,
        name: CONFIG.title,
    },

    alias: {
        '@Types': fileURLToPath(new URL('./types', import.meta.url)),
        '@Config': fileURLToPath(new URL('./config', import.meta.url)),
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

    // all global css code (sass, css, scss ...)
    css: ['~/assets/sass/root.sass'],

    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },

        head: {
            htmlAttrs: {
                lang: 'en',
                // no js class (as Modernizr).
                // removed later by the application (by utils function on app level)
                class: CONFIG.htmlNoJsClass,
            },

            title: CONFIG.title,

            // all HEAD meta data options
            meta: METADATA,

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
                    href: CONFIG.appMainUrl,
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
