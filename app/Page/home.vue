<template>
    <div class="home">
        <paper class="head d-flex align-items-center">
            <div class="head-content d-flex justify-content-around align-items-center">
                <div class="head-logo">
                    NOTEPAD
                </div>
                <common-menu :list="messageList">
                    <span>
                        消息
                    </span>
                </common-menu>
                <common-menu :list="portraitList">
                    <div class="head-portrait">
                        <img :src="srcLink" alt="头像" class="head-portrait-img">
                    </div>
                    <i class="iconfont icon-icon-test3"></i>
                </common-menu>
                <button class="btn" @click="toWriter">写文章</button>
                <router-link class="btn" tag="button" to="follow">关注</router-link>
                
            </div>
        </paper>
        <common-container class="content">
            <router-view></router-view>
        </common-container>
        <paper class="foot"></paper>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                srcLink : this.$store.state.portrait,
                portraitList : [
                    {
                        name : "我的主页",
                        link : "/regin",
                        icon : "icon-user",
                    },
                    {
                        name : "收藏的文章",
                        link : "/regin",
                        icon : "icon-icon-test4",
                    },
                    {
                        name : "喜欢的文章",
                        link : "/regin",
                        icon : "icon-like",
                    },
                    {
                        name : "帮助与反馈",
                        link : "/regin",
                        icon : "icon-comment",
                    },
                    {
                        name : "设置",
                        link : "setup",
                        icon : "icon-icon-test5",
                    },
                    {
                        name : "退出",
                        link : "/regin",
                        icon : "icon-sign_out"
                    }
                ],
                messageList : [
                    {
                        name : "评论",
                        link : "",
                        icon : "icon-comment"
                    },
                    {
                        name : "信息",
                        link : "",
                        icon : "icon-message"
                    },
                    {
                        name : "喜欢和赞",
                        link : "",
                        icon : "icon-like"
                    },
                    {
                        name : "关注",
                        link : "",
                        icon : "icon-icon_plus"
                    },
                    {
                        name : "其他提醒",
                        link : "",
                        icon : "icon-ellipsis"
                    },
                    
                ]
            }
        },
        methods : {
            blod(){
                console.log(1);
                
            },
            toWriter(){
                this.$router.push("writer")
            }
        }
    }
</script>

<style lang="less">
    .home{
        height: 100%;
    }
    .head,.foot,.content{
        width: 100%;
        margin: 0;
    }
    .head{
        .head-content{
            width: 100%;
            height: 50px;
            position: fixed;
            background-color: #f1f1f1;
            top: 0;
            z-index: 10002;
        }
        .head-logo{
            width: 150px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 30px;
            font-family: 'Courier New', Courier, monospace;
            font-weight: 600;
        }
        .head-portrait{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }
        .head-portrait-img{
            height: 40px;
        }
    }
    .content{
        margin-top: 50px;
        padding: 0;
        overflow: auto;
    }
    .foot{

    }
</style>