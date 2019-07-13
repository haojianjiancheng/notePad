<template>
    <ul class="setup flex-col-left-left">
        <li class="setup-li  flex-row-left">
            <div class="setup-li-td">
                <paper class="portait-setup">
                    <img :src="portaitLink" alt="头像" class="portait-setup-img">
                </paper>
            </div>
            <div class="setup-li-td">
                <common-button>设置头像</common-button>
            </div>
        </li>
        <li class="setup-li  flex-row-left">
            <div class="setup-li-td">
                <span>
                    用户名
                </span>
            </div>
            <div class="setup-li-td">
                {{username}}
            </div>
        </li>
        <li class="setup-li  flex-row-left">
             <div class="setup-li-td">
                <common-button @click="goBack">返回</common-button>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return{
                username : this.$store.state.username,
                portaitLink : this.$store.state.portrait
            }
        },
        methods : {
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less">
    .setup{
        height: 100%;
        overflow: hidden;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
        overflow: auto;
        .setup-li{
            list-style: none;
            padding: 10px;
            margin-left: 40px;
            border-bottom: 1px solid lightgray;
        }
        .setup-li-td{
            min-width: 200px;
        }
        .setup-paper{
            width: 400px;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .portait-setup{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
        }
        .portait-setup-img{
            height: 100px;
        }
    }
</style>