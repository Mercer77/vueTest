// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import 'xe-utils'
// import VXETable from 'vxe-table'
// import 'vxe-table/lib/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
// Vue.use(VXETable);
import axios from 'axios' //引入axios获取后台数据
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
Vue.use(VueAxios,axios);
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
