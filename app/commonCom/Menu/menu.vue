<template>
    <div class="common-menu"
        @mousemove.capture="mousemoveHandle"
        @mouseout.capture="mouseoutHandle"
    >   
        <slot></slot>
        <ul class="common-menu-list" v-show="open">
            <router-link :to="item.link" tag="li" v-for="(item,index) in list" :key="`list${index}`">
                <i v-if="item.icon" :class="['iconfont',item.icon]"></i>
                {{item.name}}
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name : "common-menu",
        props : {
            list : {
                type : Array,
                required : true
            }
        },
        data(){
            return{
                open : false
            }
        },
        methods : {
            mousemoveHandle(){
                this.open = true;
            },
            mouseoutHandle(){
                this.open = false;
            }
        }
    }
</script>

<style lang="less">
    .common-menu{
        position: relative;
        .common-menu-list{
            position: absolute;
            top: 50px;
            left: -20px;
            background-color: #fff;
            padding-left: 0;
            box-shadow: 0 0 8px -4px black;
            margin-top: 0;
            li{
                width: 150px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                border-bottom: 1px solid lightgray;
                list-style: none;
                cursor: pointer;
                user-select: none;
                &:hover{
                    background-color: #f1f1f1;
                }
            }
        }
    }
    
</style>