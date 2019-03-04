<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>

  </div>
</template>
<script>
  export default {
    name: "HomeHeader",
    props: {
      city: String,
    },
    data() {
      return {

      }
    }
  }
</script>
<style lang="stylus" scoped>
  //@import '../../../assets/styles/varibles.styl'//可以写成下面的形式
  //@import '~@/assets/styles/varibles.styl'//@代表src的目录（当引入是js的时候），而css样式时~@为src目录
  @import '~styles/varibles.styl'//在build中webpack.base中配置别名项，在resolve中设置

  .header
    display: flex
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: 0.64rem
      float: left
      .back-icon
        text-align: center
        font-size: 0.4rem
    .header-input
      flex: 1
      height: 0.64rem
      line-height: 0.64rem
      margin-top: 0.12rem
      margin-left: 0.2rem
      padding-left: 0.2rem
      background: #ffffff
      border-radius 0.1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -0.04rem
        font-size: 0.24rem
</style>
