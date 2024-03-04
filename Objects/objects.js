// singleton

// object literals
// using symbols
const mySym = Symbol("key 1")
const user = {
    name : "Arghadeep",
    "Full name" : "Arghadeep Sarkar",
    [mySym] : "myKey",
    age : 18,
    email : "argha.com",
    greet1 : function(){
        console.log("Hii");
    }
}
// console.log(user.name);
// console.log(user["name"]);
// console.log(user["Full name"]);
// console.log(user[mySym]);

// Object.freeze(user)
// now the values cant be changed
user.greet = function(){
    console.log("Hello!!");
}
user.greet1();
user.greet();

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty('name'));