import {
    stringNameForHomePage,
    stringNameForHomePageTemplate,
} from '../assets/javascripts/utilities/storyblok'

export const state = () => ({
    // on storyblok we set a component as "page" to set some trick for our application index page on Nuxt
    // here the storyblock SLUG name, used as "core" for the trick
    stringNameForHomePage,
    stringNameForHomePageTemplate,
})
