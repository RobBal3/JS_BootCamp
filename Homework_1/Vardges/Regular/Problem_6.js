// 6) In this JavaScript array exercise, the supplied array may contain duplicate values. Write a function
// *    to return only unique values — values that only occur exactly one time within the provided array.
// *    [1, 1, 2, 3, 3, 4, 4, 5] -> [2, 5];

function findUnique(arr) {
  let obj = {};
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }

  let objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    if (obj[objKeys[i]] === 1) {
      store.push(objKeys[i]);
    }
  }
  return store;
}

console.log(findUnique([1, 1, 3, 4, 4, 5, 6, 7]));
