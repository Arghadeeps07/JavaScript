const obj = {
    "C++" : ".cpp",
    "JAVA" : ".java",
    "PYTHON" : ".py"
}
for (const key in obj) {
    console.log(key);
}
for (const key in obj) {
    console.log(obj[key]);
}
for (const key in obj) {
    console.log(`${key} with extension ${obj[key]}`);
}