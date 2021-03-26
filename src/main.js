import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
// 引入封装的router
import route from './router/index';
import './permission';
new Vue({
  // @ts-ignore
  render: h => h(App),
  // @ts-ignore
  router: route,
}).$mount('#app')
