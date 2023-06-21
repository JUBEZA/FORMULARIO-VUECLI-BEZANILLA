import Vue from 'vue'
import App from './App.vue'
import vueForm from 'vue-form'

Vue.use(vueForm)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
