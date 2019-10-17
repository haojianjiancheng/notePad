const config = require("./config.json");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const jwt = require("koa-jwt");
const koa = require("koa");
const app = new koa();
let router = require("./router");

app.use(cors({
    origin : "http://localhost:8080",
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET','POST','DELETE','PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(jwt({
    secret : config.jwtSecret
}).unless({
    path : [/^\/regin/,/^\/login/]
}))
app.use(function(ctx, next){
    return next().catch((err) => {
      if (401 == err.status) {
        ctx.status = 401;
        ctx.body = 'Protected resource, use Authorization header to get access\n';
      } else {
        throw err;
      }
    });
  });
app.use(bodyParser());
app.use(router.routes());

app.on("error",err=>{
    console.log("服务端错误：",err);
})

app.listen(config.PORT,function(){
    console.log("koa开始运行，端口：",config.PORT)
})