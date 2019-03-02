//路由就是根据网址的不同，返回不同的内容给用户
import Vue from 'vue'
import App from './App'
import router from './router'

//自己在webpack.base中resolve中修改了配置项，所以下面的引用方式有点改变
import './assets/styles/reset.css'//重置css样式文件,之前引用的写法
import 'styles/border.css'//1px边框问题
import 'styles/iconfont.css'//引入iconfont图标
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
