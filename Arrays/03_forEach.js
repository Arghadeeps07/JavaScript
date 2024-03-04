const coding = ["js", "java", "python", "c++"];
coding.forEach(function(val){
    console.log(val);
})// as it is a call back function it does not have name

coding.forEach( (val) => {
    console.log(val);
} )


const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"

    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    }
]
myCoding.forEach( (item) => {
    console.log(`${item.languageName} the file name for this language is ${item.languageFileName} `);
})

const a = myCoding.forEach( (item) => {
    console.log(`${item.languageName} the file name for this language is ${item.languageFileName} `);
})

console.log(a);// as for each does not return any value this will be giving underdefined
// but we can use the foreach() like the filter in a different way 
