<template>
    <div class="mine">
        <common-tabs :list="list" @tabsClick="tabsClick" :value.sync="tabsActive"></common-tabs>
        <div class="mine-1" v-if="tabsActive === 0">
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tabsActive : 1,
                list : [
                    "按钮1",
                    "按钮2",
                    "按钮3",
                    "按钮4",
                ]
            }
        },
        methods : {
            tabsClick(i){
                this.axios.post("/upload").then((data)=>{
                    console.log(data);
                    
                })
            }
        }
    }
</script>

<style lang="less">

</style>