<template>
    <common-row tag="ul" class="follow">
        <list v-for="(item,index) in mesArray" :key="`mesArr${index}`" :author="author" :message="item"></list>
    </common-row>
</template>

<script>
    import list from "../../componts/messageList.vue"
    export default {
        components : {
            list
        },
        beforeCreate(){
            this.axios.get("follow").then((data)=>{
                console.log(data.data.mesArray);
                this.mesArray = data.data.mesArray;
               
            })
        },
        data(){
            return{
                author : {
                    name : this.$store.state.username,
                    img : this.$store.state.portrait,
                    link : "/"
                },
                mesArray : null,
            }
        }
    }
</script>

<style lang="less">
    .follow{
        padding-left: 0;
    }
</style>