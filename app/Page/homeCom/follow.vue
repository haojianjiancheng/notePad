<template>
    <common-row tag="ul" class="follow">
        <list v-for="(item,index) in mesArray" :key="`mesArr${index}`" :message="item"></list>
    </common-row>
</template>

<script>
    import list from "../../componts/list.vue"
    export default {
        components : {
            list
        },
        data(){
            return{
                mesArray : [
                    {
                        author : "bsefjie",
                        time : new Date().toLocaleString(),
                        title : "这是个新的事件",
                        abstract : "问题说明 http://bbs.chinaffmpeg.com/a.html遇到一个用canvas对图片进行hue-rotate 90和用ffmpeg fiter处理hue颜...",
                        reader : 19999,
                        like : 40,
                        comment : 20,
                        url : "/"
                    },
                    {
                        author : "bsefjie",
                        time : new Date().toLocaleString(),
                        title : "这是个新的事件",
                        abstract : "问题说明 http://bbs.chinaffmpeg.com/a.html遇到一个用canvas对图片进行hue-rotate 90和用ffmpeg fiter处理hue颜...",
                        reader : 19999,
                        like : 40,
                        comment : 20,
                        url : "/regin"
                    },
                    {
                        author : "bsefjie",
                        time : new Date().toLocaleString(),
                        title : "这是个新的事件",
                        abstract : "问题说明 http://bbs.chinaffmpeg.com/a.html遇到一个用canvas对图片进行hue-rotate 90和用ffmpeg fiter处理hue颜...",
                        reader : 19999,
                        like : 40,
                        comment : 20,
                        url : "/"
                    },
                    {
                        author : "bsefjie",
                        time : new Date().toLocaleString(),
                        title : "这是个新的事件",
                        abstract : "问题说明 http://bbs.chinaffmpeg.com/a.html遇到一个用canvas对图片进行hue-rotate 90和用ffmpeg fiter处理hue颜...",
                        reader : 19999,
                        like : 40,
                        comment : 20,
                        url : "/"
                    },
                    {
                        author : "bsefjie",
                        time : new Date().toLocaleString(),
                        title : "这是个新的事件",
                        abstract : "问题说明 http://bbs.chinaffmpeg.com/a.html遇到一个用canvas对图片进行hue-rotate 90和用ffmpeg fiter处理hue颜...",
                        reader : 19999,
                        like : 40,
                        comment : 20,
                        url : "/"
                    },
                    {
                        author : "bsefjie",
                        time : new Date().toLocaleString(),
                        title : "这是个新的事件",
                        abstract : "问题说明 http://bbs.chinaffmpeg.com/a.html遇到一个用canvas对图片进行hue-rotate 90和用ffmpeg fiter处理hue颜...",
                        reader : 19999,
                        like : 40,
                        comment : 20,
                        url : "/"
                    },
                    {
                        author : "bsefjie",
                        time : new Date().toLocaleString(),
                        title : "这是个新的事件",
                        abstract : "问题说明 http://bbs.chinaffmpeg.com/a.html遇到一个用canvas对图片进行hue-rotate 90和用ffmpeg fiter处理hue颜...",
                        reader : 19999,
                        like : 40,
                        comment : 20,
                        url : "/"
                    },
                    {
                        author : "bsefjie",
                        time : new Date().toLocaleString(),
                        title : "这是个新的事件",
                        abstract : "问题说明 http://bbs.chinaffmpeg.com/a.html遇到一个用canvas对图片进行hue-rotate 90和用ffmpeg fiter处理hue颜...",
                        reader : 19999,
                        like : 40,
                        comment : 20,
                        url : "/"
                    },
                ],
            }
        }
    }
</script>

<style lang="less">
    .follow{
        padding-left: 0;
    }
</style>