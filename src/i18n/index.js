import VueI18n from 'vue-i18n'
import Vue from 'vue'
import zh from './zh'
import en from './en'
// import kr from './kr'
// import ru from './ru'
import tc from './tc'
import jpn from './jpn'
import { getToken } from '@/utils/auth'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: getToken('OZFUND_LANG') || 'zh',
  globalInjection: true,
  messages: {
    zh,
    en,
    // kr, // 韩语
    // ru, // 俄语
    tc, // 繁体
    jpn,
  }
})

export default i18n