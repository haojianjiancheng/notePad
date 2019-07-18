<template>
    <ul class="common-float-button">
        <router-link tag="li" v-for="(item,index) in list" :key="`float-button${index}`" :to="item.link">
            <i :class="['iconfont',item.icon]"></i>
            {{item.name}}
        </router-link>
    </ul>
</template>

<script>
    export default {
        name : "common-float-button",
        props : {
            list : {
                type : Array,
                required: true
            }
        }
    }
</script>

<style lang="less">
    .common-float-button{
        padding-left: 0;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
        border: 1px solid black;
        li{
            list-style: none;
            user-select: none;
            text-align: center;
            cursor: pointer;
            width: 40px;
            height: 40px;
            line-height: 40px;
            &:not(:last-child){
                border-bottom: 1px solid gray;
            }
            &:hover{
                background-color: #f1f1f1;
            }
        }
    }
</style>