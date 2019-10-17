const { article,baseInf } = require("../mongo");

exports.createArticle = async ctx => {
    console.log("you have a new request for create an article");
    const { request,response } = ctx;
    try {
        response.body = {
            code : 200,
            message : "创建文章成功"
        }
    } catch (error) {
        response.bo = {
            code : 404,
            message : "请求服务器失败"
        }
    }
}

exports.deleteArticle = async ctx => {
    console.log("you have a new request for delete an article");
    const { request,response } = ctx;
    console.log(ctx.state.user)
    try {
        
    } catch (error) {
        
    }
}

exports.updateArticle = async ctx => {
    console.log("you have a new request for update an article");
    const { request,response } = ctx;
    try {
        
    } catch (error) {
        
    }
}

exports.likeArticle = async ctx => {
    console.log("you have a new request for likeArticle");
    const { request,response } = ctx;
    try {
        
    } catch (error) {
        
    }
}

exports.dislikeArticle = async ctx => {
    console.log("you have a new request for dislikeArticle");
    const { request,response } = ctx;
    try {
        
    } catch (error) {
        
    }
}

exports.readArticle = async ctx => {
    console.log("you have a new request for readArticle");
    const { request,response } = ctx;
    try {
        
    } catch (error) {
        
    }
}