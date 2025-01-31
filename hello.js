// console.log("hello");

// require use to import module(file use ./ means current directory) or package just like a import in the java 

const math = require('./Math');
// in above we destructured the math like {add, sub} and direct use the add and sub like add(2,4)
console.log("Math Value is",math);

// pass two value to call the add function
// console.log("Math Value is",math(4,5)); 

// use the javascript object function with the help of the .
console.log(math.add(2,4));

