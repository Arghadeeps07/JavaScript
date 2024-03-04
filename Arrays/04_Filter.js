const arr = [1, 2, 3, 4, 5]
const newNum = arr.filter( (num) => (num > 2))
const num = arr.filter( (num) => num > 2)
const num1 = arr.filter( (num) => {
    num > 2 
}) // this function will not retuen any value as we are using the scope we have explicitely use the return keyword
const num2 = arr.filter( (num) => {
    return num > 2 
})// now it is ok
// as for each does not return any value this will be giving underdefined
// but we can use the foreach() like the filter in a different way 
const newNums = []
arr.forEach( (num) => {
    if(num > 2){
        newNums.push(num);
    }
})
console.log(newNums);