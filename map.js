const map = new Map()
map.set('IN', 'India');
map.set('CA', 'Canada');
map.set('FR', 'France');

console.log(map);

for (const i of map) {
    console.log(i);
}

for (const [key, value] of map) {
    console.log(key, ":-", value);
}


