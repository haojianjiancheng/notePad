<template>
    <common-row class="bookmarks d-flex justify-content-center">
        <list v-for="(item,index) in bookmarkList" :key="`bookmarks${index}`" :message="item"></list>
    </common-row>
</template>

<script>
    import list from "../../componts/bookmarksList.vue"
    export default {
        beforeCreate(){
            this.axios.get("bookmarks").then((data)=>{
                console.log(data.data.bookmarkList);
                
                this.bookmarkList = data.data.bookmarkList;
            })
        },
        components : {
            list
        },
        data(){
            return{
                bookmarkList : null
            }
        }
    }
</script>

<style lang="less">
    .bookmarks{

    }
</style>