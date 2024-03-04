function addTwoNumbers(a, b){
    return a+b
}

function addTwoNumbers(...b) // rest operator like var args in java
{
    return b
}
console.log(addTwoNumbers(1,3,4,5,7));