<template>
    <div class="common-input-box">
        <div class="common-input-content">
            <span v-if="label">
                {{ label }}
            </span>
            <div :class="['common-input',{'active':focus},{'error':tips}]"
                @click="parentClickHandle"
            >
                <input 
                    v-focus="focus"
                    ref="input"
                    @input="inuptHandle" 
                    v-bind="$attrs" 
                    @focus="focusHandle" 
                    @blur="blurHandle"
                    @keydown.enter="enterHandle"
                >
                <div class="common-input-icon" @click="clean" v-show="iconshow">
                    <i class="iconfont icon-icon_error"></i>
                </div>
            </div>
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
                iconshow : false,
            }
        },
        directives : {
            focus : function(el,{value}){
                if(value){
                    el.focus()
                }
            }
        },
        methods : {
            parentClickHandle(){
                this.focus = true;
            },
            inuptHandle(e){
                this.tips = "";
                let value = e.target.value;
                value.length > 1 ? this.iconshow = true : this.iconshow = false;
                this.$emit("input",value)
            },
            focusHandle(){
                this.focus = true;
                this.tips = "";
            },
            blurHandle(e){
                this.focus = false;
                this.validate(e.target.value);
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
            },
            clean(){
                this.iconshow = false;
                this.tips = "";
                this.$emit("input","")
            },
            enterHandle(){
                this.$emit('enter')
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
            display: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid lightgray; 
            width: 180px;
            input{
                min-width: 150px;
                min-height: 30px;
                padding-right: 30px;
                outline: none;
                border: none;
                background-color: transparent;
                -webkit-tap-highlight-color:transparent;
                padding-left: 10px;
                border-radius: 3px;
            }
            &:hover{
                background-color: lightblue;
            }
        }
        .common-input-icon{
            position: absolute;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: red;
            width: 30px;
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