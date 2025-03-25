import packageJson from '../package.json'

const TITLE_SHORT = 'Zitronenstrasse'

const AUTHOR_NAME = packageJson.author

const VALERIO_SITE_ROOT = 'https://www.valeriosillari.com'

const LOCAL_PORT = 8000

let APP_ROOT_URL = `http://localhost:${LOCAL_PORT}`

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

const CONSTANT = {
    authorName: AUTHOR_NAME,

    htmlNoJsClass: 'no-js',

    htmlYesJsClass: 'js',

    // main title | CHECK
    title: `${TITLE_SHORT} | Romantic Spots in Berlin.`,

    appMainUrl: APP_ROOT_URL,

    valeSiteRoot: VALERIO_SITE_ROOT,

    apiUrl: `${VALERIO_SITE_ROOT}/api/zitronenstrasse`,

    // used in head description in all the pages
    description:
        'A mapping project to collect and share romantic spots in Berlin.',

    keywords: `Zitronenstrasse, Zitrone, Strasse, Berlin, Zitrone Berlin, Zitronen Berlin, Map, Mapping, Frontend, Vue, Nuxt, Romantic, Spots, Romantic Spots Berlin, ${authorName}`,

    localPort: LOCAL_PORT,

    appVersion: process.env.VERCEL_GIT_COMMIT_SHA
        ? // 7 digits, for "short" commit hash
          process.env.VERCEL_GIT_COMMIT_SHA.substring(0, 7)
        : 'DEV',
}

export default CONSTANT

export const HOME_LINK = {
    url: '/',
    text: 'Home',
}
