// Simply reverse the string without using reverse().
//  'abcd' -> 'dcba';

// Using a new array

// function reverse(arr) {
//   let reverseArr = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   return reverseArr;
// }

// Without new array
function reverse(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }

  return arr;
}

console.log(reverse([1, 2, 3, 4, 7, 4, 3, 0, 8]));
