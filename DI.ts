'use strict';

class Car {
  type;
  color;
  fuellevel;

  constructor(type, color, fuellevel) {
    this.type = type;
    this.color = color;
    this.fuellevel = fuellevel;
  }
  needFuel(): any {
    return (`I need ${this.type}`)
  }
}

class Family {
  car: Car;
  constructor(car) {
    this.car = car;
  }
}

let myCar = new Car('benzin', 'red', 0);
let myFamily = new Family(myCar);

console.log(myFamily.car.color);
console.log(myFamily.car.needFuel());

