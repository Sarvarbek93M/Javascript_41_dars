"use strict";

class Car {
  constructor(name, color, startSpeed, maxSpeed) {
    this.name = name;
    this.color = color;
    this.startSpeed = startSpeed;
    this.maxSpeed = maxSpeed;
  }
  maxSpeedCar() {
    // maxSpeedCar bu yerda metod
    return this.startSpeed + this.maxSpeed;
  }
}
class Truckt extends Car {
  constructor(name, color, startSpeed, maxSpeed, netto) {
    super(name, color, startSpeed, maxSpeed);
    this.netto = netto;
  }
  everageTruckspeed() {
    return (this.maxSpeed - this.startSpeed) / this.netto;
  }
}
// extends orqali konstructorni sinxron qilib beradi

const bmw = new Car("bmw", "black", 100, 400);
const ural = new Truckt("ural", "yellow", 60, 160, 2);
//console.log(bmw.maxSpeedCar());

console.log(ural.everageTruckspeed());
console.log(ural.maxSpeedCar());
