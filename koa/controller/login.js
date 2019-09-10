const { baseInf } = require("../mongo");
const { err } = require("../util");

module.exports = async ctx => {
    console.log("you have a new request for login");
    const { request,response } = ctx;
    if(request.body){
        try {
            let { username = err(),password = err() } = request.body;
            let result;
            console.log({email:username})
            if(typeof username === "number"){
                result = await baseInf.findOne({"phone" : username,"password" : password});
            }else{
                result = await baseInf.findOne({$or : [{username},{email:username}],"password" : password});
            }
            if(result !== "null"){
                response.body = {
                    code : 200,
                    message : "登录成功",
                    username : result.username,
                    password : result.password
                }
                console.log("Successful login :",result);
                return
            }else{
                response.body = {
                    code : 404,
                    message : "账号或密码错误，请重新登录！"
                }
                return
            }
        } catch (error) {
            response.body = {
                code : 404,
                message : "登录失败"
            }   
            return
        }
    }
}