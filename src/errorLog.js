import Vue from 'vue'
import store from '@/store'

if (process.env.NODE_ENV === 'development') {
  Vue.config.errorHandler = function (error, vm, info) {
    store.commit('set_logs', {
      error,
      vm,
      info,
      url: window.location.href,
      time: new Date()
    })
  }
}
