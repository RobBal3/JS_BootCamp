// 4) Make an array of strings of the names

function namesOnly(arr) {
  return arr.map((item) => {
    // console.log(item);
    return item["name"];
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

console.log(namesOnly(persData));
