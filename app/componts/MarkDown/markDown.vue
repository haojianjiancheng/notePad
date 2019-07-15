<template>
    <div class="common-markdown">
        <ul class="common-markdown-tab">
            <li>
                <button @click="bold">
                    变粗
                </button>
            </li>
            <li>
                <button @click="showLink">
                    加链接
                </button>
                <div v-show="show">
                    <input type="text" placeholder="www.baidu.com" v-model="link">
                    <button @click="createLink">
                        添加
                    </button>
                </div>
            </li>
            <li>
                
            </li>
        </ul>
        <div class="common-markdown-edit"  contenteditable="true">
            <a contenteditable="false">fefefe</a>
        </div>
        <div class="common-markdown-exhibit">
        </div>
    </div>
</template>

<script>
    export default {
        name : "common-markdown",
        created(){
            if(window.getSelection){
                this.edit = window.getSelection()
            }else{
                this.edit = document.selection.createRange()
            }
        },
        data(){
            return {
                edit : null,
                show : false,
                link : ""
            }
        },
        methods : {
            showLink(){
                this.show = true;
            },
            createLink(){
                if(this.link){
                    document.execCommand("createLink",false,this.link);
                    return
                } else{
                    alert("请输入地址")
                }
            },
            bold(){
                console.log(1);
                
                document.execCommand("bold")
            },
            
        }
    }
</script>

<style lang="less">
    .common-markdown{
        border: 1px solid black;
        height: 100%;
        .common-markdown-tab{
            padding-left: 0;
            display: flex;
            flex-direction: column;
            li{
                list-style: none;
            }
        }
        .common-markdown-edit,.common-markdown-exhibit{
            width: 50%;
            height: 100%;
            border: 1px solid;
            overflow: auto;
            a{
                cursor: pointer;
            }
        }
        .common-markdown-edit{
            border-color: red;
        }
        .common-markdown-exhibit{
            border-color: orange;
        }
    }
</style>