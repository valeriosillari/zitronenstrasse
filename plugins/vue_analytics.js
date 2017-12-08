import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'

// TODO: check here, you should pass the routes. not sure if nuxt does it automatically...
const router = new VueRouter()

// TODO: set analytics keyID as ENV key?
Vue.use(VueAnalytics, {
  id: 'UA-110867603-1',
  router
})
