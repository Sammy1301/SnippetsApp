// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
import VueClipboard from 'vue-clipboards'
Vue.use(VueClipboard)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
