<template>
    <li class="message-list d-flex align-items-center justify-content-between">
        <div class="message-list-content">
            <p class="author d-flex justify-content-start align-items-center" v-if="author">
                <router-link tag="div" :to="author.link" class="author-box d-flex align-items-center">
                    <div class="author-img">
                        <img :src="author.img" alt="">
                    </div>
                    {{author.name}}
                </router-link>
                <span>
                    喜欢了文章
                </span>
                <span>
                    {{message.time}}
                </span>
            </p>

            <p class="title">
                <router-link :to="message.url">
                    {{message.title}}
                </router-link>
            </p>
            <p class="abstract">
                {{ellipsis}}
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
            </p>
        </div>
        
        <div class="message-list-right">
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
            },
            author : Object
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
        }
    }
</script>

<style lang="less">
    .message-list{
        width: 750px;
        background-color: #fff;
        border-bottom: 1px solid lightgray;
        padding-top: 20px;
        padding-bottom: 20px;
        .message-list-content{
            width: 70%;
            padding-right: 10px;
        }
        .message-list-right{
            width: 150px;
            height: 100px;
            overflow: hidden;
        }
        .author{
            span{
                margin-left: 10px;
            }
            .author-box{
                cursor: pointer;
            }
            .author-img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 10px;
                overflow: hidden;
            }
            img{
                height: 30px;
            }
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
            max-height: 60px;
            line-height: 30px;
            text-overflow: ellipsis;
            overflow: hidden;
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