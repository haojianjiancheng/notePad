<template>
    <common-row class="notifications">
        <common-col class="notifications-left" md="3" lg="3" xl="3" sm="3">
            <common-column-button :list="button"></common-column-button>
        </common-col>
        <common-col class="notifications-right" md="9" lg="9" xl="9" sm="9">
            444
        </common-col>
    </common-row>
</template>

<script>
    export default {
        data(){
            return{
                button : [
                    {
                        icon : "icon-comment",
                        name : "评论",
                        link : "/"
                    },
                    {
                        icon : "icon-icon-test6",
                        name : "短信",
                        link : "/"
                    },
                    {
                        icon : "icon-suohui",
                        name : "投稿",
                        link : "/"
                    },
                    {
                        icon : "icon-like",
                        name : "喜欢",
                        link : "/"
                    },
                    {
                        icon : "icon-ellipsis",
                        name : "其他",
                        link : "/"
                    },
                ]
            }
        }
    }
</script>

<style lang="less">
.notifications{
    .notifications-left,.notifications-right{
        margin-top: 10px;
    }
    .notifications-left{
    }
}
</style>