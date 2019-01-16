import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import 'normalize.css'
import 'common@/plugins/iview.js'
import $socket from './lib/socket-instance'
import VueSocketio from 'vue-socket.io-extended'
import VueClipboard from 'vue-clipboard2'
Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(VueSocketio, $socket, { store })
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
