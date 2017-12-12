const { Nuxt, Builder } = require('nuxt')
const app = require('express')()

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })

// No build in production
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}

// test heroku with no changes on application, but with ENV keys on heroku itself
app.use(nuxt.render)
.listen(process.env.PORT || 3000)
console.log('Server is listening on http://localhost:3000')
