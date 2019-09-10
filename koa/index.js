const config = require("./config.json");
const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new koa();
let router = require("./router");

app.use(bodyParser())
app.use(router.routes());

app.on("error",err=>{
    console.log("服务端错误：",err);
})

app.listen(config.PORT,function(){
    console.log("koa开始运行，端口：",config.PORT)
})