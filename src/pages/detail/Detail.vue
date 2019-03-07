<template>
    <div>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="categoryList"></detail-list>
        </div>
    </div>
</template>
<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    import axios from 'axios'

    export default {
        name: 'Detail',
        data() {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                categoryList: [],

                /*list: [//模拟数据
                    {
                        title: '成人票',
                        children: [
                            {
                                title: '成人三馆联票',
                                children: [
                                    {
                                       title: '成人三馆联票-某连锁店销售'
                                    }
                                ]
                            },
                            {
                                title: '成人三馆联票'
                            }
                        ]
                    },
                    {
                        title: '学生票',
                    },
                    {
                        title: '儿童票',
                    },
                    {
                        title: '特惠票',
                    },
                ]*/
            }
        },
        methods: {
            getDetailInfo () {
                //axios.get('/api/detail.json?id=' + this.$route.params.id)和下面写法一致
                axios.get('/api/detail.json',{
                    params: {
                        id: this.$route.params.id
                    }
                })
                    .then(
                        this.handleGetDataSucc
                    )
                    .catch((e) => {
                        alert(e)
                        }

                    )
            },
            handleGetDataSucc (res) {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.sightName = data.sightName;
                    this.categoryList = data.categoryList;
                    this.bannerImg = data.bannerImg;
                    this.gallaryImgs = data.gallaryImgs;
                    console.log(data)
                }
            }
         },
        mounted () {
           this.getDetailInfo()
        },
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        }
    }
</script>
<style lang="stylus" scoped>
    .content
        height: 50rem
</style>
