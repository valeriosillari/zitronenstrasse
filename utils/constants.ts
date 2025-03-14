import packageJson from '../package.json'

const titleShort = 'Zitronenstrasse'

const authorName = packageJson.author

const CONSTANT = {
    authorName,

    appVersion: packageJson.version,

    // main title | CHECK
    headTitle: `${titleShort} | Romantic Spots in Berlin.`,

    appMainUrl: 'https://www.zitronenstrasse.com',

    valeSiteRoot: 'https://www.valeriosillari.com',

    // used in head description in all the pages
    headDescription:
        'A mapping project to collect and share romantic spots in Berlin. Little hidden places around the city.',

    metaKeywords: `Zitronenstrasse, Zitrone, Strasse, Berlin, Zitrone Berlin, Zitronen Berlin, Map, Mapping, Frontend, Vue, Nuxt, Romantic, Spots, Romantic Spots Berlin, ${authorName}`,
}

export default CONSTANT
