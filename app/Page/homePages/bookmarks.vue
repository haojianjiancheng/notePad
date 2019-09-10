<template>
    <transition-group name="bookmarks-transition" class="bookmarks mt" tag="ul" mode="in-out">
        <list 
            v-for="(item,index) in bookmarkList" 
            :key="item.cid" 
            :message="item" 
            @cancelCollection="clickHandle(index)"
            class="bookmarks-transition-item"
        ></list>
    </transition-group>
</template>

<script>
    import list from "../../components/bookmarksList.vue"
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
        },
        methods : {
            clickHandle(index){
                this.axios.post("cancelCollection").then(data=>{
                    data.data.cancel && this.bookmarkList.splice(index,1)
                }).catch((err)=>{
                    return;
                })
            }
        }
    }
</script>

<style lang="less">
    .bookmarks{
        .bookmarks-transition-item{
            transition: all .3s;
        }
        .bookmarks-transition-leave-to{
            opacity: 0;
            transform: translateX(80px);
        }
        .bookmarks-transition-leave-active{
            position: absolute
        }
    }
</style>