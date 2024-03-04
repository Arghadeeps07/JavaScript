const arr = [1, 2, 3, 4, 5]
// same like the filter keyword but filter is basically a true or false game
const a = arr.map( (num) => (num*10))
console.log(a);
// chaining a map
const b = arr.map( (num) => num*10).map( (h) => h + 1)
console.log(b);