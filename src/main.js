import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale:'zh-CN',
  messages:{
    'ja':require('./common/lang/zh'),
    'en':require('./common/lang/en')
  }
})


library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
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
