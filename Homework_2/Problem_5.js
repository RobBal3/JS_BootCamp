// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr) {
  return arr.map((item) => {
    return item["age"] > 18
      ? item["name"] + " can go to The Matrix"
      : item["name"] + " is under age!!";
  });
}

let persData = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

console.log(makeStrings(persData));
