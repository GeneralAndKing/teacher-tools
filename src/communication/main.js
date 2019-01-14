import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import 'normalize.css'
import 'common@/plugins/iview.js'
import $socket from './lib/socket-instance'
import VueSocketio from 'vue-socket.io-extended'

Vue.config.devtools = true
Vue.config.productionTip = false

Vue.use(VueSocketio, $socket, { store })

new Vue({
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
