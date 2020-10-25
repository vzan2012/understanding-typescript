"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super();
                console.log('Rendering Template');
                console.log(args);
                const hookElem = document.getElementById(hookId);
                // const username = new originalConstructor()
                if (hookElem) {
                    hookElem.innerHTML = template;
                    hookElem.querySelector('h1').textContent = this.name;
                }
            }
        };
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
// Property Decorators 
function Log(target, propertyName) {
    console.log('Property Decorator !!!');
    console.log(target, propertyName);
}
// Accessor Decorators
function Log2(target, name, descriptor) {
    console.log('Accessor Decorator !!!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// Method Decorators 
function Log3(target, name, descriptor) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// Parameter Decorator 
function Log4(target, name, position) {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
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
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product('Book 1', 99);
const p2 = new Product('Book 2', 108);
// Example for Autobind Decorator 
function AutoBind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumeration: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'Working !!!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector('button');
// button.addEventListener('click', p.showMessage.bind(p))
button.addEventListener('click', p.showMessage);
//# sourceMappingURL=app.js.map