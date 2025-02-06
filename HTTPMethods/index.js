const http = require('http');
const fs = require('fs');
const url = require('url');
//(req,res)=>{} this is responsible for process the incoming request
const myServer = http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end();
    // console.log("New Req Rec");
    // console.log(req);
    // res.end("Hello From Server Again")
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    const myurl = url.parse(req.url,true); 
    // const myurl = url.parse(req.url);
    // console.log(myurl);
    
    fs.appendFile("log.txt",log,(err,data)=>{
        // res.end(" hello form server Again");
        // Multi-route
        // switch(req.url)
        switch(myurl.pathname){
            // / is denote to the home page 
            case "/":
                if(req.method==='GET') res.end("Home Page");
                break;
            case "/about":
                const username = myurl.query.myname;
                res.end(`Hello ${username} This is About Page`);
                // res.end("I am Aarti Bhutra");
                break;
            case "/search":
                const search = myurl.query.search_query;
                res.end("here are your results for "+ search);
                break;
            case "/Signup":
                if(req.method==='GET') res.end('This is a SignUp Form');
                else if(req.method==='POST'){
                    //db query
                    res.end("Success");
                }
                break;

            default:
                res.end("404 Not Found");

        }
    });
    
});
myServer.listen(8001,() => console.log("Server started")
);