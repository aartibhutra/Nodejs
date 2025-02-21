const express = require('express');
const fs = require('fs');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8001;

//MiddleWare - plugin 
app.use(express.urlencoded({extended: false}));

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
    return res.json(users);
});

// "/api/users/:id" we merge get , patch and delete bcz they have same route 

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

// app.get("/api/users/:id", (req,res) => {
//     //get the id 
//     const id =Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });


// in the body of postman we send our data 
app.post("/api/users" , (req,res) =>{
    //TODO: create new user

    const body = req.body;// by default express do store the data to the body that we send through frontend  
    // use plugin :
    console.log("Body",body);
    // push in the data 
    users.push({...body , id: users.length+1});// then we have to write the data in the original file with the help of the fs module
    fs.writeFile('./Projects/MOCK_DATA.json',JSON.stringify(users),(err,data) => {
        console.log(err)
        return res.json({ status : "pending"});
    }); 
});

// app.patch("/api/users/:id" , (req,res) =>{
//     //TODO: Edit the user with ID  
//     return res.json({ status : "pending"});
// });

// app.delete("/api/users/:id" , (req,res) =>{
//     //TODO: delete the user with ID  
//     return res.json({ status : "pending"});
// });

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));