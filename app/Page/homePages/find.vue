<template>
    <common-container class="find mt">
       <button @click="click">dd</button>
    </common-container>
</template>

<script>
    export default {
        methods : {
            click(){
                this.axios.post("/createArticle").then(data=>{
                    console.log(data)
                })
            }
        }
    }
</script>

<style lang="less">
    .find{
        
    }
</style>