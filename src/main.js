import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 載入通用的 css 檔
import './assets/application.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
