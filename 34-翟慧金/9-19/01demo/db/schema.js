let mongoose = require("mongoose");
let sh = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
        min: 18,
        max: 100
    },
    sex: {
        type: String,
        enum: ["男", "女", "未知"]
    }
})

//
let model = mongoose.model("user", sh, "user")
module.exports = model