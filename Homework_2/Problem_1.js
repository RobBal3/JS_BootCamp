// 1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
  return arr.map((item) => {
    return item * 2;
  });
}

console.log(doubleNumbers([2, 5, 100]));
