import Vue from 'vue'
import App from './App.vue'

import { List } from 'ant-design-vue';
Vue.config.productionTip = false
Vue.use(List);

new Vue({
  render: h => h(App),
}).$mount('#app')
