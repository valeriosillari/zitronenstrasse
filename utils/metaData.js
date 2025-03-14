const titleShort = 'Zitronenstrasse'

const authorName = 'Valerio Sillari'

// main title
const headTitle = ` ${titleShort} | Romantic Spots in Berlin.`

const appMainUrl = 'https://www.zitronenstrasse.com'

// used in head description in all the pages
const headDescription =
    'A mapping project to collect and share romantic spots in Berlin. Bars, cafes, restaurants, bistros, parks and some little hidden places around the city.'

const metaKeywords = `Zitronenstrasse, Zitrone, Strasse, Berlin, Zitrone Berlin, Zitronen Berlin, Map, Mapping, Frontend, Vue, Nuxt, Romantic, Spots, Romantic Spots Berlin, ${authorName}`

// ===============================
// og for FB and Linkedin
const ogUrl = appMainUrl
const ogTitle = headTitle
const ogDescription = headDescription
const ogType = 'website'
const ogImage = `${appMainUrl}/app-icons/logo_og_image.png`
const ogImageWidth = '1200'
const ogImageHeight = '630'
// ====== Twitter
const twitterUserAccountReference = '@stellavalerio'

const metaData = [
    // viewport set on mobile
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
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
    {
        property: 'og:image:type',
        content: 'image/png',
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

    // {
    //     name: 'twitter:image',
    //     content: ogImage,
    // },

    // {
    //     name: 'twitter:image:alt',
    //     content: ogTitle,
    // },
]

export default metaData
