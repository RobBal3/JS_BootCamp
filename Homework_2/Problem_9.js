// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

function majority(arr) {
  let obj = {};
  arr.map((el) => (obj[el] ? (obj[el] += 1) : (obj[el] = 1)));
  for (key in obj) {
    if (obj[key] > arr.length / 2) return key;
  }

  console.log(obj);
}
console.log(majority([2, 2, 1, 1, 1, 2, 2]));
