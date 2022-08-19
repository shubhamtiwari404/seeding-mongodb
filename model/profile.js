const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
       type:String,
       required:true 
    },
    type:{
        type:String,
        required:true
    }
})

const product = mongoose.model('seeding', productSchema);
module.exports = product