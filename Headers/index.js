const express = require('express');
const fs = require('fs');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8001;

//MiddleWare - plugin 
// first run these
app.use(express.urlencoded({extended: false}));

// second run these then below code run 
app.use((req,res,next) =>{
    fs.appendFile('log.txt',`\n${Date.now()} : ${req.method} : ${req.path}`,(err,data) =>{
        next();
    });
});

app.use((req,res,next) =>{
    next();
});

// HERE we define our routes
app.get("/users",(req,res) =>{
    const html = `
    <ul>
        ${users.map(user =>`<li>${user.first_name}</li>`).join("")};
    </ul>
    `;
    res.send(html);
});

//REST API:
app.get('/api/users', (req, res) => {
    // Always add X to custom header 
    res.setHeader('X-myName' ,'Aarti bhutra');// custom header
    console.log(req.headers);
    return res.json(users);
});

app.route("/api/users/:id").get((req,res) => {
    //get the id 
    const id =Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}).patch((req,res) =>{
    // edit user with id 
    return res.json({status : "Pending"});
}).delete((req,res) =>{
    // delete user with id 
    return res.json({ status : "Pending"});
});

// in the body of postman we send our data 
app.post("/api/users" , (req,res) =>{
    //TODO: create new user
    const body = req.body;  
    if(!body||!body.first_name||!body.last_name||!body.email||body.gender||!body.job_title){
        return res.status(400).json({msg:'All fields are required...'});
    };
    // use plugin :
    console.log("Body",body);
    // push in the data 
    users.push({...body , id: users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data) => {
        console.log(err)
        return res.status(201).json({ status : "success" ,id: users.length+1 });
    }); 
});
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));