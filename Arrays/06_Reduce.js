const arr = [1, 2, 3, 4, 5]
const a = arr.reduce( (acc, val) => (acc+val), 0)// 0 is the value of the starting index
console.log(a);
const b = arr.reduce( function (acc, val){
    console.log(`${acc} is the value of the accumulator and ${val} is the value`);
    return acc+val;
}, 0)// 0 is the value of the starting index
console.log(b);