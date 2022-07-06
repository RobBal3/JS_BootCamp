// 7) Your function must accept 2 arrays, then return the common words from each.
// *    arr1 ["dog", "cat", "parrot"] arr2 ["lizard", "rat", "cat"] -> ["cat"]

function commonItems(arr1, arr2) {
  let chunk = [];
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i];

    obj[item] = 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];

    if (obj[item]) {
      chunk.push(item);
    }
  }

  return chunk;
}

console.log(commonItems(["dog", "cat", "parrot"], ["lizard", "rat", "cat"]));
