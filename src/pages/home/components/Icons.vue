<template>
    <div class="icons">
      <swiper>

        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>

      </swiper>
    </div>
</template>
<script>
    export default {
      name: "HomeIcons",
      data() {
          return {
            iconList: [
              {
                id: '0001',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '景点门票景点门票景点门票景点门票景点门票'
              },
              {
                id: '0002',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '滑雪季'
              },
              {
                id: '0003',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '泡温泉'
              },
              {
                id: '0004',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '动植物园'
              },
              {
                id: '0005',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '一日游'
              },
              {
                id: '0006',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '必游榜单'
              },
              {
                id: '0007',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '自然风光'
              },
              {
                id: '0008',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '全部'
              },
              {
                id: '0009',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '一日游'
              },
              {
                id: '0010',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '一日游'
              },
              {
                id: '0011',
                imgUrl: require('../../../assets/img/4.jpg'),
                desc: '一日游'
              }
            ]
          }
      },
      computed: {
        pages () {//轮播分页数组
          const pages = [];//定义一个空数组，循环每一项
          this.iconList.forEach((item,index) => {
            const page = Math.floor(index / 8);//循环每一项，小于8将其放在一个页面上，大于8放到第二个页面上
            if(!pages[page]){//如果数组的第一项没有在数组中，创建一个数组，存放8项，大于8项放到第二页，二维数组
              pages[page] = []
            }
            pages[page].push(item)
          });
          return pages//将算好的数组返回出去
        }
      }
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'

    .icons >>> .swiper-container
      height: 0
      padding-bottom: 50%
    .icons
      margin-top 0.1rem
      .icon
        position: relative
        overflow hidden
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
          position: absolute
          top: 0
          left: 0
          right: 0
          bottom: 0.44rem
          box-sizing: border-box
          padding: 0.1rem
          .icon-img-content
            display block
            margin: 0 auto
            height: 100%
        .icon-desc
          position absolute
          left: 0
          right: 0
          bottom: 0
          height: 0.44rem
          text-align center
          line-height: 0.44rem
          color: $darkTestColor
          ellipsis()

</style>
