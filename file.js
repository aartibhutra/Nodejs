// file handling:
                // basically means you perform operation on files like read the files , create a file etc
                // on working with files we want a fs stands for file system(module or package)
                // fs is a build-in in the node 
                // you use fs to interact with file system

const fs = require("fs");
// create a file :
// sync.. call
// fs.writeFileSync('./test.txt','Hey There');

// Async:
// fs.writeFile('./test.txt','Hey There Async',(err)=>{});


// read file :
//Sync: when we use this then the sync give result in the form of variable 
// sync return the result 
// const result = fs.readFileSync('./contact.txt',"utf-8");
// console.log(result);

//Async: but here we use the callback function bcz Async doesn't give the value to the variable 
// basically Async return nothing 
// fs.readFile('./contact.txt',"utf-8",(err,result)=>{
//     if(err){
//         console.log("Error");
        
//     }else{
//         console.log(result);
//     }
// });

//append file: not override the file 

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt", `hello\n`);
// fs.appendFileSync("./test.txt", `${Date.now()} hello\n`);

// copy file :
// fs.cpSync("./test.txt","./copy.txt");

// delete file :
// fs.unlinkSync("./copy.txt");

// state of the file :
console.log( fs.statSync("./test.txt"));


