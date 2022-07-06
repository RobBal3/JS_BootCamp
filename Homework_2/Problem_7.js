// 7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
// 7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

function getMinMax(arr) {
  let min = arr[0]["age"];
  let max = arr[0]["age"];

  data.forEach((item) => {
    let cur = item["age"];
    if (cur < min) {
      min = cur;
    }

    if (cur > max) {
      max = cur;
    }
  });

  return [min, max, max - min];
}

const data = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

console.log(getMinMax(data));
