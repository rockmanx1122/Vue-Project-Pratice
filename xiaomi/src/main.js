import Vue from 'vue'
import App from '@/views/index/index'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import './styles.scss'
import axios from 'axios'
import store from './store'
import router from './router'

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
