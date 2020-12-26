const mongoose = require("mongoose");

const schema = mongoose.Schema;

const data = new schema({
    title:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Data",data);