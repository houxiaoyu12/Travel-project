<template>
  <div class="wrapper">
    <!--解决初次轮播图显示是最后一张，因为初始list中没有数据，当list中没数据的时候，才让显示（v-if=list.length）-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide  v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
    export default {
        name: "HomeSwiper",
        props: {
          list: Array
        },
        data() {
            return {
              swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
              },
              /*swiperList: [//vue中引入本地图片 要用require的方式
                {
                  id: '0001',
                  imgUrl: require("../../../assets/img/1.jpg")
                },
                {
                  id: '0002',
                  imgUrl: require("../../../assets/img/2.jpg")
                },
                {
                  id: '0003',
                  imgUrl: require("../../../assets/img/3.jpg")
                }
              ]*/
            }
        },
        computed: {
            showSwiper () {
              return this.list.length;
            }
        }
    }
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active//让其穿透，让其不受scope的影响（scope只对当前组件有影响），
    background: #ffffff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.66%//自适应的，让高和宽的比例始终是这个比例
    background: #ccc
    .swiper-img
      width: 100%
      height: 2rem
</style>
