const svgCaptcha = require("svg-captcha");

module.exports = async(ctx,next)=>{
    console.log("this is captcha");
    const {request,response} = ctx;
    let captcha = svgCaptcha.create({
        size : 4,
        fontSize : 50,
        width : 100,
        height : 40,
        background : '#cc9966',
    })
    console.log(captcha.text);
    response.type = "html";
    response.body = captcha.data;
}