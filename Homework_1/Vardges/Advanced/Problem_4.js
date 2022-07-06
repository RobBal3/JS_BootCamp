function foo(arr) {
  let sum = 0;
  let increment = Math.sqrt(arr.length) + 1;

  for (let i = 0; i < arr.length; i += increment) {
    sum += arr[i];
  }
  return sum;
}

console.log(foo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 45, 45, 16, 15, 16]));
console.log(foo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
