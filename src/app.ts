// By Types
// type Person = {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// Interfaces
// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// Interface 
interface Greetable {
    name: string;
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30

    constructor(n: string) { this.name = n }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`)
    }
}

// let user1: Greetable;

// user1 = {
//     name: 'vzan2012',
//     age: 100,

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`)
//     }
// }
let user1: Greetable;
user1 = new Person('vzan2012')

user1.greet('Welcome')
console.log(user1)