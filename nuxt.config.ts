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
        public: {
            projectName: CONFIG.projectName,
            htmlNoJsClass: CONFIG.htmlNoJsClass,
            htmlYesJsClass: CONFIG.htmlYesJsClass,
            limitQueryGql: 5,
            appVersion: CONFIG.appVersion,
            authorSiteRoot: CONFIG.authorSiteRoot,
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
            default: {
                // GraphQL endpoint (contentful), proxied on my website
                // note: it needs to be under "www" domain
                httpEndpoint: CONFIG.apiUrl,
            },
        },
    },

    site: {
        url:
            process.env.NUXT_PUBLIC_SITE_URL ||
            (process.env.NODE_ENV === 'development' ? CONFIG.appMainUrl : ''),
        name: CONFIG.title,
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
