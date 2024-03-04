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
const {name : myname} = user;
console.log(myname);