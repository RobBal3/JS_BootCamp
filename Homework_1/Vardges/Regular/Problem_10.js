// 10) From the first array, construct a new array based on the indexes supplied.
// *     ["mon", "tue", "wed", "thur", "fri"] -> [1, 3, 4];

function indexArr(arr, arrIndex) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arrIndex.length; j++) {
      if ((i = arrIndex[j])) {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

console.log(indexArr(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4]));
