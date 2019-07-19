<template>
    <ul class="recommend">
        <li v-for="(item,index) in list" :key="`recommend${index}`" class="recommend-li">
            <router-link :to="item.link" class="recommend-img">
                <img :src="item.img" alt="">
            </router-link>
            <router-link class="recommend-author" :to="item.link">{{item.author}}</router-link>
            <router-link class="recommend-follow" to="/">
                <i class="iconfont icon-icon_plus"></i>
                关注
            </router-link>
            <p class="recommend-p">
                {{item.numberOfWords|words}}{{item.like|like}}
            </p>
        </li>
    </ul>
</template>

<script>
    export default {
        props : {
            list : {
                type : Array,
                required : true
            }
        },
        filters : {
            like(value){
                if(!value) return;
                return `${value}喜欢了`
            },
            words(value){
                if(!value) return;
                return `写了${value}字 · `
            }
        }
    }
</script>

<style lang="less">
    .recommend{
        background-color: #fff;
        .recommend-li{
            width: 260px;
            height: 45px;
            margin-bottom: 10px;
            .recommend-author,.recommend-follow{
                text-decoration: none;
            }
            .recommend-img{
                width: 45px;
                height: 45px;
                border-radius: 50%;
                overflow: hidden;
                display: block;
                float: left;
                margin-right: 10px;
            }
            .recommend-author{
                color: black;
            }
            .recommend-follow{
                color : green;
                float: right;
            }
            .recommend-p{
                font-size: 14px;
                margin-top: 8px;
                margin-bottom: 0;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
</style>