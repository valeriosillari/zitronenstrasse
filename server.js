const newrelic = require('newrelic')
const app = require('express')()
const { Nuxt, Builder } = require('nuxt')

const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.set('port', port)

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)
// Listen the server
.listen(port)

// eslint-disable-line no-console
console.log(`
  ++++++++++++++++++++++++++++++++++++++++++++++++
  Served on localhost:${port}
  ++++++++++++++++++++++++++++++++++++++++++++++++
`)
