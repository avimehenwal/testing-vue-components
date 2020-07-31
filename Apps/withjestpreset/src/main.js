import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnime from 'vue-animejs'
require('@/assets/w3.css')


Vue.config.productionTip = false
Vue.use(VueAnime)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
