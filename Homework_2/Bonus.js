function orderStudents(arr) {
  let prep = [];
  let answers = [];
  let result = [];

  // collect prep & answer data into arrays
  arr.forEach((item) => {
    prep.push(item[0]);
    answers.push(item[1]);
  });

  // find first student and push to the result array
  let min = Math.min(...prep);
  let minIndex = prep.indexOf(min);
  result.push(minIndex);

  // Who comes after first student. (ascending order in object))
  let obj = answers.reduce((prev, cur, index, arr) => {
    prev[cur] = index;
    return prev;
  }, {});

  // push to result array
  for (let key in obj) {
    if (obj[key] !== minIndex) {
      result.push(obj[key]);
    }
  }

  return result;
}

let input = [
  [1, 6],
  [2, 5],
  [4, 3],
];

console.log(orderStudents(input));
