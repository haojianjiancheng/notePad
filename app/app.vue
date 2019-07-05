<template>
    <div id="app">
        <paper class="head">
            1
        </paper>
        <paper class="menu">
        </paper>
        <paper class="content">
            1
        </paper>
        <paper class="foot">
            1
        </paper>
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
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-template-rows: 10% 80% 10%;
        grid-template-areas: 
            "h h h h h h h h h h h h"
            "m m c c c c c c c c c c"
            "f f f f f f f f f f f f"
    }
    @media screen and (max-width: 640px){
        #app {
            grid-template-areas: 
            "h h h h h h h h h h h h"
            "c c c c c c c c c c c c"
            "f f f f f f f f f f f f";
        }
    }
    .head{
        grid-area: h;
    }
    .menu{
        grid-area: m;
    }
    .content{
        grid-area: c;
    }
    .foot{
        grid-area: f;
    }
</style>