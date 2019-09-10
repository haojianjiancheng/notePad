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
            <button class="btn mine-follow-right" @click="changeButton(index)">
                <span class="btn" v-if="item.follow">
                    <i class="iconfont icon-selected"></i>
                    已关注
                </span>
                <span v-else>
                    <i class="iconfont icon-icon_plus"></i>
                    关注
                </span>
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
                list : [],
            }
        },
        methods : {
            changeButton(i){
                this.list[i].follow = !this.list[i].follow
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
            flex-shrink: 0;
        }
        .mine-follow-center{
            flex-shrink: 0;
            li{
                display: inline-block;
                padding-right: 4px;
                border-right: 1px solid gray;
                &:last-child{
                    border-right-color: transparent;
                }
            }
        }
    }
</style>