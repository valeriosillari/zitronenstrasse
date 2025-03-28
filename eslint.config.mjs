// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        // i trust data coming fro richtext by API
        'vue/no-v-html': 'off',
    },
})
