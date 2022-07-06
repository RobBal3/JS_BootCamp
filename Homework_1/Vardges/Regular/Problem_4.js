// 4) Deduce the smallest and the largest number from the supplied numeric array. Return an array containing these numbers, smallest number first.
// [14, 28, 3, 8, 2] -> [2, 28]

function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    
    if (min > current) {
      min = current;
    }

    if (max < current) {
      max = current;
    }
  }

  return [min, max];
}

console.log(findMinMax([14, 28, 3, 8, 2]));
