const { baseInf } = require("../mongo");
const { err,createJwt,createHMAC } = require("../util");

module.exports = async ctx => {
    console.log("you have a new request");
    const { request,response } = ctx;
    if(request.body){
        try {
            console.log(request.body)
            let { username = err(),phoneNumber = err(),email = err(),password = err(),avatar = "33" } = request.body;
            let isSame = await baseInf.findOne({$or : [{username},{phoneNumber},{email}]});
            if(isSame === null){
                password = createHMAC(password);
                let result = await baseInf.create({username,phoneNumber,email,password,avatar});
                console.log("user registration successful : ",result);
                let jsonwebtoken = createJwt({
                    username : result.username   
                });
                console.log(jsonwebtoken)
                return response.body = {
                    code : 200,
                    message : "用户注册成功",
                    token : jsonwebtoken
                }
            }else{
                console.log("user have registered : ",isSame);
                return response.body = {
                    code : 404,
                    message : "用户已经注册"
                }
            }
        } catch (error) {
            console.log("request was aborted",error);
            return response.body = {
                code : 404,
                message : "请求错误"
            }
        }
    }
}