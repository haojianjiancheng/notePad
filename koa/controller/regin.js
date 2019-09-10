const { baseInf } = require("../mongo");
const { err } = require("../util");

module.exports = async ctx => {
    console.log("you have a new request");
    const { request,response } = ctx;
    if(request.body){
        try {
            let { username = err(),phone = err(),email = err(),password = err(),avatar = "33" } = request.body;
            let isSame = await baseInf.findOne({$or : [{username},{phone},{email}]});
            if(isSame === null){
                let result = await baseInf.create({username,phone,email,password,avatar});
                response.body = {
                    code : 200,
                    message : "用户注册成功"
                }
                console.log("user registration successful : ",result);
                return
            }else{
                response.body = {
                    code : 404,
                    message : "用户已经注册"
                }
                console.log("user have registered : ",isSame);
                return
            }
        } catch (error) {
            response.body = {
                code : 404,
                message : "请求错误"
            }
            console.log("request was aborted");
            return
        }
    }
}