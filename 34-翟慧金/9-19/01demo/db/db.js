let mongoose = require("mongoose");
let connect = mongoose.connect("mongodb://localhost:27017/database_zhj");
connent = connect.then((scrr) => {
    console.log("数据库连接成功");
}, (err) => {
    console.log("连接失败")
})