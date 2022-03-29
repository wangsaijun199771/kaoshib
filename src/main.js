import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
// UI组件及依赖环境
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 防抖节流的插件依赖
import myplugin from "./plugins/myplugin"
Vue.use(myplugin) 


if(process.env.NODE_ENV==='development'){
  require('@/mock/index')
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
