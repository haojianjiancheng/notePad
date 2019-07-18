<template>
    <ul class="common-column-button">
        <router-link tag="li" v-for="(item,index) in list" :key="`column-button${index}`" :to="item.link">
            <i :class="['iconfont',item.icon]"></i>
            {{item.name}}
        </router-link>
    </ul>
</template>

<script>
    export default {
        name : "common-column-button",
        props : {
            list : {
                type : Array,
                required : true
            }
        }
    }
</script>

<style lang="less">
    .common-column-button{
        padding-left: 0;
        border-radius: 0 0 9px -4px black;
        margin-top: 0;
        margin-bottom: 0;
        li{
            list-style: none;
            user-select: none;
            text-align: center;
            cursor: pointer;
            height: 50px;
            line-height: 50px;
            &:hover{
                background-color: #f1f1f1;
            }
        }
    }
</style>