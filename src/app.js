import Vue from 'vue'
import VueTouch from 'vue-touch'
import Quasar from 'quasar'
import Router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueTouch)
Quasar.theme.set(__THEME)
Vue.use(Quasar) // Install Quasar Framework

require('./themes/app.' + __THEME + '.styl')
// require('quasar/dist/quasar.' + __THEME + '.css')

Quasar.start(() => {
  Router.start(Vue.extend({}), '#quasar-app')
})
