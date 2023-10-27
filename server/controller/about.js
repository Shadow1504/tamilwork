const datas=require("../model/get");

exports.create=(req,res)=>{
    const check=new datas({
        Date:req.body.Date,
        Breakfast:req.body.Breakfast,
        Brunch:req.body.Brunch,
        Lunch:req.body.Lunch,
        Snacks:req.body.Snacks,
        Dinner:req.body.Dinner
    });
    check.save().then(save=>{
        console.log(save)
        res.redirect("/page");
    }
    )
}
exports.find=(req,res)=>{
    datas.find().then(get=>{
        res.send(get)}).catch(err=>{
            
    res.status(500).send({message:err.messsage ||"Error Occurred while retriving user information"})
    })
}

exports.id=(req,res)=>{
    datas.findById(req.params.id).then((blog) => {
        if(!blog){
            return res.status(404).send();

        }
        res.send(blog);
    }).catch((error)=>{
        res.status(500).send(error);
    })
}