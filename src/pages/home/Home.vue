<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>
<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'

    export default {
        name: "Home",
        data() {
            return {

            }
        },
        components: {//注册组件
          HomeHeader,
          HomeSwiper
        }
    }
</script>
<style>

</style>
