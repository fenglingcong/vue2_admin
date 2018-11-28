// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// css
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/icon/iconfont.css'
import '@/assets/css/global.css'
// js
import '@/permission'

// 自定义
import menuItem from '@/layout/menuItem'

// 过滤
import filters from '@/filters'

// mock数据
import '@/mock'

// 第三方
import axios from 'axios'
import ElementUI from 'element-ui'
import i18n from '@/language'
import vueNumTo from 'vue-num-to'
import vueClipboard from 'vue-clipboard-pack'

Vue.config.productionTip = false

Vue.component('my-menu-item', menuItem)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$http = axios
Vue.use(ElementUI, {
  i18n: (key, value) => {
    i18n.t(key, value)
  }
})
Vue.use(vueClipboard)
Vue.use(vueNumTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
