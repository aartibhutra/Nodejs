// file handling:
                // basically means you perform operation on files like read the files , create a file etc
                // on working with files we want a fs stands for file system(module or package)
                // fs is a build-in in the node 
                // you use fs to interact with file system

const fs = require("fs");
// create a file :
fs.writeFileSync('./test.txt','Hey There');