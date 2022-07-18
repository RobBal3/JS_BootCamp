// make a new array out of objArr so that every object has the same logName function that is declared below
// use logName function do not create your own

const objArr = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];

function logName() {
  console.log(this.name);
}

let newObjArr = objArr.map((item) => {
  item["logName"] = logName;
  return item;
});

console.log(newObjArr);
