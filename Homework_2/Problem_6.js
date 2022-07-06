// 6)  If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// !arr.ength ||
function sumPositive(arr) {
  if (arr.length === 0 || arr.every((item) => item < 0)) {
    return 0;
  }

  return arr
    .filter((item) => item > 0)
    .reduce((prev, cur) => {
      return prev + cur;
    });
}

console.log(sumPositive([1, -4, 12, 0, -3, 29, -150]));
