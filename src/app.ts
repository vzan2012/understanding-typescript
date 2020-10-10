// Intersection Types 
type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startedDate: Date
}

type ElevatedEmployee = Admin & Employee

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


const e1: ElevatedEmployee = {
    name: 'vzan2012',
    privileges: ['create-server'],
    startedDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric

const e2: Universal = 9

const add = (a: Combinable, b: Combinable) => {
    if (typeof (a) === 'string' || typeof (b) == 'string')
        return a.toString() + b.toString();
    return a + b;
}

type UnknownEmployee = Admin | Employee;

const printEmployeeInformation = (emp: UnknownEmployee) => {
    console.log(`Name: ${emp.name}`);
    // Check the property is available 
    if ('privileges' in emp)
        console.log(`Privileges: ${emp.privileges}`)
    // Check the property is available 
    if ('startedDate' in emp)
        console.log(`Started Date: ${emp.startedDate}`)
}

printEmployeeInformation(e1)
printEmployeeInformation({ name: 'Sai Shravan', startedDate: new Date() })

class Car {
    drive() {
        console.log(`Driving ...`)
    }
}

class Truck {
    drive() {
        console.log(`Driving Truck`)
    }

    loadCargo(amount: number) {
        console.log(`Loading Cargo ... ${amount}`)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    // if ('loadCargo' in vehicle)
    //     vehicle.loadCargo(1000)
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000)
}

useVehicle(v1);
useVehicle(v2);

// Discriminating Unions 
interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break
        case 'horse':
            speed = animal.runningSpeed
    }
    console.log(`Moving at Speed - ${animal.type}: ${speed}`)
    // if ('flyingSpeed' in animal)
    //     console.log(`Moving speed: ${animal.flyingSpeed}`)
}

moveAnimal({ type: 'bird', flyingSpeed: 600 })
moveAnimal({ type: 'horse', runningSpeed: 600 })