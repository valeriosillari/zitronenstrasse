import type { TypeMetaData } from '@/types/TypeConfig'
import CONFIG from './config'

// ===============================
// og for FB and Linkedin
const ogUrl = CONFIG.appMainUrl
const ogTitle = CONFIG.title
const ogDescription = CONFIG.description
const ogAuthorName = CONFIG.authorName
const ogTwitterSite = CONFIG.twitterSite
const ogType = 'website'
const ogImage = `${CONFIG.appMainUrl}/app-icons/logo_og_image.png`
const ogImageWidth = '1200'
const ogImageHeight = '630'

// ======================
const METADATA: TypeMetaData = [
    // viewport set on mobile
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },

    {
        name: 'description',
        content: ogDescription,
    },

    {
        name: 'author',
        content: ogAuthorName,
    },

    {
        name: 'keywords',
        content: CONFIG.keywords,
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
        property: 'og:image:url',
        content: ogImage,
    },

    {
        property: 'og:image:secure_url',
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

    {
        property: 'og:image:alt',
        content: ogTitle,
    },

    // ======================
    // Twitter card
    {
        name: 'twitter:card',
        content: 'summary_large_image',
    },

    {
        name: 'twitter:site',
        content: ogTwitterSite,
    },

    {
        name: 'twitter:creator',
        content: ogAuthorName,
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

export default METADATA
