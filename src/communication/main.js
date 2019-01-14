import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import 'normalize.css'
import 'common@/plugins/iview.js'
import VueSocketio from 'vue-socket.io'
Vue.use(VueSocketio, 'http://locahost:33333')
Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
