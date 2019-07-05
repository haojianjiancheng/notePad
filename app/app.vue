<template>
    <div id="app"
        @mouseup.self="AppMouseUp"
    >
        <div class="move"
            @mousedown.self="mousedown"
            @mousemove.self="mousemove"
            @mouseup.self="mouseup"
            :style = "[style()]"
        ></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                down : false,
                start : {},
                color : "blue",
                move : {
                    x : 0,
                    y : 0
                }
            }
        },
        methods : {
            AppMouseUp(){
                this.down = false;
                console.log(1);
                
            },
            style(){
                return {
                    top : `${this.move.x}px`,
                    left : `${this.move.y}px`
                }
            },
            mousedown(e){
                this.down = true;
            },
            mousemove(e){
                if(this.down){
                    this.move.x++;
                    this.move.y++;
                }
            },
            mouseup(){
                this.down = false;
            }
        }
    }
</script>

<style lang="less">
    html{
        height: 100%;
    }
    body{
        width: 100%;
        height: 100%;
        margin: 0;
    }
    #app{
        height: 100%;
        .move{
            position: absolute;
            width: 100px;
            height: 100px;
            border: 1px solid black;
            box-shadow: 1px 1px 4px 1px black
        }
    }
</style>