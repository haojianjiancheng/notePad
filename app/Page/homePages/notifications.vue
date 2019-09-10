<template>
    <common-container class="notifications mt">
        <div class="notifications-left">
            <common-column-button :list="button"></common-column-button>
        </div>
        <div class="notifications-right">
            444
        </div>
    </common-container>
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
    }
    .notifications-left{
        width: 300px;
    }
}
</style>