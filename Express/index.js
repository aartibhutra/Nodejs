 const express = require("express");
// create an app
const app = express();// here app is initialize
// here app basically a handler function (myHandler)
app.get("/",(req,res) =>{
    return res.send("Hello From Home Page");
});
app.get("/about",(req,res)=>{
    // return res.send("Hello From about Page");
    // return res.send("Hello From about Page"+"hey"+ req.query.name);
    // return res.send("Hello From about Page"+ "hey" + req.query.name + "your age is" +req.query.age);
    return res.send(`hello ${req.query.name}`);
});

app.listen(8001,()=> console.log("Server Started"));


