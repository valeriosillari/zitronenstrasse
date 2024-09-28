const titleShort = 'Zitronenstrasse'

const appMainUrl = 'https://zitronenstrasse.com'

const valeSiteRoot = 'https://www.valeriosillari.com'

export default defineNuxtConfig({
    devtools: { enabled: true },

    runtimeConfig: {
        public: {
            limitQueryGql: 5,
            valeSiteRoot: valeSiteRoot,
        },
    },

    modules: [
        '@nuxtjs/apollo',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxtjs/sitemap',
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

    site: {
        url: appMainUrl,
        name: titleShort,
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
    },

    compatibilityDate: '2024-09-28',
})
