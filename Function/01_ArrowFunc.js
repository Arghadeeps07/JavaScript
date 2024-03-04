
const add = function(num1, num2){
    return num1+num2;
}
console.log(add(2, 4));

// Arrow function
const addVal = (a, b) =>{
    return a+b;
}
console.log(addVal(2, 4));

// implicit return 
const addition = (a, b) => (a+b)
console.log(addition(4, 6));

// IIFE Immediately Invoked Function Expression

// ()()

(function addTwoNum(){
    console.log("a+b");
})();
// the semi colon is very much important
(() => {console.log("a + b")})()