<template>
    <div class="login d-flex justify-content-center align-items-center">
        <paper class="login-paper d-flex flex-column justify-content-center align-items-center">
            <common-form ref="loginForm" :model="formDate">
                <common-input v-model="formDate.username" type="text" prop="username" label="用户名：" :condition="userCondition" @enter="enter"></common-input>
                <common-input v-model="formDate.password" type="password" prop="password" label="密码：" :condition="pswCondition" @enter="enter"></common-input>
            </common-form>
            <div class="login-button-group  d-flex justify-content-around align-items-center">
                <button class="btn btn-default" @click="login">登录</button>
                <button class="btn btn-info" @click="regin">注册</button>
            </div>
        </paper>
    </div>
</template>

<script>
    import sha256 from "js-sha256";
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
            enter(){
                this.login()
            },
            crypto(){
                return sha256(this.formDate.username);
            },
            login(){
                let result = this.$refs.loginForm.validateAll();
                if(result) {
                    console.log(this.crypto())
                    this.$router.push("/home")
                }
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