"use strict";
// By Types
// type Person = {
//     name: string;
//     age: number;
var add;
add = function (a, b) { return a + b; };
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n)
            this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi");
        }
    };
    return Person;
}());
// let user1: Greetable;
// user1 = {
//     name: 'vzan2012',
//     age: 100,
//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`)
//     }
// }
var user1;
user1 = new Person('Sai Shravan');
user1.greet('Welcome');
console.log(user1);
//# sourceMappingURL=app.js.map