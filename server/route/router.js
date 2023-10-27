const express = require('express');
const route = express.Router(); 

const server=require("../services/service");
const controller=require("../controller/controller");
const about=require("../controller/about");


route.get("/",server.ind);
route.get("/form",server.form);
route.get("/page",server.page);
route.get("/id",server.id);

route.post("/api/pass",controller.create);
route.get("/api/pass",controller.find);

route.post("/api/page",about.create);
route.get("/api/page",about.find);
route.get("api/page/:id",about.id)

module.exports=route;
