<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide
                    v-for="(item,index) of imgs"
                    :key="index"
                >
                    <img class="gallary-img" :src="item">
                </swiper-slide>

                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CommonGallary',
        props: {
            imgs: {
                type: Array,
                default () {
                    return [

                    ]
                }
            }
        },
        data() {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',//改变分页位数字模式
                    observeParents: true,//监测父级元素发生变化，重新计算页面的尺寸
                    observer: true,//监测自身发生变化时，重新计算尺寸
                }
            }
        },
        methods: {
            handleGallaryClick () {
                this.$emit('close')
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallary-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>
