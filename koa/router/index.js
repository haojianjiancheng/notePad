const Router = require("koa-router");
const router = new Router();
const { regin,login,captcha,article } = require("../controller");

router.post("/regin",regin);
router.post("/login",login);

router.post("/createArticle",article.createArticle);
router.post("/deleteArticle",article.deleteArticle);
router.post("/updateArticle",article.updateArticle);

router.get("/readArticle",article.readArticle);
router.get("/likeArticle",article.likeArticle);
router.get("/dislikeArticle",article.dislikeArticle);
router.get("/captcha",captcha);

module.exports = router;