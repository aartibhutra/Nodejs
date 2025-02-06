const http = require('http');
// const fs = require('fs');// we don't need these 
// const url = require('url');// we don't need these 
const express = require("express");

// create an app
const app = express();// here app is initialize
// here app basically a handler function (myHandler)

app.get("/",(req,res) =>{
    return res.send("Hello From Home Page");
});

app.get("/about",(req,res)=>{
    return res.send("Hello From about Page");
});


// create a handler function
//(req,res)=>{} this is responsible for process the incoming request
// function myHandler(req,res){// we don't these either
//     if(req.url==="/favicon.ico") return res.end();
//     // console.log("New Req Rec");
//     // console.log(req);
//     // res.end("Hello From Server Again")
//     const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
//     const myurl = url.parse(req.url,true); 
//     // const myurl = url.parse(req.url);
//     // console.log(myurl);
    
//     fs.appendFile("log.txt",log,(err,data)=>{
//         // res.end(" hello form server Again");
//         // Multi-route
//         // switch(req.url)
//         switch(myurl.pathname){
//             // / is denote to the home page 
//             case "/":
//                 if(req.method==='GET') res.end("Home Page");
//                 break;
//             case "/about":
//                 const username = myurl.query.myname;
//                 res.end(`Hello ${username} This is About Page`);
//                 // res.end("I am Aarti Bhutra");
//                 break;
//             case "/search":
//                 const search = myurl.query.search_query;
//                 res.end("here are your results for "+ search);
//                 break;
//             case "/Signup":
//                 if(req.method==='GET') res.end('This is a SignUp Form');
//                 else if(req.method==='POST'){
//                     //db query
//                     res.end("Success");
//                 }
//                 break;

//             default:
//                 res.end("404 Not Found");

//         }
//     });
// };
// const myServer = http.createServer(myHandler);
const myServer = http.createServer(app);// here automatically handlers are registers 
myServer.listen(8001,() => console.log("Server started")
);