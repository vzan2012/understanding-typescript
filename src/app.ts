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
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(...args: any[]) {
                super();
                console.log('Rendering Template')
                console.log(args)
                const hookElem = document.getElementById(hookId);
                // const username = new originalConstructor()
                if (hookElem) {
                    hookElem.innerHTML = template
                    hookElem.querySelector('h1')!.textContent = this.name
                }
            }
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

// Property Decorators 
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator !!!')
    console.log(target, propertyName)
}

// Accessor Decorators
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator !!!');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

// Method Decorators 
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method Decorator');
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

// Parameter Decorator 
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator');
    console.log(target)
    console.log(name)
    console.log(position)
}


class Product {
    @Log
    title: string
    private _price: number

    @Log2
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

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}

const p1 = new Product('Book 1', 99)
const p2 = new Product('Book 2', 108)

// Example for Autobind Decorator 
function AutoBind(_target: any, _methodName: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumeration: false,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
}

class Printer {
    message: string = 'Working !!!';

    @AutoBind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer();

const button = document.querySelector('button')!

// button.addEventListener('click', p.showMessage.bind(p))
button.addEventListener('click', p.showMessage)

// Validation with Decorators - Example 
interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required','positive']
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
}

function PostiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive']
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if (!objValidatorConfig) {
        return true;
    }

    let isValid: boolean = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop]
                    break
                case 'positive':
                    isValid = isValid && obj[prop] > 0
                    break
            }
        }
    }
    return isValid
}

class Course {
    @Required
    title: string;
    @PostiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', e => {
    e.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement
    const priceEl = document.getElementById('price') as HTMLInputElement

    const title = titleEl.value;
    const price = +priceEl.value

    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        throw alert('Invalid Input. Please try again')
        return;
    }
    console.log(createdCourse)
})