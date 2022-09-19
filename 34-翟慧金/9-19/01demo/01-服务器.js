let express = require("express");
let app = express();
//导入数据库路由
require("./db/db");
require("./db/schema")
//解决跨域问题
let cors = require('cors')
app.use(cors())
//解析post请求的参数
app.use(express.urlencoded({extended: false}));
app.use(express.json())
//设置二级路由
app.use("/user", require("./rous/divide"))


app.listen(3000, () => {
    console.log("服务器启动成功: http://localhost:3000");
})