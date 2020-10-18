"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators
// function Logger(constructor: Function) {
//     console.log('Logging ...')
//     console.log(constructor)
// }
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log('Logging ...');
        console.log(logString);
        console.log(constructor);
    };
}
function withTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    // return function (_: Function) {
    return function (constructor) {
        console.log('Rendering Template');
        const hookElem = document.getElementById(hookId);
        const username = new constructor();
        if (hookElem) {
            hookElem.innerHTML = template;
            hookElem.querySelector('h1').textContent = username.name;
        }
    };
}
// Adding a decorator 
let Person = class Person {
    constructor() {
        this.name = "vzan2012";
        console.log('Person object is created');
    }
};
Person = __decorate([
    Logger('Logging - Person'),
    withTemplate('<h1>Person Object</h1>', 'app')
], Person);
const personObj = new Person();
console.log(personObj);
function Log(target, propertyName) {
    console.log('Property Decorator !!!');
    console.log(target, propertyName);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Price is Invalid - should be greater than zero');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
//# sourceMappingURL=app.js.map