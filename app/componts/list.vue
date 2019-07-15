<template>
    <li class="follow-list d-flex align-items-center">
        <div class="follow-list-content">
            <div class="author d-flex justify-content-start align-items-center">
                <div class="author-img">
                    <img :src="srcLink" alt="">
                </div>
                <span>
                    {{author}}
                </span>
                <span>
                    喜欢了文章
                </span>
                <span>
                    {{message.time}}
                </span>
            </div>
            <div class="title">
                <router-link :to="message.url">
                    {{message.title}}
                </router-link>
            </div>
            <div class="abstract">
                <span>
                    {{message.abstract}}
                </span>
            </div>
            <div class="meta d-flex justify-content-start align-content-center">
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
            </div>
        </div>
        <div class="follow-list-right">
            <img :src="srcLink" alt="">
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
            return{
                author : this.$store.state.username,
                srcLink : this.$store.state.portrait,
            }
        }
    }
</script>

<style lang="less">
    .follow-list{
        min-width: 800px;
        list-style: none;
        border-bottom: 1px solid lightgray;
        padding-top: 20px;
        padding-bottom: 20px;
        .follow-list-content{
            padding-right: 10px;
        }
        .author,.title,.abstract,.meta{
            margin-bottom: 10px;
        }
        .author{
            span{
                margin-left: 10px;
            }
            .author-img{
                width: 30px;
                height: 30px;
                border-radius: 50%;
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