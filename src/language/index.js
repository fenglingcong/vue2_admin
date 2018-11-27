import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cache from '@/utils/cache.js'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocal from './en.js'
import zhLocal from './zh.js'

Vue.use(VueI18n)

const messages = {
  zh: {
    ...zhLocal,
    ...elementZhLocale
  },
  en: {
    ...enLocal,
    ...elementEnLocale
  }
}

const i18n = new VueI18n({
  locale: cache.getSession('language') || 'zh',
  messages
})

export default i18n
