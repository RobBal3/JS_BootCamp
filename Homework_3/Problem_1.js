// as you can see toyota2 does not have a logModel function
// borrow that function from toyota1 and call i, so it console.logs "Toyota Rav4"

const toyota1 = {
  model: "Toyota",
  type: "Camry",
  logModel() {
    console.log(this.model, this.type);
  },
};

const toyota2 = {
  model: "Toyota",
  type: "Rav4",
};

console.log(toyota1.logModel.call(toyota2));
