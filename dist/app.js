"use strict";
// By Types
// type Person = {
//     name: string;
//     age: number;
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
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
user1 = new Person('vzan2012');
user1.greet('Welcome');
console.log(user1);
//# sourceMappingURL=app.js.map