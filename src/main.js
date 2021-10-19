import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './vuetify'
import VueCompositionApi from '@vue/composition-api'
import hooks from '@u3u/vue-hooks'

Vue.use(hooks)
Vue.use(VueCompositionApi)

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
