// console.log("hello");

// require use to import module(file uses  ./ means current directory) or package just like a import in the java , require function use to give the path 
// ./  means search in the current directory else it search in the node directory
// here math is a variable .

const math = require('./Math');
// in above we destructured the math like {add, sub} and direct use the add and sub like add(2,4)

console.log("Math Value is",math);

// pass two value to call the add function
// console.log("Math Value is",math(4,5)); 

// use the javascript object function with the help of the .
console.log(math.add(2,4));
console.log(math.sub(5,4));


