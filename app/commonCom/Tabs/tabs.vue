<template>
    <div class="common-tabs">
        <div 
            v-for="(item,index) in list" 
            :key="index"
            @click="click(index)"
            :class="['common-tab',{'common-tab-active' : value === index}]"
        >
            {{item}}
        </div>
    </div>
</template>

<script>
    export default {
        name : "common-tabs",
        props : {
            list : {
                type : Array,
                required : true
            },
            value : {

            }
        },
        methods : {
            click(i){
                this.$emit('update:value',i)
                this.$emit("tabsClick",i)
            }
        }
    }
</script>

<style lang="less">
    .common-tabs{
        .common-tab{
            display: inline-block;
            text-align: center;
            line-height: 40px;
            width: 90px;
            height: 40px;
            background-color: #fff;
            user-select: none;
            cursor: pointer;
        }
        .common-tab-active{
            background-color: #f1f1f1;
        }
    }
</style>