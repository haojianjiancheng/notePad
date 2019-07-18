<template>
    <div class="setup">
        <div class="setup-right">
            <common-column-button :list="button"></common-column-button>
        </div>
        <div>
            444
        </div>
    </div>
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