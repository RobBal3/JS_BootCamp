// 2) Take an array of numbers and make them string

function stringItUp(arr) {
  let str = "";
  return arr.map((item) => {
    return str + item;
  });
}

console.log(stringItUp([1, 2, 3]));
