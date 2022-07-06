// 2) Make an object assign 3 different keys to it by 3 different ways that we have learned;

let obj = {};

// Option 1
obj.key1 = 5;

// Option 2
obj["key2"] = 6;

// Option 3
Object.assign(obj, { key3: 7 });

console.log(obj);
