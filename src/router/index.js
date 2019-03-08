import Vue from 'vue'
import Router from 'vue-router'
/*import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'*/
//使用按需加载的方式

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    },
  ],
  scrollBehavior (to, from, savedPosition) {//每次做页面切换的时候，每次回到页面最顶部
      return { x: 0, y: 0 }
  }
})
