const Router = require("koa-router");
const router = new Router();
const controller = require("../controller");

router.post("/login",controller.login);
router.get("/captcha",controller.captcha);

module.exports = router