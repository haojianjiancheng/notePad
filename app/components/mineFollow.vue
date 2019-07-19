<template>
    <ul class="flex-column">
        <li class="mine-follow d-flex justify-content-between" v-for="(item,index) in list" :key="`mine-follow${index}`">
            <div class="mine-follow-left">
                <img :src="item.portrait" alt="">
            </div>
            <div class="mine-follow-center d-flex flex-column">
                <h3>
                    {{item.author}}
                </h3>
                <ul>
                    <li>关注 {{item.followsNumber}}</li>
                    <li>粉丝 {{item.fansNumber}}</li>
                    <li>文章 {{item.articlesNumber}}</li>
                    <li>字数 {{item.wordsNumber}}</li>
                    <li>收获喜欢 {{item.likesNumber}}</li>
                </ul>
            </div>
            <button class="mine-follow-right">
                关注
            </button>
        </li>
    </ul>
</template>

<script>
    export default {
        beforeCreate(){
            this.axios.get("/mine/follow").then(data=>{
                console.log(data.data.follow);
                
                this.list = data.data.follow
            })
        },
        data(){
            return {
                list : []
            }
        }
    }
</script>

<style lang="less">
    .mine-follow{
        width: 600px;
        padding: 10px;
        background-color: #fff;
        .mine-follow-left{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
        }
        .mine-follow-center{
            li{
                display: inline-block;
                padding-right: 4px;
                border-right: 1px solid gray;
            }
        }
    }
</style>