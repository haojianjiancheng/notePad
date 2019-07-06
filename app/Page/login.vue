<template>
    <div class="login flex-row-center">
        <paper class="login-paper flex-col-center">
            <common-form ref="loginForm" :model="formDate">
                <common-input v-model="formDate.username" type="text" prop="username" label="用户名：" :condition="userCondition"></common-input>
                <common-input v-model="formDate.password" type="password" prop="password" label="密码：" :condition="pswCondition"></common-input>
            </common-form>
            <common-flex-box class="login-button-group" justify="space-around">
                <common-button large @click="login">登录</common-button>
                <common-button large @click="regin">注册</common-button>
            </common-flex-box>
        </paper>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formDate : {
                    username : "",
                    password : ""
                },
                userCondition : [
                    {
                        validate : (value)=>{
                            return !value
                        },
                        message : "不能不写"
                    },
                    {
                        validate : (value)=>{
                            return !/^[A-Z]{4,10}$/.test(value)
                        },
                        message : "必须是大写，4-10个"
                    },
                    {
                        validate : (value)=>{
                            return !/A/.test(value)
                        },
                        message : "必须有A"
                    }
                ],
                pswCondition : [
                    {
                        validate : (value)=>{
                            return !value
                        },
                        message : "写点啥吧"
                    },
                    {
                        validate : (value)=>{
                            return value.length < 4 || value.length > 12
                        },
                        message : "长度错误"
                    }
                ]
            }
        },
        methods : {
            login(){
                let a = this.$refs.loginForm.validateAll();
                
            },
            regin(){
                this.$router.push("/regin")
            }
        }
    }
</script>

<style lang="less">
    .login{
        height: 100%;
        overflow: hidden;
        .login-paper{
            width: 400px;
            height: 300px;
        }
        .login-button-group{
            width: 265px;
        }
    }
</style>