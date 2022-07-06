// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;

function thirdMax(arr) {
  let obj = arr.reduce((prev, cur) => {
    prev[cur] ? prev[cur]++ : (prev[cur] = 1);
    return prev;
  }, {});

  let arr1 = Object.entries(obj);
  let sortedArr = arr1.sort((a, b) => b[1] - a[1]); // Can be solved also using 3 loops
  return sortedArr[2][0];
}

console.log(
  thirdMax([
    1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 5, 5, 5, 6, 7, 8, 8, 8, 8, 8,
  ])
);
