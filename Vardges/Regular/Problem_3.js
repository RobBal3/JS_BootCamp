// 3) Find the odd one out in the provided array. All array elements are equal, except one. Your function must return this odd one out. -> *    ["a", "a", "b", "a"] -> // 'b';

function findOdd(arr) {
  let obj = {};

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
      return objKeys[i];
    }
  }
}

console.log(findOdd(["c", "a", "a", "a"]));
