// 9) The supplied array will contain both numeric and non-numeric characters.
// *    Return a new array where all numeric values are positioned at the beginning of the array,
// *    ["b", 6, "a", "q", 7, 2] -> [2, 6, 7, "a", "b", "q"]

function orderArr(arr) {
  let obj = {};
  let orderedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    obj[item] = 1;
  }

  return Object.keys(obj);
}

console.log(orderArr(["b", 6, "a", "q", 7, 2]));
