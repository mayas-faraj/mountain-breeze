//import modules
const express=require("express");
const db=require("db");

//create app
const app=express();

app.get("/", (req, res)=>res.status(200).json({"message": "connection to server success"}));

//setting
app.get("/setting/", (req, res)=>res.status(200).json(db.findSetting(req.body.name)));

//start app
app.listen(3000, ()=>console.log("server started"));
