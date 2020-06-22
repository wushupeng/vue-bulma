import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import router from './router'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale:'zh-CN',
  messages:{
    'ja':require('./common/lang/zh'),
    'en':require('./common/lang/en')
  }
})
// const messages = {
//   en: {
//     message: {
//       hello: 'hello world'
//     }
//   },
//   ja: {
//     message: {
//       hello: 'こんにちは、世界'
//     }
//   }
// }
// const i18n = new VueI18n({
//   locale: 'ja', // 设置地区
//   messages, // 设置地区信息
// })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
