const datas=require("../model/model");
const{hashGenerate}=require("./hash");
const{hashValiate}=require("./hash");


exports.create=async(req,res)=>{
    const hashPassword=await hashGenerate(req.body.password);
    const check=new datas({
        name:req.body.name,
        password:hashPassword
    });
    check.save().then(save=>{
        console.log(save)
        res.redirect("/form");
    }
    )
}




exports.find=(req,res)=>{
    datas.find().then(get=>{
        res.send(get)}).catch(err=>{
            
    res.status(500).send({message:err.messsage ||"Error Occurred while retriving user information"})
    })
}

