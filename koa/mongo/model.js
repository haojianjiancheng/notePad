const { model } = require("mongoose");
const schema = require("./schema");

module.exports = {
    baseInf : model("baseInf",schema.baseInf),
    article : model("article",schema.article),
    comment : model("comment",schema.comment)
}