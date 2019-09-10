<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        }
    }
</script>

<style lang="less">
    html,body,#app{
        height: 100%;
    }
    body{
        width: 100%;
        margin: 0;
    }
    #app{
        font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
        overflow-y: scroll;
    }
</style>