<template>
    <button class="common-button" 
        @click="clickHandle"
        :class="{ 'common-button-large' : this.large }"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name : "common-button",
        props : {
            large : {
                type : Boolean,
                default : false
            }
        },
        methods : {
            clickHandle(){
                this.$emit("click")
            }
        }
    }
</script>

<style lang="less">
    .common-button{
        outline: none;
        border: none;
        cursor: pointer;
        min-width: 50px;
        min-height: 30px;
        border-radius: 6px;
        background-color: blue;
        -webkit-tap-highlight-color:transparent;
        &:hover{
            background-color: lightblue;
        }
        &:active{
            border: 1px solid blue;
        }
    }
    .common-button-large{
        min-width: 100px;
        min-height: 40px;
    }
</style>