<template>
    <li class="bookmarks-list d-flex align-items-center"
        @mousemove="mousemoveHandle"
        @mouseout="mouseoutHandle"
    >
        <div class="bookmarks-list-content">
            <p class="title">
                <router-link :to="message.url">
                    {{message.title}}
                </router-link>
            </p>

            <p class="abstract">
                <span>
                    {{ellipsis}}
                </span>
            </p>

            <p class="meta d-flex justify-content-start align-content-center">
                <span>
                    {{message.author}}
                </span>
                <router-link :to="message.url">
                    <i class="iconfont icon-icon_eye"></i>
                        {{message.reader}}
                </router-link>
                <router-link :to="message.url">
                    <i class="iconfont icon-comment"></i>
                        {{message.comment}}
                </router-link>
                <span>
                    <i class="iconfont icon-like"></i>
                        {{message.like}}
                </span>
                <span v-show="show">
                    <router-link :to="message.outline">
                        取消收藏
                    </router-link>
                </span>
                
            </p>
        </div>
        
        <div class="bookmarks-list-right">
            <img :src="message.img" alt="">
        </div>
    </li>
</template>

<script>
    export default {
        props : {
            message : {
                type : Object,
                required : true
            }
        },
        data(){
            return {
                show : false
            }
        },
        computed : {
            ellipsis(){
                if(this.message.abstract){
                    let abstract = this.message.abstract;
                    if(abstract.length > 60){
                        return abstract.substring(0,60)+"...";
                    }else{
                        return abstract;
                    }
                }
            }
        },
        methods : {
            mousemoveHandle(){
                this.show = true;
            },
            mouseoutHandle(){
                this.show = false;
            }
        }
    }
</script>

<style lang="less">
    .bookmarks-list{
        list-style: none;
        width: 750px;
        background-color: #fff;
        border-bottom: 1px solid lightgray;
        padding-top: 20px;
        padding-bottom: 20px;
        .bookmarks-list-content{
            padding-right: 10px;
        }
        .bookmarks-list-right{
            width: 150px;
            height: 100px;
            overflow: hidden;
        }
        .title{
            a{
                text-decoration: none;
                font-size: 20px;
                color: black;
                &:visited{
                    color: gray;
                }
            }
        }
        .abstract{
            line-height: 30px;
            max-height: 60px;
        }
        .meta{
            a{
                color: black;
                text-decoration: none;
            }
            span:not(:first-child),a{
                margin-left: 10px;
            }
        }
    }
</style>