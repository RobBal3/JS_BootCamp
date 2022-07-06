//Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.

function countOccurrence(arr) {
  let obj = {};

  //   Alternative can be used arr.join(",").split(",")
  let shallowArr = arr.reduce((prev, cur) => {
    return prev.concat(cur);
  }, []);

  shallowArr.forEach((item) => {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  });

  return obj;
}

const data = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

console.log(countOccurrence(data));
