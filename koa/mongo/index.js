const mongoose = require("mongoose");
const model = require("./model");
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true});
const db = mongoose.connection;

db.on("error",function(){
    console.log("Database Error");
    db.close();
})
db.on("connected",()=>{
    console.log("Successful Database Connection");
})
db.on("disconnected",()=>{
    console.log("Successful Database Disconnected");
})

module.exports = model;