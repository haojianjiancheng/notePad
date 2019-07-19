<template>
    <common-container class="follow d-flex justify-content-between">
        <ul class="follow-left">
            <list v-for="(item,index) in mesArray" :key="`mesArr${index}`" :author="author" :message="item"></list>
        </ul>
        <div class="follow-right">
            <recommend :list="recommendArray"></recommend>
        </div>
    </common-container>
</template>

<script>
    import list from "../../components/messageList.vue";
    import recommend from "../../components/recommend.vue";
    export default {
        components : {
            list,
            recommend
        },
        beforeCreate(){
            this.axios.get("follow").then((data)=>{
                this.mesArray = data.data.mesArray;             
            });
            this.axios.get("recommend").then(data=>{
                this.recommendArray = data.data.recommend;
            })
        },
        data(){
            return{
                author : {
                    name : this.$store.state.username,
                    img : this.$store.state.portrait,
                    link : "/"
                },
                mesArray : {},
                recommendArray : [],
            }
        }
    }
</script>

<style lang="less">
    .follow{
        margin-top: 50px;
        .follow-left{
        }
        .follow-right{
            padding-left: 10px;
            margin-top: 20px;
        }
    }
</style>