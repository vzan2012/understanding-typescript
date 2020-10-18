// Decorators
// function Logger(constructor: Function) {
//     console.log('Logging ...')
//     console.log(constructor)
// }
function Logger(logString: string) {
    console.log('LOGGER FACTORY')
    return function (constructor: Function) {
        console.log('Logging ...')
        console.log(logString)
        console.log(constructor)
    }
}

function withTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY')
    // return function (_: Function) {
    return function (constructor: any) {
        console.log('Rendering Template')
        const hookElem = document.getElementById(hookId);
        const username = new constructor()
        if (hookElem) {
            hookElem.innerHTML = template
            hookElem.querySelector('h1')!.textContent = username.name
        }
    }
}

// Adding a decorator 
@Logger('Logging - Person')
@withTemplate('<h1>Person Object</h1>', 'app')
class Person {
    name = "vzan2012";

    constructor() {
        console.log('Person object is created')
    }
}

const personObj = new Person();
console.log(personObj)

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator !!!')
    console.log(target, propertyName)
}

class Product {
    @Log
    title: string
    private _price: number

    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Price is Invalid - should be greater than zero')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax)
    }
}