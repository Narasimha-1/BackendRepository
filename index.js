

//import express
let express = require("express");

// import bodyparser
let bodyparser = require("body-parser");

//import cros if we get cros error
// let cors = require("cors")

//import db_con.js file
let db_con = require("./db_con");


//create object for express
let app= express();
// app.use(cors()); //Cross-Origin Resource Sharing

//use bodyparser with app
app.use(bodyparser.urlencoded({ extended: false }));

//add port to express
app.listen(4003);




//create api for saveuser data
app.post("/saveUser", async (req, res) => {
    let data = await db_con.saveUserData(req.body.userName, req.body.phoneNumber, req.body.email, req.body.country, req.body.password);
    res.write(JSON.stringify(data));
    //  if same page should be redirect after filling the form, we should give ui API and remove the JSON.stringify
    //  res.redirect("");
    res.end();
});


// create api function for register data
app.get("/getUser", async (req, res) => {
    let data = await db_con.getUserData();
    res.write(JSON.stringify(data));
    res.end();
});


//create api for updateuser data
app.post("/updateUser",async(req,res)=>{
    let data = await db_con.updateUserData(req.body.userName,req.body.phoneNumber,req.body.email,req.body.country,req.body.id);
    res.write(JSON.stringify(data));
    res.end();

});

//create api for delete data
 app.post("/deleteUser",async(req,res)=>{
    let data = await db_con.deleteUserData(req.body.id);
    res.write(JSON.stringify(data));
    res.end();
 })



 //create api for saveDairy
 app.post("/saveDairy",async(req, res)=>{
    let data = await db_con.saveDairyData(req.body.title, req.body.description, req.body.date, req.body.location);
    res.write(JSON.stringify(data));
    res.end();
 }
 )
 //create api for get dairy
 app.get("/getDairy",async(req,res)=>{
    let data = await db_con.getDairyData();
    res.write(JSON.stringify(data));
    res.end();
 })

 //create api for update Dairy
 app.post("/updateDairy",async(req,res)=>{
    let data = await db_con.updateDairyData(req.body.title,req.body.description,req.body.date,req.body.location,req.body.diary_id);
    res.write(JSON.stringify(data));
    res.end();
 })

 //create api for delete Dairy
 app.post("/deleteDairy",async(req,res)=>{
    let data = await db_con.deleteDairyData(req.body.diary_id);
    res.write(JSON.stringify(data));
    res.end();
 })