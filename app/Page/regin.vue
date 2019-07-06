<template>
    <div class="regin flex-row-center">
        <paper class="regin-paper flex-col-center">
            <common-form :model="reginDate" ref="reginForm">
                <common-input label="用户名：" prop="username" v-model="reginDate.username" :condition="validate.username"></common-input>
                <common-input label="密码：" prop="password" v-model="reginDate.password" :condition="validate.password"></common-input>
                <common-input label="重复密码：" prop="password2" v-model="reginDate.password2" :condition="validate.password2"></common-input>
                <common-input label="手机号：" prop="phoneNumber" v-model="reginDate.phoneNumber" :condition="validate.phoneNumber"></common-input>
                <common-input label="邮箱：" prop="email" v-model="reginDate.email" :condition="validate.email"></common-input>
            </common-form>
            <common-flex-box justify="center">
                <common-button @click="reginHandle" large>注册</common-button>
            </common-flex-box>
        </paper>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                reginDate : {
                    username : "",
                    password : "",
                    password2 : "",
                    phoneNumber : "",
                    email : "",
                    isAgree : false
                },
                validate : {
                    username : [
                        {
                            validate : (value) => !value,
                            message : "用户名不能为空"
                        }
                    ],
                    password : [
                        {
                            validate : (value) => !value,
                            message : "密码不能为空"
                        }
                    ],
                    password2 : [
                        {
                            validate : (value) => !value,
                            message : "请再次输入密码"
                        }
                    ],
                    phoneNumber : [
                        {
                            validate : (value) => !value,
                            message : "手机号不能为空"
                        }
                    ],
                    email : [
                        {
                            validate : (value) => !value,
                            message : "邮箱不能为空"
                        }
                    ]
                }
            }
        },
        methods : {
            reginHandle(){
                let a = this.$refs.reginForm.validateAll();
                console.log(a);
                
            }
        }
    }
</script>

<style lang="less">
    .regin{
        height: 100%;
        overflow: hidden;
        .regin-paper{
            width: 400px;
            height: 450px;
        }
    }
</style>