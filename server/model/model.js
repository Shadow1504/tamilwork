const mongoose=require("mongoose");
const get=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const save=mongoose.model("type",get);
module.exports=save;
