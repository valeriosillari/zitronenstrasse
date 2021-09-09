module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        // enable console logs (just warnings)
        'no-console': 1,
        // ignore v-html (warning: it could lead to XSS attack)
        'vue/no-v-html': 'off',
    },
}
