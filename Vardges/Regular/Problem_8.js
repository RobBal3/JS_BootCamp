// 8) Write a function to accept two arrays. Does the first array contain all elements represented in the second array?
// *    arr1 ["monday", "tuesday"], arr2 ["tuesday"] -> false;

function sameElement(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i];

    obj[item] = 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];

    if (!obj[item]) {
      return false;
    }
  }
  return true;
}

console.log(sameElement(["monday", "tuesday"], ["monday"]));
