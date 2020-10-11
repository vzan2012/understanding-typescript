"use strict";
// Using Interfaces
// interface Admin {
//     name: string;
//     privileges: string[]
// }
// interface Employee {
//     name: string;
//     startedDate: Date
// }
// interface ElevatedEmployee extends Employee, Admin { }
var e1 = {
    name: 'vzan2012',
    privileges: ['create-server'],
    startedDate: new Date()
};
var e2 = 9;
var add = function (a, b) {
    if (typeof (a) === 'string' || typeof (b) == 'string')
        return a.toString() + b.toString();
    return a + b;
};
var printEmployeeInformation = function (emp) {
    console.log("Name: " + emp.name);
    // Check the property is available 
    if ('privileges' in emp)
        console.log("Privileges: " + emp.privileges);
    // Check the property is available 
    if ('startedDate' in emp)
        console.log("Started Date: " + emp.startedDate);
};
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Sai Shravan', startedDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving ...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving Truck");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading Cargo ... " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if ('loadCargo' in vehicle)
    //     vehicle.loadCargo(1000)
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log("Moving at Speed - " + animal.type + ": " + speed);
    // if ('flyingSpeed' in animal)
    //     console.log(`Moving speed: ${animal.flyingSpeed}`)
}
moveAnimal({ type: 'bird', flyingSpeed: 600 });
moveAnimal({ type: 'horse', runningSpeed: 600 });
// TypeCasting Examples
// const paragraph = document.querySelector('#message-output')
// Method 1:
// const userInputElement = <HTMLInputElement>document.querySelector('#user-input')!
// Method 2:
var userInputElement = document.querySelector('#user-input');
userInputElement.value = 'Hello !!!';
var errorBox = {
    email: 'Not a Valid Email',
    username: 'Must start with a lowercase character !!!'
};
function addSum(a, b) {
    if (typeof (a) === 'string' || typeof (b) == 'string')
        return a.toString() + b.toString();
    return a + b;
}
var resultSum = addSum(10, 20);
console.log(resultSum);
// const resultSum = addSum('Ten', ' Twenty')
// console.log(resultSum.split(' '))
//# sourceMappingURL=app.js.map