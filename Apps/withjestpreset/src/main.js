import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleCharts from 'vue-google-charts'
import VueAnime from 'vue-animejs'
require('@/assets/w3.css')

Vue.config.productionTip = false
Vue.use(VueAnime)
Vue.use(VueGoogleCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
