import packageJson from '../package.json'

const titleShort = 'Zitronenstrasse'

const authorName = packageJson.author

const valeSiteRoot = 'https://www.valeriosillari.com'

const CONSTANT = {
    authorName,

    appVersion: packageJson.version,

    htmlNoJsClass: 'no-js',

    htmlYesJsClass: 'js',

    // main title | CHECK
    title: `${titleShort} | Romantic Spots in Berlin.`,

    appMainUrl: 'https://www.zitronenstrasse.com',

    valeSiteRoot,

    apiUrl: `${valeSiteRoot}/api/zitronenstrasse`,

    // used in head description in all the pages
    description:
        'A mapping project to collect and share romantic spots in Berlin.',

    keywords: `Zitronenstrasse, Zitrone, Strasse, Berlin, Zitrone Berlin, Zitronen Berlin, Map, Mapping, Frontend, Vue, Nuxt, Romantic, Spots, Romantic Spots Berlin, ${authorName}`,
}

export default CONSTANT

export const HOME_LINK = {
    url: '/',
    text: 'Home',
}
