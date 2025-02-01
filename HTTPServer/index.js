const http = require('http');

// this create a web server for us 
// you need handler function to handle the incoming request 
const myServer = http.createServer((req,res)=>{
    // res is the response object that we can use to send data back to the client
    console.log("New Req Rec.");
    res.end("Hello From Server")
    
});//(req,res)=>{} this is responsible for process the incoming request

// we need port number to run the server 
// on the port number we have to listen our server
// if we have same server then we can't run server on the same port 
// one server have one port 
myServer.listen(8000,() => console.log("Server started")
);