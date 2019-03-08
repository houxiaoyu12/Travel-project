<template>
    <ul class="list">
        <li
            class="item"
            v-for="item of letters"
            :key="item"
            :ref="item"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
            {{item}}
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object,
        },
        computed: {
            letters() {
                const letters = [];
                for (let i in this.cities) {
                    letters.push(i)
                }
                //console.log(letters);
                return letters
            }
        },
        data() {
            return {
                touchStartus: false,
                startY: 0,
                timer: null,//数据节流的时候用，性能优化
            }
        },
        updated () {
            this.startY = this.$refs['A'][0].offsetTop;//当数据加载完事后，执行此命令，再取值，提高性能
        },
        methods: {
            handleLetterClick (e) {//向父组件中传入你点击的字母，父组件再传给子组件
                this.$emit('change',e.target.innerText);
                //console.log(e.target.innerText)
            },
            handleTouchStart () {
                this.touchStartus = true
            },
            handleTouchMove (e) {
                if(this.touchStartus){
                    if(this.timer){//函数节流
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(() => {//函数节流
                        //const startY = this.$refs['A'][0].offsetTop;//A到输入框下沿的距离
                        const touchY = e.touches[0].clientY - 79;//手指到输入框下沿的距离
                        const index = Math.floor((touchY - this.startY) / 20);
                        if(index >= 0 && index <this.letters.length){
                            this.$emit('change',this.letters[index]);
                        }
                        //console.log(index)
                    },16);
                }
            },
            handleTouchEnd () {
                this.touchStartus = false
            }
        },
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        right:0
        top: 1.58rem
        bottom: 0
        width: 0.4rem
        .item
            line-height: 0.4rem
            text-align: center
            color: $bgColor


</style>
