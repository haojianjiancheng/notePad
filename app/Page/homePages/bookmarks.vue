<template>
    <ul class="bookmarks">
        <list v-for="(item,index) in bookmarkList" :key="`bookmarks${index}`" :message="item"></list>
    </ul>
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
       padding-left: 0;
    }
</style>