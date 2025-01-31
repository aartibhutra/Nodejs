// here anything you make like function and objects you have to export them , then they available in other modules (files)


// this function is a private function foe these module if we want to use this function then we have to export(public this function) it.
// function add(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }



// module is an object use the method exports to export the function
// module.exports = "Aarti";

// it is equal to the add function
// module.exports = add;
// module.exports = sub;// this is wrong, because it override the value (add function)

// so avoid override function we use the javascript object to return multiple things so we call it as single export(default export)
// module.exports = {
//     add,// you also rename like addfn : add
//     sub,// here we rename sub function as sunfn : sun
// };


// another way to export like use the export object 
// multiple exports 

// here use the anonymous function and add and sub is a property that we give and we give anything instead of add and sub also 
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;

