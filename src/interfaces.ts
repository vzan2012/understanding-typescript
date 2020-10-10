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

// type AddFn = (a: number, b: number) => number

interface AddFn {
    //  Anonymous function
    (a: number, b: number): number
}

let add: AddFn;

add = (a: number, b: number) => a + b

// Interface 
interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30

    constructor(n?: string) { if (n) this.name = n }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`)
        } else {
            console.log(`Hi`)
        }
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
user1 = new Person('Sai Shravan')

user1.greet('Welcome')
console.log(user1)