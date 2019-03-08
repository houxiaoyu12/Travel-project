<template>
  <div id="app">
    <!--显示的是当前路由地址所对应的内容-->
    <!--exclude可以去除掉不需要缓存的页面-->
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
