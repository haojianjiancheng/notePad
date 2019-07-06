<template>
    <div class="common-flex-box" :style="style">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name : "common-flex-box",
        props : {
            justify : {
                type : String,
                validator : function(val){
                    return /(flex-start|flex-end|center|space-between|space-around)/.test(val)
                }
            },
            direction : {
                type : String,
                validator : function(val){
                    return /(row|row-reverse|column|column-reverse)/.test(val)
                }
            },
            align : {
                type : String,
                validator : function(val){
                    return /(flex-start|flex-end|center|baseline|stretch)/.test(val)
                }
            }
        },
        computed : {
            style(){
                
                return {
                    "justify-content" : this.justify && this.justify,
                    "flex-direction" : this.direction && this.direction,
                    "align-items" : this.align && this.align,
                }
            }
        }
    }
</script>

<style lang="less">
    .common-flex-box{
        display: flex;
    }
</style>