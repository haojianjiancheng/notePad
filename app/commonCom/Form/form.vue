<template>
    <form class="common-form">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name : "common-form",
        props : {
            model : {
                type : Object,
                required : true
            }
        },
        data(){
            return {
                items : []
            }
        },
        provide(){
            return {
                form : this
            }
        },
        methods : {
            addItem(item){
                this.items.push(item)
            },
            removeItem(item){
                let index = this.items.indexOf(item);
                if(index === -1) return;
                this.items.splice(index,1)
            },
            validateAll(){
                let verificationResultsAll = true;
                let items = this.items;
                let len = items.length;
                for (let i = 0; i < len; i++) {
                    let value = this.model[items[i].prop];
                    let result = items[i].validate(value);
                    if(!result){
                        verificationResultsAll = false;
                        break;
                    }
                }
                return verificationResultsAll
            },
            clean(){

            }
        }
    }
</script>

<style lang="less">
    .common-form{
        background-color: #fff;
    }
</style>