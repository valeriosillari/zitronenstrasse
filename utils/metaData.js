import CONSTANT from './constants'

// ===============================
// og for FB and Linkedin
const ogUrl = CONSTANT.appMainUrl
const ogTitle = CONSTANT.headTitle
const ogDescription = CONSTANT.headDescription
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
        name: 'description',
        content: CONSTANT.headDescription,
    },

    {
        name: 'author',
        content: CONSTANT.authorName,
    },

    {
        name: 'keywords',
        content: CONSTANT.metaKeywords,
    },

    // ======================
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

    // ======================
    // Twitter card
    {
        name: 'twitter:card',
        content: 'summary_large_image',
    },

    {
        name: 'twitter:site',
        content: '@stellavalerio',
    },

    {
        name: 'twitter:creator',
        content: CONSTANT.authorName,
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
]

export default metaData
