import Vue from 'vue'
import App from './App.vue'

// 引用 ant 组件库
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 引用 router 组件
import router from './router';

Vue.config.productionTip = false

// 注册
Vue.use(Antd);
Vue.use(router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
