<template>
    <div class="common-input-box">
        <div class="common-input-content">
            <span v-if="label">
                {{ label }}
            </span>
            <input 
                :class="['common-input',{'active':focus},{'error':tips}]" 
                @input="inuptHandle" 
                v-bind="$attrs" 
                @focus="focusHandle" 
                @blur="blurHandle"
            >
        </div>
        <div class="common-input-tips">
            <span v-show="tips">
                {{ tips }}
            </span>
        </div>
    </div>
    
</template>

<script>
    export default {
        name : "common-input",
        inject : {
            form : {
                default : ''
            }
        },
        mounted () {
            this.form && this.form.addItem(this)
        },
        beforeDestroy () {
            this.form && this.form.removeItem(this)
        },
         props : {
            prop : {
                type : String,
                required : true
            },
            label : {
                type : String
            },
            condition : {
                type : Array,
                default : ()=> []
            }
        },
        data(){
            return{
                focus : false,
                tips : "",
            }
        },
        methods : {
            inuptHandle(e){
                this.$emit("input",e.target.value)
            },
            focusHandle(){
                this.focus = true;
                this.tips = "";
            },
            blurHandle(e){
                this.focus = false;
                let result = this.validate(e.target.value);
            },
            validate(value){
                let verificationResults = true;
                let item = this.condition;
                let len = item.length;
                if(len === 0) return verificationResults;
                for (let i = 0; i < len; i++) {
                    let result = item[i].validate(value);
                    let message = item[i].message;
                    if(result) {
                        verificationResults = false;
                        this.tips = message;
                        break;
                    }
                }
                return verificationResults
            }
        }
    }
</script>

<style lang="less">
    .common-input-box{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 265px;
        margin: 0 auto;
        padding: 5px 0;
        .common-input-content{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .common-input{
            outline: none;
            border: 1px solid lightgray;
            -webkit-tap-highlight-color:transparent;
            min-width: 150px;
            min-height: 30px;
            padding-left: 10px;
            border-radius: 3px;
            &:hover{
                background-color: lightblue;
            }
        }
        .active{
            border-color: blue;
        }
        .error{
            border-color: red;
        }
        .common-input-tips{
            padding-top: 5px;
            padding-left: 5px;
            color: red;
            height: 20px;
            font-size: 14px;
        }
    }
</style>