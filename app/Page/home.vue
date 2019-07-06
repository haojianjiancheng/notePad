<template>
    <div class="home">
        <paper class="head"></paper>
        <paper class="menu"></paper>
        <paper class="content"></paper>
        <paper class="foot"></paper>
    </div>
</template>

<script>
    export default {
        
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
    }
    .menu{
        grid-area: m;
        padding: 0;
    }
    .content{
        grid-area: c;
        padding: 0;
    }
    .foot{
        grid-area: f;
    }
</style>