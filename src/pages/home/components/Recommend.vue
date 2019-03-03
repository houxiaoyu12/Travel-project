<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt="">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
      name: 'HomeRecommend',
      data() {
          return {
            recommendList: [
              {
                id: '0001',
                imgUrl: require('../../../assets/img/5.jpg'),
                title: '大连圣亚海洋世界',
                desc: '浪漫大连首站,烂漫的海洋主题乐园'

              },
              {
                id: '0002',
                imgUrl: require('../../../assets/img/5.jpg'),
                title: '大连圣亚海洋世界',
                desc: '浪漫大连首站,烂漫的海洋主题乐园'

              },
              {
                id: '0003',
                imgUrl: require('../../../assets/img/5.jpg'),
                title: '大连圣亚海洋世界',
                desc: '浪漫大连首站,烂漫的海洋主题乐园'

              },
              {
                id: '0004',
                imgUrl: require('../../../assets/img/5.jpg'),
                title: '大连圣亚海洋世界',
                desc: '浪漫大连首站,烂漫的海洋主题乐园'

              },
            ]
          }
      }
    }
</script>
<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
      margin-top: 0.2rem
      line-height: 0.8rem
      background: #eee
      text-indent: 0.2rem //首行缩进
    .item
      overflow: hidden
      display: flex
      height: 1.9rem
      .item-img
        height: 1.7rem
        width: 1.7rem
        padding: 0.1rem
      .item-info
        flex: 1
        padding: 0.1rem
        min-width: 0//这个 可以让...显示出来
        .item-title
          line-height: 0.54rem
          font-size: 0.32rem
          ellipsis()
        .item-desc
          line-height: 0.4rem
          color: #ccc
          ellipsis()
        .item-button
          line-height: 0.44rem
          margin-top: 0.16rem
          background: #ff9300
          padding: 0 0.2rem
          border-radius: 0.06rem
          color: #fff

</style>
