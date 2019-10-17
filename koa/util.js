const config = require("./config.json");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.err = function(){
    throw new Error("throw a mistake");
}

exports.createJwt = function(opts){
    return jwt.sign(opts,config.jwtSecret)
}

exports.createHMAC = function(str){
    return crypto.createHmac("sha256",config.salt).update(str).digest("hex");
}