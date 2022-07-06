// The supplied array will only contain numeric values. Your function should output two arrays:
// *     one containing odd numbers, the other containing even numbers.

function oddEven(arr) {
  let oddArr = [];
  let evenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddArr.push(arr[i]);
    } else [evenArr.push(arr[i])];
  }
  return [oddArr, evenArr];
}

console.log(oddEven([1, 2, 3, 4, 5, 6, 7, 8]));
