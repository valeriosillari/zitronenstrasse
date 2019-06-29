module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    // enable console logs (just warnings)
    'no-console': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': ['error']
  }
}
