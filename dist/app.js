"use strict";
// Next-gen Scripts
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let and const
var userNameUsed = 'vzan2012';
var userAge = 102;
// userName = 'other';
console.log(userNameUsed);
console.log(userAge);
// Arrow function 
var addition = function (a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
};
// A default parameter should be used at the last 
// console.log(add(5, 5))
var printOut = function (output) { return console.log(output); };
printOut(addition(5, 7));
printOut(addition(5));
var buttonClick = document.querySelector('button');
buttonClick === null || buttonClick === void 0 ? void 0 : buttonClick.addEventListener('click', function (event) { return console.log(event); });
// Spread Operator 
var hobbies = ['Reading', 'Playing'];
var activeHobbies = ['Sports'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
var person = { userName: 'vzan2012', age: 102 };
var replicateUser = __assign({}, person);
console.log("Person Object: ");
console.log(person);
console.log("Replicated User Object: ");
console.log(replicateUser);
// REST parameters 
// const add_N_numbers = (...nums: number[]): number => {
//     return nums.reduce((currValue, resultValue) => {
//         return currValue + resultValue
//     }, 0)
// };
var add_N_numbers = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (currValue, resultValue) { return currValue + resultValue; }, 0);
};
console.log(add_N_numbers(4, 5, 6, 7, 8, 9));
// Array and Object Destructuring
// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]
var hobby1 = activeHobbies[0], hobby2 = activeHobbies[1], remainingHobbies = activeHobbies.slice(2);
console.log(hobby1, hobby2, remainingHobbies);
var userName = replicateUser.userName, age = replicateUser.age;
console.log(userName, age);
//# sourceMappingURL=app.js.map