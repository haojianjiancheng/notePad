<template>
    <common-row class="setup">
        <common-col class="setup-left" md="3" lg="3" xl="3" sm="3">
            <common-column-button :list="button"></common-column-button>
        </common-col>
        <common-col class="setup-right" md="9" lg="9" xl="9" sm="9">
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
                        icon : "icon-user",
                        name : "基础设置",
                        link : "/"
                    },
                    {
                        icon : "icon-icon-test4",
                        name : "个人资料",
                        link : "/"
                    },
                    {
                        icon : "icon-error",
                        name : "黑名单",
                        link : "/"
                    },
                    {
                        icon : "icon-icon-test5",
                        name : "账号管理",
                        link : "/"
                    },
                ]
            }
        }
    }
</script>

<style lang="less">
.setup{
    .setup-left,.setup-right{
        margin-top: 10px;
    }
    .setup-left{
        
    }
    .setup-right{
        
    }
}
</style>