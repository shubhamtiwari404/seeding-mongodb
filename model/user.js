const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     age:{
        type:Number,
        required:true
     }
});
const user = mongoose.model('products', userSchema);
module.exports = user