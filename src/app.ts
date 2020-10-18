// Decorators
// function Logger(constructor: Function) {
//     console.log('Logging ...')
//     console.log(constructor)
// }
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log('Logging ...')
        console.log(logString)
        console.log(constructor)
    }
}

// Adding a decorator 
@Logger('Logging - Person')
class Person {
    name = "vzan2012";

    constructor() {
        console.log('Person object is created')
    }
}

const personObj = new Person();
console.log(personObj)