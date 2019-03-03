<template>
    <div>
      <home-header :city="city"></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-recommend :list="recommendList"></home-recommend>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>
<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'

    export default {
        name: "Home",
        data() {
            return {
              city: '',//城市
              swiperList: [],//轮播图数组
              iconList: [],//轮播选项数组
              recommendList: [],//推荐选项数组
              weekendList: [],//周末选项数组
            }
        },
        components: {//注册组件
          HomeHeader,
          HomeSwiper,
          HomeIcons,
          HomeRecommend,
          HomeWeekend
        },
        methods: {
          getHomeInfo () {
            axios.get('/api/index.json')
              .then(this.getHomeInfoSucc)
          },
          getHomeInfoSucc (res) {
            res = res.data;
            if(res.ret === true && res.data){
              const data = res.data;
              this.city = data.city;
              this.swiperList = data.swiperList;
              this.iconList = data.iconList;
              this.recommendList = data.recommendList;
              this.weekendList = data.weekendList;
            }
            console.log(res)
          }
        },
        mounted () {
          this.getHomeInfo()//获取后台数据
        },

    }
</script>
<style>

</style>
