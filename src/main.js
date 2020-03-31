/*
 * @Author: 韩辉
 * @Date: 2020-03-18 14:59:24
 * @LastEditTime: 2020-03-31 11:59:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \src\main.js
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routers from './router';
import GlobalComponents from './globalComponents';
import store from './store/store.js';

Vue.use(VueRouter);
Vue.use(ElementUI);
//全局组件
Vue.use(GlobalComponents);

// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});


new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})