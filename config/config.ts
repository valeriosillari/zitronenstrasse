import type { TypeConfig } from '@Types/TypeConfig'
import packageJson from '../package.json'

const PROJECT_NAME = 'Zitronenstrasse'

const AUTHOR_NAME = packageJson.author

const AUTHOR_SITE_ROOT = 'https://www.valeriosillari.com'

const LOCAL_PORT = 8000

const API_URL_RELATIVE = '/api/graphql'

const API_URL_FULL_ORIGINAL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_GQL_SPACE}?access_token=${process.env.CONTENTFUL_GQL_TOKEN}`

// empty by default, to avoid warning on package install
let APP_ROOT_URL = ''
if (process.env.NODE_ENV === 'development') {
    APP_ROOT_URL = `http://localhost:${LOCAL_PORT}`
}
// when build or generate locally
if (process.env.NODE_ENV === 'production' && !process.env.VERCEL_URL) {
    APP_ROOT_URL = 'http://localhost::3000'
}
if (process.env.NODE_ENV === 'production' && process.env.VERCEL_URL) {
    // feature branch deployed
    APP_ROOT_URL = `https://${process.env.VERCEL_URL}`

    // MAIN / PROD branch
    if (
        process.env.VERCEL_PROJECT_PRODUCTION_URL &&
        process.env.VERCEL_GIT_COMMIT_REF &&
        process.env.VERCEL_GIT_COMMIT_REF === 'main'
    ) {
        APP_ROOT_URL = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    }
}

const CONFIG: TypeConfig = {
    projectName: PROJECT_NAME,
    authorName: AUTHOR_NAME,
    htmlNoJsClass: 'no-js',
    htmlYesJsClass: 'js',
    title: packageJson.description,
    appMainUrl: APP_ROOT_URL,
    authorSiteRoot: AUTHOR_SITE_ROOT,
    // graphQL (server and client)
    apiUrlRelative: API_URL_RELATIVE,
    apiUrlFullOriginal: API_URL_FULL_ORIGINAL,
    // used in head description in all the pages
    description:
        'A mapping project to collect and share romantic spots in Berlin.',

    keywords: `${PROJECT_NAME}, Zitrone, Strasse, Berlin, Zitrone Berlin, Zitronen Berlin, Map, Mapping, Frontend, Vue, Nuxt, Romantic, Spots, Romantic Spots Berlin, ${AUTHOR_NAME}`,

    localPort: LOCAL_PORT,

    twitterSite: '@zitronenstrasse',

    appVersion: process.env.VERCEL_GIT_COMMIT_SHA
        ? // 7 digits, for "short" commit hash
          process.env.VERCEL_GIT_COMMIT_SHA.substring(0, 7)
        : 'DEV',
}

export default CONFIG
