<template>
    <common-container class="mine mt">
        <div class="mine-head">
            <div class="mine-head-img">
                <img :src="portraitLink" alt="">
            </div>
            <h3 class="mine-head-username">
                {{username}}
            </h3>
            <ul class="mine-head-message">
                <li class="mine-head-focus" @click="changTabsActive(0)">关注 {{message.followsNumber}}</li>
                <li>粉丝 {{message.fansNumber}}</li>
                <li class="mine-head-focus" @click="changTabsActive(1)">文章 {{message.articlesNumber}}</li>
                <li>字数 {{message.wordsNumber}}</li>
                <li>收获喜欢 {{message.likesNumber}}</li>
            </ul>
        </div>
        <common-tabs :list="list" :value.sync="tabsActive"></common-tabs>
        <component :is="componentActive"></component>
    </common-container>
</template>

<script>
    import mineFollow from "../../components/mineFollow.vue";
    import mineArticles from "../../components/mineArticles.vue"
    export default {
        data(){
            return{
                portraitLink : this.$store.state.portrait,
                username : this.$store.state.username,
                message : this.$store.state.userMessage,
                tabsActive : 0,
                componentArr : ["mineFollow","mineArticles"],
                list : [
                    "关注",
                    "文章",
                    "动态",
                    "评论",
                ]
            }
        },
        components : {
            mineFollow,
            mineArticles
        },
        computed : {
            componentActive(){
                return this.componentArr[this.tabsActive];
            }
        },
        methods : {
            changTabsActive(i){
                this.tabsActive = i;
            },
        }
    }
</script>

<style lang="less">
    .mine{
        .mine-head{
            padding-top: 20px;
            padding-bottom: 20px;
            position: relative;
            background-color: #fff;
            height: 60px;
            width: 600px;
        }
        .mine-head-img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            float: left;
            margin-right: 10px
        }
        .mine-head-username{
            margin-top: 0;
        }
        .mine-head-message{
            margin-top: 0;
            margin-bottom: 0;
            li{
                display: inline-block;
                padding-right: 4px;
                border-right: 1px solid gray;
            }
            .mine-head-focus{
                cursor: pointer;
            }
        }
    }
</style>