let express = require("express");
let router = express.Router();
let sh = require("../db/schema");

//二级路由
//添加
router.post("/add", (req, res) => {
    let body = req.body;
    console.log(body);
    sh.create([{
        name: body.name,
        age: body.age,
        sex: body.sex
    }]).then((rel) => {
        if (rel) {
            res.send("添加成功");
            return;
        }
        res.send("添加失败")

    })
})
//查询用户
router.get("/get/:name", (req, res) => {
    // let name = req.params.name;
    sh.find().then((rel) => {
        // res.send("res:" + rel)
        res.json(JSON.parse(JSON.stringify(rel)))
    })
})
//删除用户
router.get("/delete/:id", (req, res) => {
    sh.deleteOne({name: req.params.id}).then((rel) => {
        // console.log(res)
        if (rel.deletedCount > 0) {
            res.send("删除成功")
        } else {
            res.send("删除失败,数据不存在")
        }
    })
})
//更新用户

router.post("/update", (req, res) => {
    //获取请求体的参数
    let body = req.body;
    console.log("之前的数据:", body)
//        查询数据库中是否存在
    sh.findOne({_id: body.id}).then((rel) => {
        delete body.id
        sh.updateOne(body).then((rel) => {
            console.log(rel)
            if (rel.modifiedCount > 0) {
                res.send("修改成功")
            }
        }, err => {
            res.send("修改失败")
        })
    }, err => {
        // console.log(err)
        res.send("非法修改")
    })
})

//暴露路由
module.exports = router;
