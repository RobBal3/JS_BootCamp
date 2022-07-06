// 12) Given an array of objects where objects have the following structure return an array of objects also containing
// a field country, for example if phone number starts with +374 the field country will be Armenia, you can assume that
// first 4characters of phoneNumber represent the country, so you can just query them ,the country codes are given below,
// you will need to make the names uppercase,
// also there may or may not be a field relation which will be a string representing the name of one of the objects in the array
// you will need to replace that string with a reference to that actual object

function modifyObj(input) {
  const phoneCountryCodes = {
    "+374": "Armenia",
    "+375": "Somali",
    "+376": "Russia",
    "+377": "Hoktemberyan",
  };

  return input.map((item, index, arr) => {
    item["name"] = item["name"].toUpperCase();
    item["country"] = phoneCountryCodes[item["phoneNumber"].slice(0, 4)];
    item["relation"] = arr[index];
    return item;
  });
}

let input = [
  {
    name: "sarah",
    age: 32,
    phoneNumber: "+374000000",
    relation: "nelly",
  },
  {
    name: "nelly",
    age: 11,
    phoneNumber: "+3750020000",
    relation: "sarah",
  },
];

console.log(modifyObj(input));
