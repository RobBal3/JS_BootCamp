// please take a look at the following

// this is just an example of object that you will still need to create by calling CreateCar constructor

const exampleOfAlreadyCreatedObject = {
  id: 1,
  model: "Toyota",
  year: "1996",
  color: "red",
  driveTrain: "4x4",
};

function CreateCar(id, model, year, color, driveTrain) {
  this.id = id;
  this.model = model;
  this.year = year;
  this.color = color;
  this.driveTrain = driveTrain;
}

// please take a look at the the inventory object and implement the missing methods

const inventory = {
  cars: [],

  addCar(car) {
    this.cars.push(car);
  },

  removeCar(id) {
    this.cars = this.cars.filter((car) => {
      return car["id"] !== id;
    });
  },

  listCars() {
    this.cars.forEach((car) => {
      console.log(car);
    });
  },

  listCarsByConditionCallback(conditionCallback) {
    let filteredArr = this.cars.filter(conditionCallback);

    filteredArr.forEach((item) => {
      console.log(item);
    });
  },
};

inventory.addCar(new CreateCar(1, "Toyota", "1996", "red", "4x4"));
inventory.addCar(
  new CreateCar(2, "Mercedes", "2000", "white", "rear wheel drive")
);
inventory.addCar(new CreateCar(3, "BMW", "2020", "black", "rear wheel drive"));
inventory.removeCar(2);
inventory.listCars();
inventory.listCarsByConditionCallback(
  (car) => car.model === "BMW" && car.year === "2020"
);
