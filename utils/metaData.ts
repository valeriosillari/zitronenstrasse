import CONSTANT from './constants'

// ===============================
// og for FB and Linkedin
const ogUrl = CONSTANT.appMainUrl
const ogTitle = CONSTANT.title
const ogDescription = CONSTANT.description
const authorName = CONSTANT.authorName
const ogType = 'website'
const ogImage = `${CONSTANT.appMainUrl}/app-icons/logo_og_image.png`
const ogImageWidth = '1200'
const ogImageHeight = '630'

// ======================
const metaData = [
    // viewport set on mobile
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },

    {
        hid: 'description',
        name: 'description',
        content: ogDescription,
    },

    {
        hid: 'author',
        name: 'author',
        content: authorName,
    },

    {
        hid: 'keywords',
        name: 'keywords',
        content: CONSTANT.keywords,
    },

    // ======================
    // OG options for open graph: Fb and Linkedin
    {
        hid: 'og:title',
        property: 'og:title',
        content: ogTitle,
    },

    {
        hid: 'og:description',
        property: 'og:description',
        content: ogDescription,
    },

    {
        hid: 'og:type',
        property: 'og:type',
        content: ogType,
    },

    {
        hid: 'og:url',
        property: 'og:url',
        content: ogUrl,
    },

    {
        hid: 'og:image',
        property: 'og:image',
        content: ogImage,
    },

    {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: ogImageWidth,
    },

    {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: ogImageHeight,
    },

    {
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/png',
    },

    {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: ogTitle,
    },

    // ======================
    // Twitter card
    {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
    },

    {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@stellavalerio',
    },

    {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: authorName,
    },

    {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: ogTitle,
    },

    {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: ogDescription,
    },

    {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: ogImage,
    },

    {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: ogTitle,
    },
]

export default metaData
