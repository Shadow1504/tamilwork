const mongoose=require("mongoose");
const get=mongoose.Schema({
    Date:{
        type:String,
        require:true
    },
    Breakfast:{
        type:String,
        require:true
    },
    Brunch:{
        type:String,
        rquire:true
    },
    Lunch:{
        type:String,
        rquire:true
    },
   Snacks:{
        type:String,
        require:true
    },
   Dinner:{
        type:String,
        require:true
    }
})
const save=mongoose.model("about",get);
module.exports=save;
