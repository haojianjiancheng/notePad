const { Schema } = require("mongoose");
const baseInf = new Schema({
    username : {type : String,required : true},
    password : {type : String,required : true},
    avatar : {type : String,required : true},
    email : {type : String,required : true},
    phone : {type : Number,required : true},
    articleId : {type : Schema.Types.ObjectId,ref : "article"}
})

const article = new Schema({
    title : {type : String,required : true},
    createTime : {type : Date,default : Date.now()},
    updateTime : {type : Date,default : Date.now()},
    likeNumber : {type : Number,default : 0,min : 0},
    dislikeNumber : {type : Number,default : 0,min : 0},
    readNumber : {type : Number,default : 0,min : 0},
    wordNumber : {type : Number,default : 0,min : 0},
    commentId : {type : Schema.Types.ObjectId,ref : "comment"}
})

const comment = new Schema({
    themeName : {type : String,required : true},
    id : {type : Schema.Types.ObjectId,ref : "article"},
    comment : [
        {
            content : {type : String, required : true}, 
            from : {type : Schema.Types.ObjectId,ref : "baseInf"},
            to : {type : Schema.Types.ObjectId,ref : "baseInf"},
            likeNumber : {type : Number,default : 0,min : 0},
            dislikeNumber : {type : Number,default : 0,min : 0},
            createTime : {type : Date,default : Date.now()},
            updateTime : {type : Date,default : Date.now()},
        }
    ]
})

module.exports = {
    baseInf,
    article,
    comment
}