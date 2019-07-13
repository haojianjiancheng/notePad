<template>
    <div class="home">
        <paper class="head">
            <div class="head-content">
                <div class="head-logo">
                    NOTEPAD
                </div>
                <paper class="head-portrait" >
                    <img :src="srcLink" @click="toUserSetup" alt="头像" class="head-portrait-img">
                </paper>
                <common-button flat @click="toWriter">写文章</common-button>
            </div>
        </paper>
        <paper class="menu"></paper>
        <paper class="content">
            <router-view></router-view>
        </paper>
        <paper class="foot"></paper>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                srcLink : this.$store.state.portrait
            }
        },
        methods : {
            blod(){
                console.log(1);
                
            },
            toUserSetup(){
                this.$router.push("setup")
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
        display: grid;
        grid-template-columns: repeat(12,1fr);
        grid-template-rows: 14% 72% 14%;
        grid-template-areas: 
            "h h h h h h h h h h h h"
            "m m c c c c c c c c c c"
            "f f f f f f f f f f f f"
    }
    .head,.foot,.menu,.content{
        width: 100%;
        margin: 0;
    }
    .head{
        grid-area: h;
        display: flex;
        align-items: center;
        .head-content{
            width: 300px;
            height: 50px;
            margin-left: 20px;
            display: flex;
            justify-content: space-between;
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
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            cursor: pointer;
            &:hover{
                transform: scale(1.1,1.1)
            }
        }
        .head-portrait-img{
            height: 50px;
        }
    }
    .menu{
        grid-area: m;
        padding: 0;
    }
    .content{
        grid-area: c;
        padding: 0;
        overflow: auto;
    }
    .foot{
        grid-area: f;
    }
    @media screen and(max-width: 640px){
        .home{
            grid-template-areas: 
            "h h h h h h h h h h h h"
            "c c c c c c c c c c c c"
            "f f f f f f f f f f f f"
        }
        .head > .head-content{
            margin-left: 0;
        }
    }
</style>