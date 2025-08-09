// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        // I trust data coming from richtext by API
        'vue/no-v-html': 'off',
    },
})
