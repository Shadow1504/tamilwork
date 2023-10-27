const axios = require('axios');




exports.ind=(req,res)=>{
  
    res.render('index');
}

exports.form=(req,res)=>{
    axios.get("http://localhost:10000/api/pass")
    .then(function(response){
        console.log(response);
        res.render("form",{users : response.data})
    })
    .catch(err=>{res.send(err);})
    
}

exports.page=(req,res)=>{
    axios.get("http://localhost:10000/api/page")
    .then(function(response){
        console.log(res);
        res.render("page",{users : response.data})
    })
    .catch(err=>{res.send(err);})
}

exports.id=(req,res)=>{
    axios.get('http://localhost:10000/page/64c77cbc44032f14f027a6a1')
    
    .then(function(response){
        console.log(response);
        res.render('id', { result : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}
