<template>
    <div>
      <home-header></home-header>
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
    import { mapState } from 'vuex'

    export default {
        name: "Home",
        data() {
            return {
              lastCity: '',
              swiperList: [],//轮播图数组
              iconList: [],//轮播选项数组
              recommendList: [],//推荐选项数组
              weekendList: [],//周末选项数组
            }
        },
        computed: {
            ...mapState(['city'])
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
            axios.get('/api/index.json?city=' + this.city)
              .then(this.getHomeInfoSucc)
          },
          getHomeInfoSucc (res) {
            res = res.data;
            if(res.ret === true && res.data){
              const data = res.data;
              this.swiperList = data.swiperList;
              this.iconList = data.iconList;
              this.recommendList = data.recommendList;
              this.weekendList = data.weekendList;
            }
            //console.log(res)
          }
        },
        mounted () {
            this.lastCity = this.city;
            this.getHomeInfo()//获取后台数据
        },
        activated () {//当页面重新被显示时，activated会被执行
            if (this.lastCity !== this.city){ //当点击的城市和之前存储的城市不一时
                this.lastCity = this.city;
                this.getHomeInfo()
            }
            //console.log('activated')
        }

    }
</script>
<style>

</style>
