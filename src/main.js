//路由就是根据网址的不同，返回不同的内容给用户
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'//重置css样式文件
import './assets/styles/border.css'//1px边框问题
import fastClick from 'fastclick'//解决点击300毫秒延时的问题

Vue.config.productionTip = false;
fastClick.attach(document.body);//引入300毫秒延时

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
