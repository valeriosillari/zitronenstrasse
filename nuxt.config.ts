const titleShort = 'Zitronenstrasse'

// main title
const headTitle = ` ${titleShort} | Romantic Spots in Berlin.`

// used in head description in all the pages
const headDescription =
    'A mapping project to collect and share romantic spots in Berlin. Bars, cafes, restaurants, bistros, parks and some little hidden places around the city.'

const authorName = 'Valerio Sillari'

const appMainUrl = 'https://zitronenstrasse.com'

const valeSiteRoot = 'https://www.valeriosillari.com'

const metaKeywords = `Zitronenstrasse, Zitrone, Strasse, Berlin, Zitrone Berlin, Zitronen Berlin, Map, Mapping, Frontend, Vue, Nuxt, Romantic, Spots, Romantic Spots Berlin, ${authorName}`

// ===============================
// og for FB and Linkedin
const ogUrl = appMainUrl
const ogTitle = headTitle
const ogDescription = headDescription
const ogType = 'website'
const ogImage = '/app-icons/logo_og_image.png'
const ogImageWidth = '1200'
const ogImageHeight = '630'
// ====== Twitter
const twitterUserAccountReference = '@stellavalerio'

const htmlNoJsClass = 'no-js'

export default defineNuxtConfig({
    devtools: { enabled: true },

    devServer: {
        port: 8000,
    },

    //  "forced" typescript checks | very strict mode
    typescript: {
        typeCheck: true,
    },

    runtimeConfig: {
        public: {
            htmlNoJsClass,
            limitQueryGql: 5,
            valeSiteRoot: valeSiteRoot,
            valeSiteAuthorName: authorName,
            headTitleString: headTitle,
            googleMapKey: process.env.GOOGLE_MAP_KEY,
            googleMapStyleMapId: process.env.GOOGLE_MAP_STYLE_MAP_ID,
        },
    },

    modules: [
        '@nuxtjs/apollo',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxt/image',
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
                httpEndpoint: `${valeSiteRoot}/api/zitronenstrasse`,
            },
        },
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
                class: htmlNoJsClass,
            },

            title: headTitle,

            meta: [
                // viewport set on mobile
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1, shrink-to-fit=no',
                },

                {
                    name: 'description',
                    content: headDescription,
                },

                {
                    name: 'author',
                    content: authorName,
                },

                {
                    name: 'keywords',
                    content: metaKeywords,
                },

                // OG options for open graph: Fb and Linkedin
                {
                    property: 'og:title',
                    content: ogTitle,
                },
                {
                    property: 'og:description',
                    content: ogDescription,
                },
                {
                    property: 'og:type',
                    content: ogType,
                },
                {
                    property: 'og:url',
                    content: ogUrl,
                },
                {
                    property: 'og:image',
                    content: ogImage,
                },
                {
                    property: 'og:image:width',
                    content: ogImageWidth,
                },
                {
                    property: 'og:image:height',
                    content: ogImageHeight,
                },
                // Twitter card
                {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },

                {
                    name: 'twitter:site',
                    content: twitterUserAccountReference,
                },

                {
                    name: 'twitter:creator',
                    content: authorName,
                },

                {
                    name: 'twitter:title',
                    content: ogTitle,
                },

                {
                    name: 'twitter:description',
                    content: ogDescription,
                },

                {
                    name: 'twitter:image',
                    content: ogImage,
                },

                {
                    name: 'twitter:image:alt',
                    content: ogTitle,
                },
            ],

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
                    href: appMainUrl,
                },
            ],

            // // external js
            // script: [
            //     {
            //     },
            // ],
        },
    },

    compatibilityDate: '2024-10-21',
})
