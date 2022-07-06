function lookUp(lookup, strings) {
  let obj = {};
  let arr = [];

  for (let i = 0; i < strings.length; i++) {
    let item = strings[i];
    obj[item] ? obj[item]++ : (obj[item] = 1);
  }

  for (let i = 0; i < lookup.length; i++) {
    let item = lookup[i];
    console.log(item);
    if (obj[item]) {
      arr.push(obj[item]);
    } else {
      arr.push(0);
    }
  }

  return arr;
}

const lookup = ["i", "love", "sadakhlo", "esminich"];
const strings = ["i", "i", "sadakhlo", "i"];

console.log(lookUp(lookup, strings));
