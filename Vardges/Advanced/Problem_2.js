function foo(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    obj[item] ? obj[item]++ : (obj[item] = item);
  }

  objValues = Object.values(obj);

  let min = +objValues[0] + objValues[1] + objValues[2];
  let max = objValues[1] + objValues[2] + objValues[3];
  return { min: min, max: max };
}

console.log(foo([3, 2, 1, 4]));
