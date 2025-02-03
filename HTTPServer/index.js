const http = require('http');
const fs = require('fs');

// this create a web server for us 
// you need handler function to handle the incoming request 
//(req,res)=>{} this is responsible for process the incoming request
const myServer = http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end();
    // res is the response object that we can use to send data back to the client
    // console.log("New Req Rec");
    // console.log(req);// all the data that the client sent to the server is stored in the req object
    // res.end("Hello From Server Again")
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        // res.end(" hello form server Again");
        // Multi-route
        switch(req.url){
            // / is denote to the home page 
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("I am Aarti Bhutra");
                break;
            default:
                res.end("404 Not Found");

        }
    });
    
});

// we need port number to run the server 
// on the port number we have to listen our server
// if we have same server then we can't run server on the same port 
// one server have one port 
myServer.listen(8001,() => console.log("Server started")
);

// /about?myname=Aarti for this we use the external module or package (npmjs.com , here are all the packages that we install in the node server)