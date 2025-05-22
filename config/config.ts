import packageJson from '../package.json'
import type { TypeConfig } from '@/types/TypeConfig'

const PROJECT_NAME = 'Zitronenstrasse'

const AUTHOR_NAME = packageJson.author

const AUTHOR_SITE_ROOT = 'https://www.valeriosillari.com'

const LOCAL_PORT = 8000

// env NUXT_PUBLIC_SITE_URL on PROD, local host as fallback on develop mode
const APP_ROOT_URL =
    process.env.NUXT_PUBLIC_SITE_URL || `http://localhost:${LOCAL_PORT}`

const CONFIG: TypeConfig = {
    projectName: PROJECT_NAME,

    authorName: AUTHOR_NAME,

    htmlNoJsClass: 'no-js',

    htmlYesJsClass: 'js',

    title: packageJson.description,

    appMainUrl: APP_ROOT_URL,

    authorSiteRoot: AUTHOR_SITE_ROOT,

    apiUrl: `${AUTHOR_SITE_ROOT}/api/zitronenstrasse`,

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
