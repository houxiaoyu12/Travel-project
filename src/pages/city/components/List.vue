<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                        class="button-wrapper"
                        v-for="item of hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div
                class="area"
                v-for="(item,key) of cities"
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div
                        class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: 'CityList',
        props: {
            cities: Object,
            hot: Array,
            letter: String,
        },
        methods: {
            handleCityClick (city) {
                //this.$store.commit('changeCity',city);//可以直接通过commit调用mutations,不用dispatch
                this.changeCity(city);
                this.$router.push('/');
                //console.log(city)
            },
            ...mapMutations(['changeCity'])
        },
        computed: {
            ...mapState({
                currentCity: 'city'//将vuex中的city隐射到computed上，且名字叫currentCity
            })
        },
        watch: {
            letter () {
                if(this.letter){
                    const element = this.$refs[this.letter][0];
                    //console.log(element);
                    this.scroll.scrollToElement(element)//better-scroll自带的方法，滚动到相应的元素位置
                }
                //console.log(this.letter)
            }
        },
        mounted () {
            this.scroll =new Bscroll(this.$refs.wrapper,{click: true})
        },
    }
</script>
<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow hidden
        position: absolute
        top: 1.78rem
        bottom: 0
        left: 0
        right: 0
        .title
            line-height: 0.54rem
            background: #eee
            padding-left: 0.2rem
            color: #666
            font-size: 0.26rem
        .button-list
            overflow: hidden
            padding: 0.1rem 0.6rem 0.1rem 0.1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: 0.1rem
                    padding: 0.1rem 0
                    text-align: center
                    border: 0.02rem solid #ccc
                    border-radius: 0.06rem
        .item-list
            .item
                line-height: 0.76rem
                padding-left: 0.2rem


</style>
